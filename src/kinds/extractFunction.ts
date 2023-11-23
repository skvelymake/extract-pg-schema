import assert from "assert";
import type { Knex } from "knex";
import type { QueryResult } from "pg";

import PgType, { Kind } from "./PgType";

type FunctionArgument = {
  name: string | null;
  type: PgType;
  mode: "in" | "out" | "inout" | "table" | "variadic";
  isOptional: boolean;
  defaultExpression: string | null;
};

type FunctionReturnType = {
  type: PgType;
  isSetOf: boolean;
  definition: string;
};

export interface FunctionDetails extends PgType<"function"> {
  language: "sql" | "plpgsql" | "c" | "internal" | string;
  definition: string;
  argumentsDefinition: string;
  arguments: FunctionArgument[];
  returnType: FunctionReturnType;
}

const extractFunction = async (
  db: Knex,
  pgFunction: PgType<"function">,
): Promise<FunctionDetails> => {
  const functionInfoQuery = await db.raw<
    QueryResult<{
      function_definition: string;
      no_args: number;
      no_arg_defaults: number;
      arg_defaults: string[] | null;
      arg_types: number[];
      arg_modes: Array<"i" | "o" | "b" | "v" | "t"> | null;
      arg_names: string[] | null;
      args_definition: string;
      return_type: number;
      return_setof: boolean;
      return_definition: string;
      language: string;
    }>
  >(
    `
      SELECT
        pg_get_functiondef(p.oid) AS function_definition,
        p.pronargs AS no_args,
        p.pronargdefaults AS no_arg_defaults,
        (SELECT array_agg(pg_get_function_arg_default(p.oid, s)) FROM generate_series(p.pronargs - p.pronargdefaults + 1, p.pronargs::INTEGER) s WHERE p.pronargdefaults > 0) arg_defaults,
        COALESCE(p.proallargtypes::INT[], string_to_array(p.proargtypes::TEXT, ' ')::INT[]) AS arg_types,
        p.proargmodes::TEXT[] AS arg_modes,
        p.proargnames AS arg_names,
        pg_get_function_arguments(p.oid) AS args_definition,
        p.prorettype AS return_type,
        p.proretset AS return_setof,
        pg_get_function_result(p.oid) AS return_definition,
        pl.lanname AS language
      FROM pg_proc p
        JOIN pg_language pl ON pl.oid = p.prolang
      WHERE p.oid = :oid
    `,
    { oid: pgFunction.oid },
  );

  assert(functionInfoQuery.rows.length === 1, "Expected exactly one row");

  const functionInfo = functionInfoQuery.rows[0];

  const typesQuery = await db.raw<
    QueryResult<{
      oid: number;
      schema_name: string;
      type_name: string;
      kind: Kind;
    }>
  >(
    `
      SELECT t.oid,
             typnamespace::regnamespace::TEXT schema_name,
             SUBSTRING(typname, (CASE WHEN t.typcategory = 'A' THEN 2 ELSE 1 END))::TEXT ||
             REPEAT('[]', (CASE WHEN t.typcategory = 'A' THEN 1 ELSE 0 END)) AS type_name,
             CASE
               WHEN typtype = 'd' THEN 'domain'
               WHEN typtype = 'r' THEN 'range'
               WHEN typtype = 'c' THEN 'composite'
               WHEN typtype = 'e' THEN 'enum'
               WHEN typtype = 'b' THEN COALESCE((SELECT CASE
                                                          WHEN i.typtype = 'r' THEN 'range'
                                                          WHEN i.typtype = 'd' THEN 'domain'
                                                          WHEN i.typtype = 'c' THEN 'composite'
                                                          WHEN i.typtype = 'e' THEN 'enum'
                                                          END AS inner_kind
                                                 FROM pg_type i
                                                 WHERE i.oid = t.typelem), 'base')
               ELSE 'unknown'
               END AS kind
      FROM pg_type t
      WHERE t.oid = ANY(ARRAY[:oids::INTEGER[]])
  `,
    { oids: [...functionInfo.arg_types, functionInfo.return_type] },
  );

  const returnTypeOid = functionInfo.return_type;
  const returnTypeInfo = typesQuery.rows.find(
    (row) => row.oid === returnTypeOid,
  );

  assert(returnTypeInfo, `Could not find type info for oid ${returnTypeOid}`);

  const returnType = {
    type: {
      oid: returnTypeInfo.oid,
      name: returnTypeInfo.type_name,
      schemaName: returnTypeInfo.schema_name,
      kind: returnTypeInfo.kind,
      comment: null,
    },
    isSetOf: functionInfo.return_setof,
    definition: functionInfo.return_definition,
  };

  const functionArguments: FunctionArgument[] = [];
  const defaultArgumentsStart =
    functionInfo.no_args - functionInfo.no_arg_defaults;

  // process input and variadic arguments
  for (let i = 0; i < functionInfo.no_args; i++) {
    const argumentOid = functionInfo.arg_types[i];
    const argumentName = functionInfo.arg_names?.[i] ?? null;
    const argumentMode = parseArgumentMode(functionInfo.arg_modes?.[i]);

    const isOptional =
      functionInfo.no_arg_defaults > 0 && i >= defaultArgumentsStart;

    assert(
      !isOptional || functionInfo.arg_defaults,
      "Expected arg_defaults to be provided",
    );
    const defaultExpression =
      isOptional && Array.isArray(functionInfo.arg_defaults)
        ? functionInfo.arg_defaults[i - defaultArgumentsStart]
        : null;

    const typeInfo = typesQuery.rows.find((row) => row.oid === argumentOid);
    assert(typeInfo, `Could not find type info for oid ${argumentOid}`);

    const type = {
      oid: typeInfo.oid,
      name: typeInfo.type_name,
      schemaName: typeInfo.schema_name,
      kind: typeInfo.kind,
      comment: null,
    };

    functionArguments.push({
      name: argumentName,
      type,
      mode: argumentMode,
      isOptional,
      defaultExpression,
    });
  }

  // process output arguments
  if (functionInfo.arg_modes) {
    assert(
      functionInfo.arg_modes.length === functionInfo.arg_types.length,
      "Expected arg_modes and arg_types to have the same length",
    );
    assert(
      functionInfo.arg_modes.length >= functionInfo.no_args,
      "Expected arg_modes to have at least as many elements as no_args",
    );

    for (let i = functionInfo.no_args; i < functionInfo.arg_modes.length; i++) {
      const argumentMode = parseArgumentMode(functionInfo.arg_modes[i]);

      assert(
        argumentMode === "out" || argumentMode === "table",
        "Expected argument mode to be out or table",
      );

      const argumentOid = functionInfo.arg_types[i];
      const argumentName = functionInfo.arg_names?.[i] ?? null;

      const typeInfo = typesQuery.rows.find((row) => row.oid === argumentOid);
      assert(typeInfo, `Could not find type info for oid ${argumentOid}`);

      const type = {
        oid: typeInfo.oid,
        name: typeInfo.type_name,
        schemaName: typeInfo.schema_name,
        kind: typeInfo.kind,
        comment: null,
      };

      functionArguments.push({
        name: argumentName,
        type,
        mode: argumentMode,
        isOptional: false,
        defaultExpression: null,
      });
    }
  }

  return {
    ...pgFunction,
    definition: functionInfo.function_definition,
    argumentsDefinition: functionInfo.args_definition,
    arguments: functionArguments,
    returnType,
    language: functionInfo.language,
  };
};

export default extractFunction;

function parseArgumentMode(mode?: string) {
  switch (mode) {
    case "o": {
      return "out";
    }
    case "t": {
      return "table";
    }
    case "b": {
      return "inout";
    }
    case "v": {
      return "variadic";
    }
    default: {
      return "in";
    }
  }
}

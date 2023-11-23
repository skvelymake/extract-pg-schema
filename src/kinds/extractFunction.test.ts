import type { Knex } from "knex";
import type { QueryResult } from "pg";
import { describe, expect } from "vitest";

import { test } from "../tests/useSchema";
import extractFunction, { FunctionDetails } from "./extractFunction";
import PgType from "./PgType";

async function makePgType(
  db: Knex,
  functionName: string,
  schemaName = "test",
): Promise<PgType<"function">> {
  const oidQuery = await db.raw(
    "SELECT oid FROM pg_proc WHERE proname = :name",
    { name: functionName },
  );
  expect(oidQuery.rows.length).toBe(1);

  const oid = oidQuery.rows[0].oid;

  return {
    oid,
    schemaName,
    name: functionName,
    kind: "function",
    comment: null,
  };
}

async function makeAndExtractFunction(
  db: Knex,
  functionName: string,
  sql: string,
) {
  await db.raw(sql);

  const pgType = await makePgType(db, functionName);

  const result = await extractFunction(db, pgType);

  return result;
}

describe("extractFunction", () => {
  test("it should extract function with argument and return value", async ({
    knex: [db],
  }) => {
    const result = await makeAndExtractFunction(
      db,
      "some_function",
      "create function test.some_function(int_arg integer) returns integer language sql as $$ select 1 as id $$",
    );

    const expected: FunctionDetails = {
      oid: expect.any(Number),
      name: "some_function",
      schemaName: "test",
      kind: "function",
      comment: null,
      definition: expect.any(String),
      argumentsDefinition: expect.any(String),
      arguments: [
        expect.objectContaining({
          name: "int_arg",
          type: expect.objectContaining({
            oid: expect.any(Number),
            name: "int4",
          }),
          mode: "in",
        }),
      ],
      returnType: {
        definition: "integer",
        type: expect.objectContaining({
          oid: expect.any(Number),
          name: "int4",
        }),
        isSetOf: false,
      },
      language: "sql",
    };

    expect(result).toStrictEqual(expected);
  });

  test("it should extract function with default argument", async ({
    knex: [db],
  }) => {
    const result = await makeAndExtractFunction(
      db,
      "some_function",
      "create function test.some_function(int_arg integer, int_arg_default integer default 42) returns integer language sql as $$ select 1 as id $$",
    );

    const expected: FunctionDetails = {
      oid: expect.any(Number),
      name: "some_function",
      schemaName: "test",
      kind: "function",
      comment: null,
      definition: expect.any(String),
      argumentsDefinition: expect.any(String),
      arguments: [
        expect.objectContaining({
          name: "int_arg",
          isOptional: false,
          defaultExpression: null,
        }),
        expect.objectContaining({
          name: "int_arg_default",
          isOptional: true,
          defaultExpression: "42",
        }),
      ],
      returnType: {
        definition: "integer",
        type: expect.objectContaining({
          oid: expect.any(Number),
          name: "int4",
        }),
        isSetOf: false,
      },
      language: "sql",
    };

    expect(result).toStrictEqual(expected);
  });

  test("it should extract function without argument", async ({
    knex: [db],
  }) => {
    const result = await makeAndExtractFunction(
      db,
      "some_function",
      "create function test.some_function() returns integer language sql as $$ select 1 $$",
    );

    const expected: FunctionDetails = {
      oid: expect.any(Number),
      name: "some_function",
      schemaName: "test",
      kind: "function",
      comment: null,
      definition: expect.any(String),
      argumentsDefinition: expect.any(String),
      arguments: [],
      returnType: {
        definition: "integer",
        type: expect.objectContaining({
          oid: expect.any(Number),
          name: "int4",
        }),
        isSetOf: false,
      },
      language: "sql",
    };

    expect(result).toStrictEqual(expected);
  });

  test("it should extract function with variadic argument", async ({
    knex: [db],
  }) => {
    const result = await makeAndExtractFunction(
      db,
      "variadic_function",
      "create function test.variadic_function(VARIADIC int_list integer[]) returns integer language sql as $$ select 1 as id $$",
    );

    const expected: FunctionDetails = {
      oid: expect.any(Number),
      name: "variadic_function",
      schemaName: "test",
      kind: "function",
      comment: null,
      definition: expect.any(String),
      argumentsDefinition: expect.any(String),
      arguments: [
        expect.objectContaining({
          name: "int_list",
          type: expect.objectContaining({
            oid: expect.any(Number),
            name: "int4[]",
          }),
          mode: "variadic",
        }),
      ],
      returnType: {
        definition: "integer",
        type: expect.objectContaining({
          oid: expect.any(Number),
          name: "int4",
        }),
        isSetOf: false,
      },
      language: "sql",
    };

    expect(result).toStrictEqual(expected);
  });

  test("it should extract function with out argument", async ({
    knex: [db],
  }) => {
    const result = await makeAndExtractFunction(
      db,
      "out_function",
      "create function test.out_function(OUT out_int integer, OUT out_text text) returns record language sql as $$ select 42, 'text' $$",
    );

    const expected: FunctionDetails = {
      oid: expect.any(Number),
      name: "out_function",
      schemaName: "test",
      kind: "function",
      comment: null,
      definition: expect.any(String),
      argumentsDefinition: expect.any(String),
      arguments: [
        expect.objectContaining({
          name: "out_int",
          type: expect.objectContaining({
            oid: expect.any(Number),
            name: "int4",
          }),
          mode: "out",
        }),
        expect.objectContaining({
          name: "out_text",
          type: expect.objectContaining({
            oid: expect.any(Number),
            name: "text",
          }),
          mode: "out",
        }),
      ],
      returnType: {
        definition: "record",
        type: expect.objectContaining({
          oid: expect.any(Number),
          name: "record",
        }),
        isSetOf: false,
      },
      language: "sql",
    };

    expect(result).toStrictEqual(expected);
  });

  test("it should extract function with inout argument", async ({
    knex: [db],
  }) => {
    const result = await makeAndExtractFunction(
      db,
      "inout_function",
      "create function test.inout_function(INOUT inout_int integer, INOUT inout_text text) returns record language sql as $$ select 42, 'text' $$",
    );

    const expected: FunctionDetails = {
      oid: expect.any(Number),
      name: "inout_function",
      schemaName: "test",
      kind: "function",
      comment: null,
      definition: expect.any(String),
      argumentsDefinition: expect.any(String),
      arguments: [
        expect.objectContaining({
          name: "inout_int",
          type: expect.objectContaining({
            oid: expect.any(Number),
            name: "int4",
          }),
          mode: "inout",
        }),
        expect.objectContaining({
          name: "inout_text",
          type: expect.objectContaining({
            oid: expect.any(Number),
            name: "text",
          }),
          mode: "inout",
        }),
      ],
      returnType: {
        definition: "record",
        type: expect.objectContaining({
          oid: expect.any(Number),
          name: "record",
        }),
        isSetOf: false,
      },
      language: "sql",
    };

    expect(result).toStrictEqual(expected);
  });

  test("it should extract function with table return value", async ({
    knex: [db],
  }) => {
    const result = await makeAndExtractFunction(
      db,
      "table_function",
      "create function test.table_function() returns TABLE (id integer, value text) language sql as $$ select 42, 'text' $$",
    );

    const expected: FunctionDetails = {
      oid: expect.any(Number),
      name: "table_function",
      schemaName: "test",
      kind: "function",
      comment: null,
      definition: expect.any(String),
      argumentsDefinition: expect.any(String),
      arguments: [
        expect.objectContaining({
          name: "id",
          type: expect.objectContaining({
            oid: expect.any(Number),
            name: "int4",
          }),
          mode: "table",
        }),
        expect.objectContaining({
          name: "value",
          type: expect.objectContaining({
            oid: expect.any(Number),
            name: "text",
          }),
          mode: "table",
        }),
      ],
      returnType: {
        definition: "TABLE(id integer, value text)",
        type: expect.objectContaining({
          oid: expect.any(Number),
          name: "record",
        }),
        isSetOf: true,
      },
      language: "sql",
    };

    expect(result).toStrictEqual(expected);
  });

  test("it should extract function with setof return value", async ({
    knex: [db],
  }) => {
    const result = await makeAndExtractFunction(
      db,
      "setof_function",
      "create function test.setof_function() returns setof integer language sql as $$ select 42 $$",
    );

    const expected: FunctionDetails = {
      oid: expect.any(Number),
      name: "setof_function",
      schemaName: "test",
      kind: "function",
      comment: null,
      definition: expect.any(String),
      argumentsDefinition: expect.any(String),
      arguments: [],
      returnType: {
        definition: "SETOF integer",
        type: expect.objectContaining({
          oid: expect.any(Number),
          name: "int4",
        }),
        isSetOf: true,
      },
      language: "sql",
    };

    expect(result).toStrictEqual(expected);
  });

  test("it should extract different function variants", async ({
    knex: [db],
  }) => {
    await db.raw(
      "create function test.some_function(int_arg integer) returns integer language sql as $$ select int_arg $$",
    );

    await db.raw(
      "create function test.some_function(text_arg text) returns text language sql as $$ select text_arg $$",
    );

    const oidQuery = await db.raw<QueryResult<{ oid: number }>>(
      "SELECT oid FROM pg_proc WHERE proname = :name ORDER BY oid",
      { name: "some_function" },
    );

    expect(oidQuery.rows.length).toBe(2);
    const [functionVariant1Oid, functionVariant2Oid] = oidQuery.rows.map(
      (row) => row.oid,
    );

    const functionVariant1 = await extractFunction(db, {
      oid: functionVariant1Oid,
      schemaName: "test",
      name: "some_function",
      kind: "function",
      comment: null,
    });

    const functionVariant2 = await extractFunction(db, {
      oid: functionVariant2Oid,
      schemaName: "test",
      name: "some_function",
      kind: "function",
      comment: null,
    });

    const expectedFunctionVariant1: FunctionDetails = {
      oid: functionVariant1Oid,
      name: "some_function",
      schemaName: "test",
      kind: "function",
      comment: null,
      definition: expect.any(String),
      argumentsDefinition: expect.any(String),
      arguments: [
        expect.objectContaining({
          name: "int_arg",
          type: expect.objectContaining({
            oid: expect.any(Number),
            name: "int4",
          }),
        }),
      ],
      returnType: {
        definition: "integer",
        type: expect.objectContaining({
          oid: expect.any(Number),
          name: "int4",
        }),
        isSetOf: false,
      },
      language: "sql",
    };

    const expectedFunctionVariant2: FunctionDetails = {
      oid: functionVariant2Oid,
      name: "some_function",
      schemaName: "test",
      kind: "function",
      comment: null,
      definition: expect.any(String),
      argumentsDefinition: expect.any(String),
      arguments: [
        expect.objectContaining({
          name: "text_arg",
          type: expect.objectContaining({
            oid: expect.any(Number),
            name: "text",
          }),
        }),
      ],
      returnType: {
        definition: "text",
        type: expect.objectContaining({
          oid: expect.any(Number),
          name: "text",
        }),
        isSetOf: false,
      },
      language: "sql",
    };

    expect(functionVariant1).toStrictEqual(expectedFunctionVariant1);
    expect(functionVariant2).toStrictEqual(expectedFunctionVariant2);
  });
});

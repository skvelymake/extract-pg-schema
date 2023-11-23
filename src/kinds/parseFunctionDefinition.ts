import assert from "assert";
import pgParser, {
  PLpgSQL_expr,
  PLpgSQL_stmt_block,
  SelectStmt,
} from "pgsql-parser";

type VariableReference =
  | {
      type: "table";
      schema: string;
      table: string;
      column: string;
    }
  | {
      type: "constant";
      value: string;
      nullable: boolean;
    }
  | {
      type: "nested";
      references: VariableReference[];
    };

type VariableReferences = {
  byName: Record<string, Array<VariableReference>>;
  variableNumberToName: Record<number, string>;
};

function flattenSingleNestedVariableReferences(
  variableReferences: VariableReference[],
): VariableReference[] {
  const flattened: VariableReference[] = [];

  for (const variableReference of variableReferences) {
    if (
      variableReference.type === "nested" &&
      variableReference.references.length === 1
    ) {
      flattened.push(
        ...flattenSingleNestedVariableReferences(variableReference.references),
      );
    } else {
      flattened.push(variableReference);
    }
  }

  return flattened;
}

function analyzeSelectStatement(
  selectStatement: SelectStmt,
): VariableReference[] {
  const variableReferences: VariableReference[] = [];
  const tableAliases: Record<string, { schema: string; table: string }> = {};

  const fromClause = selectStatement.fromClause;
  let defaultTable = "";
  let defaultSchema = "";
  if (fromClause) {
    for (const fromItem of fromClause) {
      if (fromItem.RangeVar) {
        const rangeVar = fromItem.RangeVar;
        const schema = rangeVar.schemaname || "";
        const table = rangeVar.relname;
        if (rangeVar.alias) {
          assert(rangeVar.alias.aliasname, "Alias name is missing.");

          tableAliases[rangeVar.alias.aliasname] = {
            schema,
            table,
          };
        }

        if (!defaultTable) {
          defaultTable = table;
          defaultSchema = schema;
        }
      }
    }

    if (fromClause.length !== 1) {
      defaultTable = "";
      defaultSchema = "";
    }
  }

  const targetList = selectStatement.targetList;
  if (targetList) {
    for (const target of targetList) {
      if (target.ResTarget) {
        const resTarget = target.ResTarget;

        assert(resTarget.val, "ResTarget.val is missing.");

        if (resTarget.val.ColumnRef) {
          const columnRef = resTarget.val.ColumnRef;
          const fields = columnRef.fields;
          assert(
            fields.length === 1 || fields.length === 2 || fields.length === 3,
            "Invalid ColumnRef.fields, should only contain 1 or 2 elements.",
          );

          let sourceSchema = defaultSchema;
          let sourceTable = defaultTable;
          let sourceColumn = fields[0].String.str;
          if (fields.length === 3) {
            sourceSchema = fields[0].String.str;
            sourceTable = fields[1].String.str;
            sourceColumn = fields[2].String.str;
          } else if (fields.length === 2) {
            sourceTable = fields[0].String.str;
            sourceColumn = fields[1].String.str;
          } else {
            sourceColumn = fields[0].String.str;
          }

          if (sourceTable in tableAliases) {
            sourceSchema = tableAliases[sourceTable].schema;
            sourceTable = tableAliases[sourceTable].table;
          }

          variableReferences.push({
            type: "table",
            schema: sourceSchema,
            table: sourceTable,
            column: sourceColumn,
          });
        } else if (resTarget.val.SubLink) {
          const subLink = resTarget.val.SubLink;
          const subSelect = subLink.subselect;
          if (subSelect) {
            const nestedVariableReferences = analyzeSelectStatement(
              subSelect.SelectStmt,
            );
            variableReferences.push({
              type: "nested",
              references: nestedVariableReferences,
            });
          }
        } else {
          assert(false, "TODO unhandled ResTarget.val type.");
        }
      }
    }
  }

  return variableReferences;
}

function analyzeExpression(expr: PLpgSQL_expr): VariableReference[] {
  const parseResult = pgParser.parse(expr.PLpgSQL_expr.query);

  const sqlAst = parseResult[0].RawStmt.stmt;

  if (sqlAst?.SelectStmt) {
    return analyzeSelectStatement(sqlAst.SelectStmt);
  } else {
    assert(false, "TODO unhandled PLpgSQL_expr.query type.");
  }
}

function walkBlockAst(
  blockAst: Readonly<PLpgSQL_stmt_block>,
  variableReferences: VariableReferences,
) {
  if (!blockAst.PLpgSQL_stmt_block.body) {
    return;
  }

  for (const plpgSqlStatement of blockAst.PLpgSQL_stmt_block.body) {
    if ("PLpgSQL_stmt_block" in plpgSqlStatement) {
      walkBlockAst(plpgSqlStatement, variableReferences);
      continue;
    }

    if ("PLpgSQL_stmt_assign" in plpgSqlStatement) {
      const assignStatement = plpgSqlStatement.PLpgSQL_stmt_assign;
      const variableName =
        variableReferences.variableNumberToName[assignStatement.varno];
      assert(
        variableName,
        `Unresolved variable number ${assignStatement.varno}`,
      );

      variableReferences.byName[variableName].push(
        ...analyzeExpression(plpgSqlStatement.PLpgSQL_stmt_assign.expr),
      );

      continue;
    }

    if ("PLpgSQL_stmt_if" in plpgSqlStatement) {
      continue;
    }
    if ("PLpgSQL_stmt_case" in plpgSqlStatement) {
      continue;
    }
    if ("PLpgSQL_stmt_loop" in plpgSqlStatement) {
      continue;
    }
    if ("PLpgSQL_stmt_while" in plpgSqlStatement) {
      continue;
    }
    if ("PLpgSQL_stmt_fori" in plpgSqlStatement) {
      continue;
    }
    if ("PLpgSQL_stmt_fors" in plpgSqlStatement) {
      continue;
    }
    if ("PLpgSQL_stmt_forc" in plpgSqlStatement) {
      continue;
    }
    if ("PLpgSQL_stmt_foreach_a" in plpgSqlStatement) {
      continue;
    }
    if ("PLpgSQL_stmt_exit" in plpgSqlStatement) {
      continue;
    }
    if ("PLpgSQL_stmt_return" in plpgSqlStatement) {
      continue;
    }
    if ("PLpgSQL_stmt_return_next" in plpgSqlStatement) {
      continue;
    }
    if ("PLpgSQL_stmt_return_query" in plpgSqlStatement) {
      continue;
    }
    if ("PLpgSQL_stmt_raise" in plpgSqlStatement) {
      continue;
    }
    if ("PLpgSQL_stmt_assert" in plpgSqlStatement) {
      continue;
    }
    if ("PLpgSQL_stmt_execsql" in plpgSqlStatement) {
      const execSqlStatement = plpgSqlStatement.PLpgSQL_stmt_execsql;
      if (execSqlStatement.into) {
        const references = analyzeExpression(execSqlStatement.sqlstmt);
        const targetVariable = execSqlStatement.target;
        if ("PLpgSQL_rec" in targetVariable) {
          // TODO(m.skvely): Handle record variables.
        } else if ("PLpgSQL_row" in targetVariable) {
          const plpgSqlRow = targetVariable.PLpgSQL_row;
          assert(
            plpgSqlRow.fields.length === references.length,
            "We expect one reference per field.",
          );

          for (let i = 0; i < plpgSqlRow.fields.length; i++) {
            const field = plpgSqlRow.fields[i];
            const reference = references[i];

            let variableName = field.name;
            if (!(variableName in variableReferences.byName)) {
              variableName =
                variableReferences.variableNumberToName[field.varno];
            }
            assert(
              variableName && variableName in variableReferences.byName,
              `Unresolved variable name ${field.name} (number ${field.varno})`,
            );

            variableReferences.byName[variableName].push(reference);
          }
        } else {
          assert("PLpgSQL_var" in targetVariable);
          // TODO(m.skvely): Handle scalar variables.
        }
      }
      continue;
    }
    if ("PLpgSQL_stmt_dynexecute" in plpgSqlStatement) {
      continue;
    }
    if ("PLpgSQL_stmt_dynfors" in plpgSqlStatement) {
      continue;
    }
    if ("PLpgSQL_stmt_getdiag" in plpgSqlStatement) {
      continue;
    }
    if ("PLpgSQL_stmt_open" in plpgSqlStatement) {
      continue;
    }
    if ("PLpgSQL_stmt_fetch" in plpgSqlStatement) {
      continue;
    }
    if ("PLpgSQL_stmt_close" in plpgSqlStatement) {
      continue;
    }
    if ("PLpgSQL_stmt_perform" in plpgSqlStatement) {
      continue;
    }
    if ("PLpgSQL_stmt_call" in plpgSqlStatement) {
      continue;
    }
    if ("PLpgSQL_stmt_commit" in plpgSqlStatement) {
      continue;
    }
    if ("PLpgSQL_stmt_rollback" in plpgSqlStatement) {
      continue;
    }
    if ("PLpgSQL_stmt_set" in plpgSqlStatement) {
      continue;
    }

    assert(
      false,
      `Unknown statement type: ${JSON.stringify(plpgSqlStatement)}`,
    );
  }
}

function parseFunctionDefinition(
  functionDefinition: string,
  defaultSchema = "public",
): Record<string, Array<VariableReference>> {
  // NOTE(m.skvely): pg-query-emscripten parser didn't work for me
  const parsed = pgParser.parseFunction(functionDefinition);

  if (!parsed || !parsed[0]?.PLpgSQL_function) {
    throw new Error(
      `The string '${functionDefinition}' doesn't parse as a PLpgSQL function.`,
    );
  }

  const functionAst = parsed[0].PLpgSQL_function;

  const variableReferences: VariableReferences = {
    byName: {},
    variableNumberToName: {},
  };

  for (let i = 0; i < functionAst.datums.length; i++) {
    const variable = functionAst.datums[i];
    if ("PLpgSQL_var" in variable) {
      const name = variable.PLpgSQL_var.refname;

      if (name === "found") {
        continue;
      }

      variableReferences.byName[name] = [];
      variableReferences.variableNumberToName[i] = name;
    }
  }

  walkBlockAst(functionAst.action, variableReferences);

  const result: Record<string, Array<VariableReference>> = {};
  for (const [variableName, referenceList] of Object.entries(
    variableReferences.byName,
  )) {
    // TODO(m.skvely): Further result refinement is needed.
    result[variableName] = flattenSingleNestedVariableReferences(referenceList);
  }

  return result;
}

export default parseFunctionDefinition;

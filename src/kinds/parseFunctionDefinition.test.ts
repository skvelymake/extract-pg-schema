/* eslint-disable unicorn/consistent-function-scoping */
import { describe, expect, it } from "vitest";

import parseFunctionDefinition from "./parseFunctionDefinition";

describe("parseFunctionDefinition", () => {
  describe("SELECT statements", () => {
    it.each([
      // Direct select
      {
        sql: "SELECT name INTO out_name FROM people;",
      },
      {
        sql: "SELECT people.name INTO out_name FROM people;",
      },
      {
        sql: "SELECT people_schema.people.name INTO out_name FROM people_schema.people;",
        expectedDifference: { schema: "people_schema" },
      },
      // Aliased table
      {
        sql: "SELECT name INTO out_name FROM people as alias;",
      },
      {
        sql: "SELECT name INTO out_name FROM people_schema.people as alias;",
        expectedDifference: { schema: "people_schema" },
      },
      {
        sql: "SELECT alias.name INTO out_name FROM people as alias;",
      },
      {
        sql: "SELECT alias.name INTO out_name FROM people_schema.people as alias;",
        expectedDifference: { schema: "people_schema" },
      },
    ])(
      `should resolve table column from select: $sql`,
      ({ sql: sqlDefinition, expectedDifference }) => {
        const definition = parseFunctionDefinition(
          `
CREATE OR REPLACE FUNCTION dummy(OUT out_name varchar) AS $$
BEGIN
  ${sqlDefinition}
END;
$$ LANGUAGE plpgsql;
`,
        );

        expect(definition).toEqual({
          out_name: [
            {
              type: "table",
              schema: "",
              table: "people",
              column: "name",
              ...expectedDifference,
            },
          ],
        });
      },
    );
  });
});

import { describe, expect } from "vitest";

import { test } from "../tests/useSchema";
import extractRange, { RangeDetails } from "./extractRange";
import PgType from "./PgType";

const makePgType = (name: string, schemaName = "test"): PgType<"range"> => ({
  oid: 0,
  schemaName,
  name,
  kind: "range",
  comment: null,
});

describe("extractRange", () => {
  test("it should extract range values", async ({ knex: [db] }) => {
    await db.raw("create type test.some_range as range(subtype=timestamptz)");

    const result = await extractRange(db, makePgType("some_range"));

    const expected: RangeDetails = {
      oid: expect.any(Number),
      name: "some_range",
      schemaName: "test",
      kind: "range",
      comment: null,
      innerType: "pg_catalog.timestamptz",
    };
    expect(result).toStrictEqual(expected);
  });
});

import { describe, expect } from "vitest";

import { test } from "../tests/useSchema";
import fetchTypes from "./fetchTypes";

describe("fetchTypes", () => {
  test("it should fetch a simple type", async ({ knex: [db] }) => {
    await db.raw("create table test.some_table (id integer)");

    const types = await fetchTypes(db, ["test"]);

    expect(types).toHaveLength(1);
    expect(types[0]).toEqual({
      oid: expect.any(Number),
      name: "some_table",
      schemaName: "test",
      kind: "table",
      comment: null,
    });
  });

  test("it should fetch all kinds", async ({ knex: [db] }) => {
    await db.raw("create table test.some_table (id integer)");
    await db.raw("create view test.some_view as select 1 as id");
    await db.raw(
      "create materialized view test.some_materialized_view as select 1 as id",
    );
    await db.raw("create type test.some_composite_type as (id integer)");
    await db.raw("create type test.some_enum as enum ('a', 'b')");
    await db.raw("create domain test.some_domain as text");
    await db.raw("create type test.some_range as range (subtype = integer)");
    await db.raw(
      "create procedure test.some_procedure() language sql as $$ select 1 as id $$",
    );
    await db.raw(
      "create function test.some_function() returns integer language sql as $$ select 1 as id $$",
    );
    await db.raw(
      "create aggregate test.some_aggregate (numeric) ( sfunc = numeric_add, stype = numeric, initcond = '0');",
    );

    const types = await fetchTypes(db, ["test"]);
    expect(types).toHaveLength(10);
    expect(types.map((t) => [t.name, t.kind])).toEqual(
      expect.arrayContaining([
        ["some_table", "table"],
        ["some_view", "view"],
        ["some_materialized_view", "materializedView"],
        ["some_composite_type", "compositeType"],
        ["some_enum", "enum"],
        ["some_domain", "domain"],
        ["some_range", "range"],
        // ['some_multirange', 'multiRange'],
        ["some_procedure", "procedure"],
        ["some_function", "function"],
        ["some_aggregate", "aggregate"],
      ]),
    );
  });

  test("it should fetch comments", async ({ knex: [db] }) => {
    // Tables are a "class" in postgres.
    await db.raw("create table test.some_table (id integer)");
    await db.raw("comment on table test.some_table is 'some table comment'");

    // Domains are "types", which is different. Make sure we get those comments as well.
    await db.raw("create domain test.some_domain as text");
    await db.raw("comment on domain test.some_domain is 'some domain comment'");

    // Composite types are both types and classes. The comment comes from the class.
    await db.raw("create type test.some_composite_type as (id integer)");
    await db.raw(
      "comment on type test.some_composite_type is 'some composite type comment'",
    );

    await db.raw(
      "create procedure test.some_procedure() language sql as $$ select 1 as id $$",
    );
    await db.raw(
      "comment on procedure test.some_procedure is 'some procedure comment'",
    );
    await db.raw(
      "create function test.some_function() returns integer language sql as $$ select 1 as id $$",
    );
    await db.raw(
      "comment on function test.some_function is 'some function comment'",
    );
    await db.raw(
      "create aggregate test.some_aggregate (numeric) ( sfunc = numeric_add, stype = numeric, initcond = '0');",
    );
    await db.raw(
      "comment on aggregate test.some_aggregate (numeric) is 'some aggregate comment';",
    );

    const types = await fetchTypes(db, ["test"]);
    expect(types).toHaveLength(6);
    expect(types.map((t) => [t.name, t.comment])).toEqual(
      expect.arrayContaining([
        ["some_table", "some table comment"],
        ["some_domain", "some domain comment"],
        ["some_composite_type", "some composite type comment"],
        ["some_procedure", "some procedure comment"],
        ["some_function", "some function comment"],
        ["some_aggregate", "some aggregate comment"],
      ]),
    );
  });
});

import { Knex } from "knex";

import fetchExtensionItemIds from "../fetchExtensionItemIds";
import PgType, { classKindMap, routineKindMap, typeKindMap } from "./PgType";

const fetchTypes = async (
  db: Knex,
  schemaNames: string[],
): Promise<PgType[]> => {
  // We want to ignore everything belonging to extensions. (Maybe this should be optional?)
  const { extClassOids, extTypeOids, extProcOids } =
    await fetchExtensionItemIds(db);

  return db
    .select(
      db.raw("COALESCE(pg_class.oid, pg_type.oid) as oid"),
      "typname as name",
      "nspname as schemaName",
      db.raw(`case typtype
        when 'c' then case relkind
          ${Object.entries(classKindMap)
            .map(([key, classKind]) => `when '${key}' then '${classKind}'`)
            .join("\n")}
          end
      ${Object.entries(typeKindMap)
        .map(([key, typeKind]) => `when '${key}' then '${typeKind}'`)
        .join("\n")}
       end as kind`),
      db.raw(
        // Comments on the class take prescedent, but for composite types,
        // they will reside on the type itself.
        `COALESCE(
          obj_description(COALESCE(pg_class.oid, pg_type.oid)), 
          obj_description(pg_type.oid)
        ) as comment`,
      ),
    )
    .from("pg_catalog.pg_type")
    .join("pg_catalog.pg_namespace", "pg_namespace.oid", "pg_type.typnamespace")
    .fullOuterJoin("pg_catalog.pg_class", "pg_type.typrelid", "pg_class.oid")
    .where((b1) =>
      b1
        .where("pg_class.oid", "is", null)
        .orWhere((b2) =>
          b2
            .where("pg_class.relispartition", false)
            .whereNotIn("pg_class.relkind", ["S"])
            .whereNotIn("pg_class.oid", extClassOids),
        ),
    )
    .whereNotIn("pg_type.oid", extTypeOids)
    .whereIn("pg_type.typtype", ["c", ...Object.keys(typeKindMap)])
    .whereIn("pg_namespace.nspname", schemaNames)
    .union((q) =>
      q
        .select(
          "pg_proc.oid as oid",
          "proname as name",
          "nspname as schemaName",
          db.raw(`case prokind
        ${Object.entries(routineKindMap)
          .map(([key, routineKind]) => `when '${key}' then '${routineKind}'`)
          .join("\n")}
         end as kind`),
          db.raw(`obj_description(pg_proc.oid, 'pg_proc') as comment`),
        )
        .from("pg_catalog.pg_proc")
        .join(
          "pg_catalog.pg_namespace",
          "pg_namespace.oid",
          "pg_proc.pronamespace",
        )
        .whereNotIn("pg_proc.oid", extProcOids)
        .not.where((w) =>
          w
            .whereLike("pg_proc.prosrc", "range_constructor%")
            .orWhereLike("pg_proc.prosrc", "multirange_constructor%"),
        )
        .whereIn("pg_proc.prokind", Object.keys(routineKindMap))
        .whereIn("pg_namespace.nspname", schemaNames),
    );
};

export default fetchTypes;

import { Knex } from "knex";

import PgType from "./PgType";

export interface AggregateDetails extends PgType<"aggregate"> {}

const extractAggregate = async (
  db: Knex,
  pgAggregate: PgType<"aggregate">,
): Promise<AggregateDetails> => ({
  ...pgAggregate,
});

export default extractAggregate;

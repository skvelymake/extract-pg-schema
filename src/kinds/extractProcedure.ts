import { Knex } from "knex";

import extractFunction, { FunctionDetails } from "./extractFunction";
import PgType from "./PgType";

export interface ProcedureDetails
  extends PgType<"procedure">,
    Omit<FunctionDetails, "kind"> {}

const extractProcedure = async (
  db: Knex,
  pgProcedure: PgType<"procedure">,
): Promise<ProcedureDetails> => {
  const functionInfo = await extractFunction(db, {
    ...pgProcedure,
    kind: "function",
  });

  return {
    ...functionInfo,
    ...pgProcedure,
  };
};

export default extractProcedure;

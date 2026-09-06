import { getTokens } from "../../../../usecases";
import type { QueryResolvers } from "./../../../types.generated";

export const tokens: NonNullable<QueryResolvers["tokens"]> = async (
  _obj,
  _args,
  context,
  _info
) => {
  return await getTokens({}, context.ports);
};

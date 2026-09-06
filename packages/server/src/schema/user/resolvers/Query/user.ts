import { getUser } from "../../../../usecases";
import type { QueryResolvers } from "./../../../types.generated";

export const user: NonNullable<QueryResolvers["user"]> = async (
  _obj,
  _args,
  context,
  _info
) => {
  return await getUser({}, context.ports);
};


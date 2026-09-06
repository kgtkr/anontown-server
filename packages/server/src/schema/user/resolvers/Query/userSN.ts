import { getUserSN } from "../../../../usecases";
import type { QueryResolvers } from "./../../../types.generated";

export const userSN: NonNullable<QueryResolvers["userSN"]> = async (
  _obj,
  args,
  context,
  _info
) => {
  return await getUserSN({ id: args.id }, context.ports);
};


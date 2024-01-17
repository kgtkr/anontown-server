import type { QueryResolvers } from "./../../../types.generated";
export const userID: NonNullable<QueryResolvers["userID"]> = async (
  _obj,
  args,
  context,
  _info
) => {
  return await context.ports.userRepo.findID(args.sn);
};

import type { QueryResolvers } from "./../../../types.generated";

export const userSN: NonNullable<QueryResolvers["userSN"]> = async (
  _obj,
  args,
  context,
  _info
) => {
  return (await context.ports.userRepo.findOne(args.id)).sn;
};

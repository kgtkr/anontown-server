import type { QueryResolvers } from "./../../../types.generated";

export const user: NonNullable<QueryResolvers["user"]> = async (
  _obj,
  _args,
  context,
  _info
) => {
  return (
    await context.ports.userRepo.findOne(
      context.ports.authContainer.getToken().user
    )
  ).toAPI();
};

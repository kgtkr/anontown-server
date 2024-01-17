import type { QueryResolvers } from "./../../../types.generated";
export const token: NonNullable<QueryResolvers['token']> = async (
  _obj,
  _args,
  context,
  _info
) => {
  const token = await context.ports.tokenRepo.findOne(
    context.ports.authContainer.getToken().id
  );
  return token.toAPI();
};

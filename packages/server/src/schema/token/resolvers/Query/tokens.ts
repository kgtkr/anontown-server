import type { QueryResolvers } from "./../../../types.generated";
export const tokens: NonNullable<QueryResolvers['tokens']> = async (
  _obj,
  _args,
  context,
  _info
) => {
  const tokens = await context.ports.tokenRepo.findAll(
    context.ports.authContainer.getTokenMaster()
  );
  return tokens.map((t) => t.toAPI());
};

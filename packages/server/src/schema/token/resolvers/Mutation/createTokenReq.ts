import { AtNotFoundError } from "../../../../at-error";
import type { MutationResolvers } from "./../../../types.generated";
export const createTokenReq: NonNullable<
  MutationResolvers["createTokenReq"]
> = async (_obj, _args, context, _info) => {
  const token = await context.ports.tokenRepo.findOne(
    context.ports.authContainer.getToken().id
  );
  if (token.type !== "general") {
    throw new AtNotFoundError("トークンが見つかりません");
  }
  const { req, token: newToken } = token.createReq(
    context.ports.clock.now(),
    context.ports.safeIdGenerator
  );

  await context.ports.tokenRepo.update(newToken);

  return req;
};

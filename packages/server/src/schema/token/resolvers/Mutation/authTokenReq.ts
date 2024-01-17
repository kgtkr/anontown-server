import { AtNotFoundError } from "../../../../at-error";
import type { MutationResolvers } from "./../../../types.generated";

export const authTokenReq: NonNullable<
  MutationResolvers["authTokenReq"]
> = async (_obj, args, context, _info) => {
  const token = await context.ports.tokenRepo.findOne(args.id);
  if (token.type !== "general") {
    throw new AtNotFoundError("トークンが見つかりません");
  }
  token.authReq(args.key, context.ports.clock.now());
  return token.toAPI();
};

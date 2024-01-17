import { TokenMaster } from "../../../../entities";
import type { MutationResolvers } from "./../../../types.generated";
import * as authFromApiParam from "../../../../server/auth-from-api-param";

export const createTokenMaster: NonNullable<
  MutationResolvers["createTokenMaster"]
> = async (_obj, args, context, _info) => {
  const authUser = await authFromApiParam.authUserRequestToUser(
    context.ports.userRepo,
    args.auth
  );
  const token = TokenMaster.create(
    context.ports.objectIdGenerator,
    authUser,
    context.ports.clock.now(),
    context.ports.safeIdGenerator
  );
  await context.ports.tokenRepo.insert(token);

  return token.toAPI();
};

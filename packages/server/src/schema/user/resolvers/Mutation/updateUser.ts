import type { MutationResolvers } from "./../../../types.generated";
import * as authFromApiParam from "../../../../server/auth-from-api-param";
import { nullToUndefined } from "@kgtkr/utils";
import { TokenMaster } from "../../../../entities";

export const updateUser: NonNullable<MutationResolvers["updateUser"]> = async (
  _obj,
  args,
  context,
  _info
) => {
  const authUser = await authFromApiParam.authUserRequestToUser(
    context.ports.userRepo,
    args.auth
  );
  const user = await context.ports.userRepo.findOne(authUser.id);
  const newUser = user.change(
    authUser,
    nullToUndefined(args.pass),
    nullToUndefined(args.sn)
  );
  await context.ports.userRepo.update(newUser);
  await context.ports.tokenRepo.delMasterToken(authUser);

  const token = TokenMaster.create(
    context.ports.objectIdGenerator,
    authUser,
    context.ports.clock.now(),
    context.ports.safeIdGenerator
  );
  await context.ports.tokenRepo.insert(token);
  return { user: newUser.toAPI(), token: token.toAPI() };
};

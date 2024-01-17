import { TokenMaster, User } from "../../../../entities";
import type { MutationResolvers } from "./../../../types.generated";
export const createUser: NonNullable<MutationResolvers["createUser"]> = async (
  _obj,
  args,
  context,
  _info
) => {
  await context.ports.recaptcha.verify(args.recaptcha);

  const user = User.create(
    context.ports.objectIdGenerator,
    args.sn,
    args.pass,
    context.ports.clock.now()
  );
  await context.ports.userRepo.insert(user);

  const token = TokenMaster.create(
    context.ports.objectIdGenerator,
    user.auth(args.pass),
    context.ports.clock.now(),
    context.ports.safeIdGenerator
  );
  await context.ports.tokenRepo.insert(token);

  return { user: user.toAPI(), token: token.toAPI() };
};

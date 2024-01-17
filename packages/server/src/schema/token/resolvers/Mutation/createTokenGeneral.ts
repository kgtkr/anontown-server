import { TokenGeneral } from "../../../../entities";
import type { MutationResolvers } from "./../../../types.generated";

export const createTokenGeneral: NonNullable<
  MutationResolvers["createTokenGeneral"]
> = async (_obj, args, context, _info) => {
  const client = await context.ports.clientRepo.findOne(args.client);
  const token = TokenGeneral.create(
    context.ports.objectIdGenerator,
    context.ports.authContainer.getTokenMaster(),
    client,
    context.ports.clock.now(),
    context.ports.safeIdGenerator
  );

  const { req, token: newToken } = token.createReq(
    context.ports.clock.now(),
    context.ports.safeIdGenerator
  );

  await context.ports.tokenRepo.insert(newToken);

  return {
    token: token.toAPI(),
    req,
  };
};

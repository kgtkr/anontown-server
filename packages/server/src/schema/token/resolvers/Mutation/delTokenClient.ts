import type { MutationResolvers } from "./../../../types.generated";
export const delTokenClient: NonNullable<
  MutationResolvers["delTokenClient"]
> = async (_obj, args, context, _info) => {
  const client = await context.ports.clientRepo.findOne(args.client);
  await context.ports.tokenRepo.delClientToken(
    context.ports.authContainer.getTokenMaster(),
    client.id
  );
  return null;
};

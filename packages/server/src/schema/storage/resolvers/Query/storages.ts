import type { QueryResolvers } from "./../../../types.generated";

export const storages: NonNullable<QueryResolvers["storages"]> = async (
  _obj,
  args,
  context,
  _info
) => {
  const storages = await context.ports.storageRepo.find(
    context.ports.authContainer.getToken(),
    {
      key: args.query.key ?? null,
      keyPrefix: args.query.keyPrefix ?? null,
    }
  );
  return storages.map((x) => x.toAPI(context.ports.authContainer.getToken()));
};

import type { MutationResolvers } from "./../../../types.generated";
export const delStorage: NonNullable<MutationResolvers["delStorage"]> = async (
  _obj,
  args,
  context,
  _info
) => {
  const storage = await context.ports.storageRepo.findOneKey(
    context.ports.authContainer.getToken(),
    args.key
  );
  await context.ports.storageRepo.del(storage);
  return null;
};

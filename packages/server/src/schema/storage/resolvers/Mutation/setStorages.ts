import { IStorageAPI, Storage } from "../../../../entities";
import type { MutationResolvers } from "./../../../types.generated";
export const setStorages: NonNullable<
  MutationResolvers["setStorages"]
> = async (_obj, args, context, _info) => {
  // TODO: トランザクション
  const results: IStorageAPI[] = [];
  for (const storageInput of args.input.storages) {
    const storage = Storage.create(
      context.ports.authContainer.getToken(),
      storageInput.key,
      storageInput.value
    );
    await context.ports.storageRepo.save(storage);
    results.push(storage.toAPI(context.ports.authContainer.getToken()));
  }
  return {
    storages: results,
  };
};

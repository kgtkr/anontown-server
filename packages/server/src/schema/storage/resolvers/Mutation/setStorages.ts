import { setStorages as setStoragesUsecase } from "../../../../usecases";
import type { MutationResolvers } from "./../../../types.generated";

export const setStorages: NonNullable<
  MutationResolvers["setStorages"]
> = async (_obj, args, context, _info) => {
  return await setStoragesUsecase(
    {
      storages: args.input.storages,
    },
    context.ports
  );
};

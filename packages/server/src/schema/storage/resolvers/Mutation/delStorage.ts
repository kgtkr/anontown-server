import { delStorage as delStorageUsecase } from "../../../../usecases";
import type { MutationResolvers } from "./../../../types.generated";

export const delStorage: NonNullable<MutationResolvers["delStorage"]> = async (
  _obj,
  args,
  context,
  _info
) => {
  return await delStorageUsecase(
    {
      key: args.key,
    },
    context.ports
  );
};

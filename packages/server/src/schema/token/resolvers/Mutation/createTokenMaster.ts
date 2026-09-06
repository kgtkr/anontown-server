import { createTokenMaster as createTokenMasterUsecase } from "../../../../usecases";
import type { MutationResolvers } from "./../../../types.generated";

export const createTokenMaster: NonNullable<
  MutationResolvers["createTokenMaster"]
> = async (_obj, args, context, _info) => {
  return await createTokenMasterUsecase(
    {
      auth: args.auth,
    },
    context.ports
  );
};


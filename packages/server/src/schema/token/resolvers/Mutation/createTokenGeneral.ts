import { createTokenGeneral as createTokenGeneralUsecase } from "../../../../usecases";
import type { MutationResolvers } from "./../../../types.generated";

export const createTokenGeneral: NonNullable<
  MutationResolvers["createTokenGeneral"]
> = async (_obj, args, context, _info) => {
  return await createTokenGeneralUsecase(
    {
      clientId: args.client,
    },
    context.ports
  );
};

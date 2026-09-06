import { delTokenClient as delTokenClientUsecase } from "../../../../usecases";
import type { MutationResolvers } from "./../../../types.generated";

export const delTokenClient: NonNullable<
  MutationResolvers["delTokenClient"]
> = async (_obj, args, context, _info) => {
  return await delTokenClientUsecase(
    {
      clientId: args.client,
    },
    context.ports
  );
};

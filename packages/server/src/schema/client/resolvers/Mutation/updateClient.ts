import { updateClient as updateClientUsecase } from "../../../../usecases";
import type { MutationResolvers } from "./../../../types.generated";

export const updateClient: NonNullable<
  MutationResolvers["updateClient"]
> = async (_obj, args, context, _info) => {
  return await updateClientUsecase(
    {
      id: args.id,
      name: args.name,
      url: args.url,
    },
    context.ports
  );
};

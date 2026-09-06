import { createClient as createClientUsecase } from "../../../../usecases";
import type { MutationResolvers } from "./../../../types.generated";

export const createClient: NonNullable<
  MutationResolvers["createClient"]
> = async (_obj, args, context, _info) => {
  return await createClientUsecase(
    {
      name: args.name,
      url: args.url,
    },
    context.ports
  );
};

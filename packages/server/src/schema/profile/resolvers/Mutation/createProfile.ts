import { createProfile as createProfileUsecase } from "../../../../usecases";
import type { MutationResolvers } from "./../../../types.generated";

export const createProfile: NonNullable<
  MutationResolvers["createProfile"]
> = async (_obj, args, context, _info) => {
  return await createProfileUsecase(
    {
      name: args.name,
      text: args.text,
      sn: args.sn,
    },
    context.ports
  );
};


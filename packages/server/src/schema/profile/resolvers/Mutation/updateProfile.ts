import { updateProfile as updateProfileUsecase } from "../../../../usecases";
import type { MutationResolvers } from "./../../../types.generated";

export const updateProfile: NonNullable<
  MutationResolvers["updateProfile"]
> = async (_obj, args, context, _info) => {
  return await updateProfileUsecase(
    {
      id: args.id,
      name: args.name,
      text: args.text,
      sn: args.sn,
    },
    context.ports
  );
};

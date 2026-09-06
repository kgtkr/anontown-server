import { updateUser as updateUserUsecase } from "../../../../usecases";
import type { MutationResolvers } from "./../../../types.generated";

export const updateUser: NonNullable<MutationResolvers["updateUser"]> = async (
  _obj,
  args,
  context,
  _info
) => {
  return await updateUserUsecase(
    {
      sn: args.sn,
      pass: args.pass,
      auth: args.auth,
    },
    context.ports
  );
};


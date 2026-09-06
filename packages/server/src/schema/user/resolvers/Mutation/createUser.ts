import { createUser as createUserUsecase } from "../../../../usecases";
import type { MutationResolvers } from "./../../../types.generated";

export const createUser: NonNullable<MutationResolvers["createUser"]> = async (
  _obj,
  args,
  context,
  _info
) => {
  return await createUserUsecase(
    {
      sn: args.sn,
      pass: args.pass,
      recaptcha: args.recaptcha,
    },
    context.ports
  );
};

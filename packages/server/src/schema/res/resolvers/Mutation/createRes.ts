import { createRes as createResUsecase } from "../../../../usecases";
import type { MutationResolvers } from "./../../../types.generated";

export const createRes: NonNullable<MutationResolvers["createRes"]> = async (
  _obj,
  args,
  context,
  _info
) => {
  return createResUsecase(args, context.ports);
};

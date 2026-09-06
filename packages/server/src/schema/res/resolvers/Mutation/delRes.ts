import { delRes as delResUsecase } from "../../../../usecases";
import type { MutationResolvers } from "./../../../types.generated";
export const delRes: NonNullable<MutationResolvers["delRes"]> = async (
  _obj,
  args,
  context,
  _info
) => {
  return delResUsecase(args, context.ports);
};

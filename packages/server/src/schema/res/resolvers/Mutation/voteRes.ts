import { voteRes as voteResUsecase } from "../../../../usecases";
import type { MutationResolvers } from "./../../../types.generated";
export const voteRes: NonNullable<MutationResolvers["voteRes"]> = async (
  _obj,
  args,
  context,
  _info
) => {
  return voteResUsecase(args, context.ports);
};

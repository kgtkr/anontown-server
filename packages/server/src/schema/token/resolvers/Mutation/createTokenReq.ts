import { createTokenReq as createTokenReqUsecase } from "../../../../usecases";
import type { MutationResolvers } from "./../../../types.generated";

export const createTokenReq: NonNullable<
  MutationResolvers["createTokenReq"]
> = async (_obj, _args, context, _info) => {
  return await createTokenReqUsecase({}, context.ports);
};


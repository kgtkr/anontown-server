import { authTokenReq as authTokenReqUsecase } from "../../../../usecases";
import type { MutationResolvers } from "./../../../types.generated";

export const authTokenReq: NonNullable<
  MutationResolvers["authTokenReq"]
> = async (_obj, args, context, _info) => {
  return await authTokenReqUsecase(
    {
      id: args.id,
      key: args.key,
    },
    context.ports
  );
};

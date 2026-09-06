import { resisterPushSubscription as resisterPushSubscriptionUsecase } from "../../../../usecases";
import type { MutationResolvers } from "./../../../types.generated";

export const resisterPushSubscription: NonNullable<
  MutationResolvers["resisterPushSubscription"]
> = async (_obj, args, context, _info) => {
  return resisterPushSubscriptionUsecase(args, context.ports);
};

import { subscribeTopic as subscribeTopicUsecase } from "../../../../usecases";
import type { MutationResolvers } from "./../../../types.generated";

export const subscribeTopic: NonNullable<
  MutationResolvers["subscribeTopic"]
> = async (_obj, args, context, _info) => {
  return await subscribeTopicUsecase(
    {
      topicId: args.topic,
    },
    context.ports
  );
};

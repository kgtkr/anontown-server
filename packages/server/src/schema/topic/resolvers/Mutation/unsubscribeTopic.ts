import { unsubscribeTopic as unsubscribeTopicUsecase } from "../../../../usecases";
import type { MutationResolvers } from "./../../../types.generated";

export const unsubscribeTopic: NonNullable<
  MutationResolvers["unsubscribeTopic"]
> = async (_obj, args, context, _info) => {
  return await unsubscribeTopicUsecase(
    {
      topicId: args.topic,
    },
    context.ports
  );
};


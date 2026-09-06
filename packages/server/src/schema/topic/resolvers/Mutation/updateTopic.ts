import { updateTopic as updateTopicUsecase } from "../../../../usecases";
import type { MutationResolvers } from "./../../../types.generated";

export const updateTopic: NonNullable<
  MutationResolvers["updateTopic"]
> = async (_obj, args, context, _info) => {
  return await updateTopicUsecase(
    {
      id: args.id,
      title: args.title,
      tags: args.tags,
      text: args.text,
    },
    context.ports
  );
};

import { createTopicOne as createTopicOneUsecase } from "../../../../usecases";
import type { MutationResolvers } from "./../../../types.generated";

export const createTopicOne: NonNullable<
  MutationResolvers["createTopicOne"]
> = async (_obj, args, context, _info) => {
  return await createTopicOneUsecase(
    {
      title: args.title,
      tags: args.tags,
      text: args.text,
    },
    context.ports
  );
};

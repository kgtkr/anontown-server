import { createTopicNormal as createTopicNormalUsecase } from "../../../../usecases";
import type { MutationResolvers } from "./../../../types.generated";

export const createTopicNormal: NonNullable<
  MutationResolvers["createTopicNormal"]
> = async (_obj, args, context, _info) => {
  return await createTopicNormalUsecase(
    {
      title: args.title,
      tags: args.tags,
      text: args.text,
    },
    context.ports
  );
};


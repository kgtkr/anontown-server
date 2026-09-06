import { createTopicFork as createTopicForkUsecase } from "../../../../usecases";
import type { MutationResolvers } from "./../../../types.generated";

export const createTopicFork: NonNullable<
  MutationResolvers["createTopicFork"]
> = async (_obj, args, context, _info) => {
  return await createTopicForkUsecase(
    {
      title: args.title,
      parent: args.parent,
    },
    context.ports
  );
};

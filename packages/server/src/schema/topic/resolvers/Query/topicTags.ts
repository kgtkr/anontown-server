import type { QueryResolvers } from "./../../../types.generated";

export const topicTags: NonNullable<QueryResolvers["topicTags"]> = async (
  _obj,
  args,
  context,
  _info
) => {
  return await context.ports.topicRepo.findTags(args.limit);
};

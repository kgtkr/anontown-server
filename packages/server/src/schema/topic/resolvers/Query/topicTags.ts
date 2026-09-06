import { getTopicTags } from "../../../../usecases";
import type { QueryResolvers } from "./../../../types.generated";

export const topicTags: NonNullable<QueryResolvers["topicTags"]> = async (
  _obj,
  args,
  context,
  _info
) => {
  return await getTopicTags({ limit: args.limit }, context.ports);
};

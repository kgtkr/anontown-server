import { getTopic } from "../../../usecases";
import type { TopicForkResolvers } from "./../../types.generated";
import { base_Topic } from "./base_Topic";

export const TopicFork: TopicForkResolvers = {
  subscribe: base_Topic.subscribe,
  parent: async (token, _args, context, _info) => {
    const parent = await getTopic({ id: token.parentID }, context.ports);
    if (parent.type !== "normal") {
      throw new Error();
    }
    return parent;
  },
};

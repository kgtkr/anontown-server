import type { TopicNormalResolvers } from "./../../types.generated";
import { base_Topic } from "./base_Topic";

export const TopicNormal: TopicNormalResolvers = {
  subscribe: base_Topic.subscribe,
};

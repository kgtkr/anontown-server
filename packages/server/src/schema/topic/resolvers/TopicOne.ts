import type { TopicOneResolvers } from "./../../types.generated";
import { base_Topic } from "./base_Topic";

export const TopicOne: TopicOneResolvers = {
  subscribe: base_Topic.subscribe,
};

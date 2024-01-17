import type { TopicSearchResolvers } from "./../../types.generated";
import { TopicBase } from "./TopicBase";

export const TopicSearchBase: Omit<TopicSearchResolvers, "__resolveType"> = {
  ...TopicBase,
};

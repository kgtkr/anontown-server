import type { TopicResolvers } from "./../../types.generated";
import * as O from "fp-ts/lib/Option";

export const base_Topic: Required<Pick<TopicResolvers, "subscribe">> = {
  subscribe: async (topic, _args, context, _info) => {
    // TODO: N+1
    const token = context.ports.authContainer.getTokenOrNull();
    if (O.isNone(token)) {
      return null;
    }
    return await context.ports.topicRepo.getSubscription(
      topic.id,
      token.value.user
    );
  },
};

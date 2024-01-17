import type { HistoryResolvers } from "./../../types.generated";
import { getTopic } from "../../../usecases";

export const History: HistoryResolvers = {
  topic: async (history, _args, context, _info) => {
    const topic = await getTopic({ id: history.topicID }, context.ports);
    if (topic.type !== "normal") {
      throw new Error();
    }
    return topic;
  }
};

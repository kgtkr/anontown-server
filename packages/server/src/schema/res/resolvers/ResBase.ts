import { getTopic } from "../../../usecases";
import type { ResResolvers } from "./../../types.generated";

export const ResBase: Omit<ResResolvers, "__resolveType"> = {
  topic: async (res, _args, context, _info) => {
    const topic = await getTopic({ id: res.topicID }, context.ports);
    return topic;
  },
};

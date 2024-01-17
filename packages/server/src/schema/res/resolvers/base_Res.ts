import { getTopic } from "../../../usecases";
import type { ResResolvers } from "./../../types.generated";

export const base_Res: Required<Pick<ResResolvers, "topic">> = {
  topic: async (res, _args, context, _info) => {
    const topic = await getTopic({ id: res.topicID }, context.ports);
    return topic;
  },
};

import { getTopic } from "../../../usecases";
import type { TopicForkResolvers } from "./../../types.generated";
import { TopicBase } from "./TopicBase";

export const TopicFork: TopicForkResolvers = {
  ...TopicBase,
  parent: async (token, _args, context, _info) => {
    const parent = await getTopic({ id: token.parentID }, context.ports);
    if (parent.type !== "normal") {
      throw new Error();
    }
    return parent;
  },
};

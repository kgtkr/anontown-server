import * as G from "../generated/graphql";
import { getTopic } from "../usecases";
import * as O from "fp-ts/Option";

export const topic: G.TopicResolvers = {
  __resolveType(obj) {
    switch (obj.type) {
      case "normal":
        return "TopicNormal";
      case "one":
        return "TopicOne";
      case "fork":
        return "TopicFork";
    }
  },
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

export const topicSearch: G.TopicSearchResolvers = {
  __resolveType(obj) {
    switch (obj.type) {
      case "normal":
        return "TopicNormal";
      case "one":
        return "TopicOne";
    }
  },
};

export const topicFork: G.TopicForkResolvers = {
  parent: async (token, _args, context, _info) => {
    const parent = await getTopic({ id: token.parentID }, context.ports);
    if (parent.type !== "normal") {
      throw new Error();
    }
    return parent;
  },
};

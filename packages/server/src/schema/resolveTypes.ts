import type { Resolvers } from "./types.generated";

export const resolveTypes: Resolvers = {
  Token: {
    __resolveType(obj) {
      switch (obj.type) {
        case "general":
          return "TokenGeneral";
        case "master":
          return "TokenMaster";
      }
    },
  },
  Res: {
    __resolveType(obj) {
      switch (obj.type) {
        case "normal":
          return "ResNormal";
        case "history":
          return "ResHistory";
        case "topic":
          return "ResTopic";
        case "fork":
          return "ResFork";
        case "delete":
          return "ResDelete";
      }
    },
  },
};

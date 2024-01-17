import * as G from "../generated/graphql";

export const token: G.TokenResolvers = {
  __resolveType(obj) {
    switch (obj.type) {
      case "general":
        return "TokenGeneral";
      case "master":
        return "TokenMaster";
    }
  },
};

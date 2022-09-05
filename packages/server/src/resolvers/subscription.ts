import * as G from "../generated/graphql";
import * as ixa from "ix/asynciterable";
import * as ixaOps from "ix/asynciterable/operators";

export const subscription: G.SubscriptionResolvers = {
  resAdded: {
    subscribe: (_parent, args, context, _info) =>
      ixa.from(context.ports.resRepo.subscribeInsertEvent(args.topic)).pipe(
        ixaOps.map((data) => ({
          count: data.count,
          res: data.res.toAPI(context.ports.authContainer.getTokenOrNull()),
        }))
      ),
    resolve: (x: any) => {
      // TODO: こうしないと動かない何故
      return x;
    },
  },
};

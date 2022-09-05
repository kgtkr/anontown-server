import * as G from "../generated/graphql";
import * as ixa from "ix/asynciterable";
import * as ixaOps from "ix/asynciterable/operators";

export const subscription: G.SubscriptionResolvers = {
  resAdded: {
    subscribe: (_parent, args, context, _info) =>
      ixa.from(context.ports.resRepo.subscribeInsertEvent(args.topic)).pipe(
        ixaOps.map((data) => ({
          resAdded: {
            count: data.count,
            res: data.res.toAPI(context.ports.authContainer.getTokenOrNull()),
          },
        }))
      ),
  },
};

import type { SubscriptionResolvers } from "./../../../types.generated";
import * as ixa from "ix/asynciterable";
import * as ixaOps from "ix/asynciterable/operators";

export const resAdded: NonNullable<SubscriptionResolvers["resAdded"]> = {
  subscribe: (_parent, args, context, _info) =>
    ixa.from(context.ports.resRepo.subscribeInsertEvent(args.topic)).pipe(
      ixaOps.map((data) => ({
        resAdded: {
          count: data.count,
          res: data.res.toAPI(context.ports.authContainer.getTokenOrNull()),
        },
      }))
    ),
};

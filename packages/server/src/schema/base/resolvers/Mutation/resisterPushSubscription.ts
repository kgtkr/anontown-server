import type { MutationResolvers } from "./../../../types.generated";

export const resisterPushSubscription: NonNullable<
  MutationResolvers["resisterPushSubscription"]
> = async (_obj, args, context, _info) => {
  await context.ports.pushSubscriptionsRepo.upsert(
    context.ports.authContainer.getToken().user,
    {
      endpoint: args.endpoint,
      keys: {
        p256dh: args.p256dh,
        auth: args.auth,
      },
    }
  );
  return null;
};

import { PortPick } from "../ports";

export async function resisterPushSubscription(
  args: {
    endpoint: string;
    p256dh: string;
    auth: string;
  },
  {
    pushSubscriptionsRepo,
    authContainer,
  }: PortPick<"pushSubscriptionsRepo" | "authContainer">
): Promise<null> {
  await pushSubscriptionsRepo.upsert(authContainer.getToken().user, {
    endpoint: args.endpoint,
    keys: {
      p256dh: args.p256dh,
      auth: args.auth,
    },
  });
  return null;
}

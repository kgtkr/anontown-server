import { PushSubscriptionsRepo } from "../../ports/PushSubscriptionsRepo";
import webpush from "web-push";
import * as P from "@prisma/client";

export class PushSubscriptionsRepoImpl implements PushSubscriptionsRepo {
  constructor(private prisma: P.Prisma.TransactionClient) {}

  async list(
    userIds: string[]
  ): Promise<{ userId: string; pushSubscription: webpush.PushSubscription }[]> {
    const models = await this.prisma.pushSubscriptions.findMany({
      where: { userId: { in: userIds } },
    });
    return models.map((model) => ({
      userId: model.userId,
      pushSubscription: {
        endpoint: model.endpoint,
        keys: {
          p256dh: model.p256dh,
          auth: model.auth,
        },
      },
    }));
  }
  async upsert(
    userId: string,
    subscription: webpush.PushSubscription
  ): Promise<void> {
    await this.prisma.pushSubscriptions.upsert({
      where: { userId_endpoint: { userId, endpoint: subscription.endpoint } },
      create: {
        userId,
        endpoint: subscription.endpoint,
        p256dh: subscription.keys.p256dh,
        auth: subscription.keys.auth,
      },
      update: {
        p256dh: subscription.keys.p256dh,
        auth: subscription.keys.auth,
      },
    });
  }
  async delete(userId: string, endpoint: string): Promise<void> {
    await this.prisma.pushSubscriptions.delete({
      where: { userId_endpoint: { userId, endpoint } },
    });
  }
}

import { PushSubscriptionsRepo } from "../../ports/PushSubscriptionsRepo";
import webpush from "web-push";
import * as P from "@prisma/client";

export class PushSubscriptionsRepoImpl implements PushSubscriptionsRepo {
  constructor(private prisma: P.Prisma.TransactionClient) {}

  async list(userId: string): Promise<webpush.PushSubscription[]> {
    const models = await this.prisma.pushSubscriptions.findMany({
      where: { userId },
    });
    return models.map((model) => ({
      endpoint: model.endpoint,
      keys: {
        p256dh: model.p256dh,
        auth: model.auth,
      },
    }));
  }
  async add(
    userId: string,
    subscription: webpush.PushSubscription
  ): Promise<void> {
    await this.prisma.pushSubscriptions.create({
      data: {
        userId,
        endpoint: subscription.endpoint,
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

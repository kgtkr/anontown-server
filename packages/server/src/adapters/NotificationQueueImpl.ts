import { NotificationQueue } from "../ports/NotificationQueue";
import webpush from "web-push";
import { PushSubscriptionsRepo } from "../ports/PushSubscriptionsRepo";
import { Client as FaktoryClient } from "faktory-worker";
import { SendPushNotificationJob } from "../jobs/SendPushNotificationJob";
import { createJob } from "../jobs/JobType";

export class NotificationQueueImpl implements NotificationQueue {
  constructor(
    private pushSubscriptionsRepo: PushSubscriptionsRepo,
    private faktory: FaktoryClient
  ) {}

  async enqueue(
    payloads: { userId: string; payload: string }[]
  ): Promise<void> {
    const userIds = payloads.map((payload) => payload.userId);
    const pushSubscriptionWithUserIds = await this.pushSubscriptionsRepo.list(
      userIds
    );
    const pushSubscriptionsByUserId = pushSubscriptionWithUserIds.reduce(
      (acc, { userId, pushSubscription }) => {
        const pushSubscriptions = acc.get(userId) ?? [];
        pushSubscriptions.push(pushSubscription);
        acc.set(userId, pushSubscriptions);
        return acc;
      },
      new Map<string, webpush.PushSubscription[]>()
    );

    await this.faktory.pushBulk(
      payloads.flatMap(({ userId, payload }) => {
        const pushSubscriptions = pushSubscriptionsByUserId.get(userId) ?? [];
        return pushSubscriptions.map((pushSubscription) =>
          createJob(this.faktory, SendPushNotificationJob, {
            pushSubscription,
            payload,
            userId,
          })
        );
      })
    );
  }
}

import { NotificationSender } from "../ports/NotificationSender";
import { PushSubscriptionsRepo } from "../ports/PushSubscriptionsRepo";
import webpush, { WebPushError } from "web-push";

export class NotificationSenderImpl implements NotificationSender {
  constructor(private readonly pushSubscriptionsRepo: PushSubscriptionsRepo) {}

  async sendNotification(
    userId: string,
    pushSubscription: webpush.PushSubscription,
    payload: string
  ): Promise<void> {
    try {
      await webpush.sendNotification(pushSubscription, payload);
    } catch (error) {
      if (error instanceof WebPushError && error.statusCode === 410) {
        await this.pushSubscriptionsRepo.delete(
          userId,
          pushSubscription.endpoint
        );
      } else {
        throw error;
      }
    }
  }
}

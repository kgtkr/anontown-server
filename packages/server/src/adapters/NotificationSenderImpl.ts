import { NotificationSender } from "../ports/NotificationSender";
import { PushSubscriptionsRepo } from "../ports/PushSubscriptionsRepo";
import webpush from "web-push";

export class NotificationSenderImpl implements NotificationSender {
  constructor(private readonly pushSubscriptionsRepo: PushSubscriptionsRepo) {}

  async sendNotification(
    userId: string,
    pushSubscription: webpush.PushSubscription,
    payload: string
  ): Promise<void> {
    const result = await webpush.sendNotification(pushSubscription, payload);
    if (result.statusCode === 410) {
      await this.pushSubscriptionsRepo.delete(
        userId,
        pushSubscription.endpoint
      );
    } else if (result.statusCode !== 201) {
      throw new Error(`[NotificationSenderImpl] ${String(result)}`);
    }
  }
}

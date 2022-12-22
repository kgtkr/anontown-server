import webpush from "web-push";

export interface NotificationSender {
  sendNotification(
    userId: string,
    pushSubscription: webpush.PushSubscription,
    payload: string
  ): Promise<void>;
}

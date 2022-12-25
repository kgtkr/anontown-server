import webpush from "web-push";

export interface PushSubscriptionsRepo {
  list(userIds: string[]): Promise<
    {
      pushSubscription: webpush.PushSubscription;
      userId: string;
    }[]
  >;
  add(userId: string, subscription: webpush.PushSubscription): Promise<void>;
  delete(userId: string, endpoint: string): Promise<void>;
}

import webpush from "web-push";

export interface PushSubscriptionsRepo {
  list(userId: string): Promise<webpush.PushSubscription[]>;
  add(userId: string, subscription: webpush.PushSubscription): Promise<void>;
  delete(userId: string, endpoint: string): Promise<void>;
}

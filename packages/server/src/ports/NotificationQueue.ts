export interface NotificationQueue {
  enqueue(payloads: { userId: string; payload: string }[]): Promise<void>;
}

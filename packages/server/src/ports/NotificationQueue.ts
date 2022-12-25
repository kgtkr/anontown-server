export interface NotificationQueue {
  queue(payloads: { userId: string; payload: string }[]): Promise<void>;
}

import { z } from "zod";
import { JobType } from "./JobType";

export const SendPushNotificationJob = JobType({
  type: "SendPushNotification",
  arg: z.object({
    pushSubscription: z.object({
      endpoint: z.string(),
      keys: z.object({
        p256dh: z.string(),
        auth: z.string(),
      }),
    }),
    payload: z.string(),
    userId: z.string(),
  }),
});

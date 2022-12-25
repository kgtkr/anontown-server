import { z } from "zod";

export const JobType = "SendPushNotification";
export const Arg = z.object({
  pushSubscription: z.object({
    endpoint: z.string(),
    keys: z.object({
      p256dh: z.string(),
      auth: z.string(),
    }),
  }),
  payload: z.string(),
  userId: z.string(),
});
export type Arg = z.infer<typeof Arg>;

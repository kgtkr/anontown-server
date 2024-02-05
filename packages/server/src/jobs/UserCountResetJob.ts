import { JobType } from "./JobType";
import { z } from "zod";

export const UserCountResetJob = JobType({
  type: "UserCountReset",
  arg: z.object({
    key: z.union([
      z.literal("m10"),
      z.literal("m30"),
      z.literal("h1"),
      z.literal("h6"),
      z.literal("h12"),
      z.literal("d1"),
    ]),
  }),
});

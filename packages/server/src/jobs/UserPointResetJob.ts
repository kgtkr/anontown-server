import { z } from "zod";
import { JobType } from "./JobType";

export const UserPointResetJob = JobType({
  type: "UserPointReset",
  arg: z.object({}),
});

import { z } from "zod";
import { JobType } from "./JobType";

export const CheckDeadTopicJob = JobType({
  type: "CheckDeadTopic",
  arg: z.object({}),
});

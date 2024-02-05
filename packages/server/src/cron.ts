import { CronJob } from "cron";
import { ResWaitCountKey } from "./entities";
import { CheckDeadTopicJob } from "./jobs/CheckDeadTopicJob";
import { faktoryClient } from "./faktoryClient";
import { createJob } from "./jobs/JobType";
import { UserPointResetJob } from "./jobs/UserPointResetJob";
import { UserCountResetJob } from "./jobs/UserCountResetJob";

export function startCron() {
  const startUserCountResetCron = (cronTime: string, key: ResWaitCountKey) => {
    new CronJob({
      cronTime,
      onTick: () => {
        void faktoryClient.push(
          createJob(faktoryClient, UserCountResetJob, { key })
        );
      },
      start: false,
      timeZone: "Asia/Tokyo",
    }).start();
  };
  startUserCountResetCron("00 00,10,20,30,40,50 * * * *", "m10");
  startUserCountResetCron("00 00,30 * * * *", "m30");
  startUserCountResetCron("00 00 * * * *", "h1");
  startUserCountResetCron("00 00 00,06,12,18 * * *", "h6");
  startUserCountResetCron("00 00 00,12 * * *", "h12");
  startUserCountResetCron("00 00 00 * * *", "d1");

  new CronJob({
    cronTime: "00 00 00 * * *",
    onTick: () => {
      void faktoryClient.push(createJob(faktoryClient, UserPointResetJob, {}));
    },
    start: false,
    timeZone: "Asia/Tokyo",
  }).start();

  new CronJob({
    cronTime: "00 00 * * * *",
    onTick: () => {
      void faktoryClient.push(createJob(faktoryClient, CheckDeadTopicJob, {}));
    },
    start: false,
    timeZone: "Asia/Tokyo",
  }).start();
}

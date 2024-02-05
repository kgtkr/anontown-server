import faktory from "faktory-worker";
import { Config } from "./config";
import { SendPushNotificationJob } from "./jobs/SendPushNotificationJob";
import { CheckDeadTopicJob } from "./jobs/CheckDeadTopicJob";
import { createPorts, PortsConfig } from "./createPorts";
import { registerWorker } from "./jobs/JobType";
import { UserPointResetJob } from "./jobs/UserPointResetJob";
import { UserCountResetJob } from "./jobs/UserCountResetJob";

export async function startWorker(): Promise<void> {
  const worker = await faktory.work({
    url: Config.faktory.url,
  });

  registerWorker(worker, SendPushNotificationJob, async (arg) => {
    const ports = createPorts(PortsConfig);
    await ports.notificationSender.sendNotification(
      arg.userId,
      arg.pushSubscription,
      arg.payload
    );
  });

  registerWorker(worker, CheckDeadTopicJob, async (_arg) => {
    const ports = createPorts(PortsConfig);
    await ports.topicRepo.cronTopicCheck(ports.clock.now());
  });

  registerWorker(worker, UserPointResetJob, async (_arg) => {
    const ports = createPorts(PortsConfig);
    await ports.userRepo.cronPointReset();
  });

  registerWorker(worker, UserCountResetJob, async (arg) => {
    const ports = createPorts(PortsConfig);
    await ports.userRepo.cronCountReset(arg.key);
  });
}

import { serverRun } from "./server";
import webPush from "web-push";
import { Config } from "./config";

webPush.setVapidDetails(
  Config.vapid.subject,
  Config.vapid.publicKey,
  Config.vapid.privateKey
);

// eslint-disable-next-line @typescript-eslint/no-floating-promises
(async () => {
  await serverRun();
})();

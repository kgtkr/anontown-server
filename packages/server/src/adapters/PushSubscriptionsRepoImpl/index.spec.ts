import { PushSubscriptionsRepoImpl } from ".";
import { $transactionAfterRollback } from "../../prisma-client";

import { check } from "../../ports/PushSubscriptionsRepo/laws";

describe("PushSubscriptionsRepoImpl", () => {
  check(async (cb) => {
    await $transactionAfterRollback(async (prisma) => {
      await cb(new PushSubscriptionsRepoImpl(prisma));
    });
  });
});

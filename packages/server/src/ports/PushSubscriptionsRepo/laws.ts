import { PushSubscription } from "web-push";
import { PushSubscriptionsRepo } from "./index";

export function check(
  $isolate: (
    callback: (repo: PushSubscriptionsRepo) => Promise<void>
  ) => Promise<void>
) {
  const PushSubscription: PushSubscription = {
    endpoint: "endpoint",
    keys: {
      p256dh: "p256dh",
      auth: "auth",
    },
  };

  describe("upsert", () => {
    it("正常に追加と更新をできるか", async () => {
      await $isolate(async (repo) => {
        await repo.upsert("user", PushSubscription);
        await expect(repo.list(["user"])).resolves.toEqual([
          {
            userId: "user",
            pushSubscription: PushSubscription,
          },
        ]);

        const PushSubscription2 = {
          ...PushSubscription,
          keys: {
            p256dh: "p256dh2",
            auth: "auth2",
          },
        };
        await repo.upsert("user", PushSubscription2);
        await expect(repo.list(["user"])).resolves.toEqual([
          {
            userId: "user",
            pushSubscription: PushSubscription2,
          },
        ]);
      });
    });
  });

  describe("delete", () => {
    it("正常に削除できるか", async () => {
      await $isolate(async (repo) => {
        await repo.upsert("user", PushSubscription);
        await repo.delete("user", "endpoint");
        await expect(repo.list(["user"])).resolves.toEqual([]);
      });
    });
  });

  describe("list", () => {
    it("正常に取得できるか", async () => {
      await $isolate(async (repo) => {
        const PushSubscription1 = {
          ...PushSubscription,
          endpoint: "endpoint1",
        };
        const PushSubscription2 = {
          ...PushSubscription,
          endpoint: "endpoint2",
        };

        await repo.upsert("user1", PushSubscription1);
        await repo.upsert("user2", PushSubscription2);
        await expect(repo.list(["user1"])).resolves.toEqual([
          {
            userId: "user1",
            pushSubscription: PushSubscription1,
          },
        ]);
        await expect(repo.list(["user2"])).resolves.toEqual([
          {
            userId: "user2",
            pushSubscription: PushSubscription2,
          },
        ]);
      });
    });
  });
}

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

  describe("add", () => {
    it("正常に追加できるか", async () => {
      await $isolate(async (repo) => {
        await repo.add("user", PushSubscription);
        await expect(repo.list("user")).resolves.toEqual([PushSubscription]);
      });
    });
  });

  describe("delete", () => {
    it("正常に削除できるか", async () => {
      await $isolate(async (repo) => {
        await repo.add("user", PushSubscription);
        await repo.delete("user", "endpoint");
        await expect(repo.list("user")).resolves.toEqual([]);
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

        await repo.add("user1", PushSubscription1);
        await repo.add("user2", PushSubscription2);
        await expect(repo.list("user1")).resolves.toEqual([PushSubscription1]);
        await expect(repo.list("user2")).resolves.toEqual([PushSubscription2]);
      });
    });
  });
}

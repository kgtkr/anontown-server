import { none, some } from "fp-ts/lib/Option";
import { ObjectID } from "bson";
import {
  AtError,
  IAuthTokenGeneral,
  IAuthTokenMaster,
  IStorageRepo,
  Storage,
  emptyStorageRepoQuery,
} from "../../";

export function run(
  $isolate: (callback: (repo: IStorageRepo) => Promise<void>) => Promise<void>
) {
  const client = new ObjectID().toHexString();
  const user = new ObjectID().toHexString();
  const key = "key";
  const storage = new Storage(some(client), user, key, "value");

  describe("findOneKey", () => {
    it("正常に検索出来るか", async () => {
      await $isolate(async (repo) => {
        const client1 = new ObjectID().toHexString();
        const client2 = new ObjectID().toHexString();

        const user1 = new ObjectID().toHexString();
        const user2 = new ObjectID().toHexString();

        const key1 = "key1";
        const key2 = "key2";

        const authGeneral: IAuthTokenGeneral = {
          id: new ObjectID().toHexString(),
          key: "tk",
          user: user1,
          type: "general",
          client: client1,
        };

        const authMaster: IAuthTokenMaster = {
          id: new ObjectID().toHexString(),
          key: "tk",
          user: user1,
          type: "master",
        };

        const storage1 = storage.copy({
          client: none,
          user: user1,
          key: key1,
        });

        const storage2 = storage.copy({
          client: none,
          user: user1,
          key: key2,
        });

        const storage3 = storage.copy({
          client: none,
          user: user2,
          key: key1,
        });

        const storage4 = storage.copy({
          client: some(client1),
          user: user1,
          key: key1,
        });

        const storage5 = storage.copy({
          client: some(client1),
          user: user1,
          key: key2,
        });

        const storage6 = storage.copy({
          client: some(client1),
          user: user2,
          key: key1,
        });

        const storage7 = storage.copy({
          client: some(client2),
          user: user1,
          key: key1,
        });

        await repo.save(storage1);
        await repo.save(storage2);
        await repo.save(storage3);
        await repo.save(storage4);
        await repo.save(storage5);
        await repo.save(storage6);
        await repo.save(storage7);

        expect(await repo.findOneKey(authMaster, key1)).toEqual(storage1);
        expect(await repo.findOneKey(authGeneral, key1)).toEqual(storage4);
      });
    });
    it("存在しない時エラーになるか(通常トークン)", async () => {
      await $isolate(async (repo) => {
        const authGeneral: IAuthTokenGeneral = {
          id: new ObjectID().toHexString(),
          key: "tk",
          user,
          type: "general",
          client,
        };

        const authMaster: IAuthTokenMaster = {
          id: new ObjectID().toHexString(),
          key: "tk",
          user,
          type: "master",
        };

        await repo.save(storage);

        await expect(
          repo.findOneKey(
            { ...authGeneral, user: new ObjectID().toHexString() },
            key
          )
        ).rejects.toThrow(AtError);
        await expect(
          repo.findOneKey(
            { ...authGeneral, client: new ObjectID().toHexString() },
            key
          )
        ).rejects.toThrow(AtError);
        await expect(repo.findOneKey(authGeneral, "key2")).rejects.toThrow(
          AtError
        );
        await expect(repo.findOneKey(authMaster, key)).rejects.toThrow(AtError);
      });
    });
  });

  describe("find", () => {
    it("正常に検索出来るか", async () => {
      await $isolate(async (repo) => {
        const storage = new Storage(
          none,
          new ObjectID().toHexString(),
          "key",
          "value"
        );

        const client1 = new ObjectID().toHexString();
        const client2 = new ObjectID().toHexString();

        const user1 = new ObjectID().toHexString();
        const user2 = new ObjectID().toHexString();

        const key1 = "key1";
        const key2 = "key2";

        const authGeneral: IAuthTokenGeneral = {
          id: new ObjectID().toHexString(),
          key: "tk",
          user: user1,
          type: "general",
          client: client1,
        };

        const authMaster: IAuthTokenMaster = {
          id: new ObjectID().toHexString(),
          key: "tk",
          user: user1,
          type: "master",
        };

        const storage1 = storage.copy({
          client: none,
          user: user1,
          key: key1,
        });

        const storage2 = storage.copy({
          client: none,
          user: user1,
          key: key2,
        });

        const storage3 = storage.copy({
          client: none,
          user: user2,
          key: key1,
        });

        const storage4 = storage.copy({
          client: some(client1),
          user: user1,
          key: key1,
        });

        const storage5 = storage.copy({
          client: some(client1),
          user: user1,
          key: key2,
        });

        const storage6 = storage.copy({
          client: some(client1),
          user: user2,
          key: key1,
        });

        const storage7 = storage.copy({
          client: some(client2),
          user: user1,
          key: key1,
        });

        await repo.save(storage1);
        await repo.save(storage2);
        await repo.save(storage3);
        await repo.save(storage4);
        await repo.save(storage5);
        await repo.save(storage6);
        await repo.save(storage7);

        expect(
          await repo.find(authMaster, { ...emptyStorageRepoQuery })
        ).toEqual([storage1, storage2]);
        expect(
          await repo.find(authMaster, { ...emptyStorageRepoQuery, key: [] })
        ).toEqual([]);
        expect(
          await repo.find(authMaster, { ...emptyStorageRepoQuery, key: [key1] })
        ).toEqual([storage1]);

        expect(
          await repo.find(authGeneral, { ...emptyStorageRepoQuery })
        ).toEqual([storage4, storage5]);
        expect(
          await repo.find(authGeneral, { ...emptyStorageRepoQuery, key: [] })
        ).toEqual([]);
        expect(
          await repo.find(authGeneral, {
            ...emptyStorageRepoQuery,
            key: [key2],
          })
        ).toEqual([storage5]);
      });
    });

    it("prefix検索が正常に出来るか", async () => {
      await $isolate(async (repo) => {
        const client = new ObjectID().toHexString();
        const user = new ObjectID().toHexString();
        const storage1 = new Storage(some(client), user, "key1", "value1");
        const storage2 = new Storage(some(client), user, "key2", "value2");
        const storage3 = new Storage(some(client), user, "key3", "value3");
        const storage4 = new Storage(some(client), user, "xyz1", "value4");
        const storage5 = new Storage(some(client), user, "xyz2", "value5");

        await repo.save(storage1);
        await repo.save(storage2);
        await repo.save(storage3);
        await repo.save(storage4);
        await repo.save(storage5);

        const authGeneral: IAuthTokenGeneral = {
          id: new ObjectID().toHexString(),
          key: "tk",
          user,
          type: "general",
          client,
        };

        expect(
          await repo.find(authGeneral, {
            ...emptyStorageRepoQuery,
            keyPrefix: "key",
          })
        ).toEqual([storage1, storage2, storage3]);

        expect(
          await repo.find(authGeneral, {
            ...emptyStorageRepoQuery,
            keyPrefix: "xyz",
          })
        ).toEqual([storage4, storage5]);

        expect(
          await repo.find(authGeneral, {
            ...emptyStorageRepoQuery,
            keyPrefix: "",
          })
        ).toEqual([storage1, storage2, storage3, storage4, storage5]);

        expect(
          await repo.find(authGeneral, {
            ...emptyStorageRepoQuery,
            keyPrefix: "key1",
          })
        ).toEqual([storage1]);
      });
    });
  });

  describe("save", () => {
    it("新しく作れるか", async () => {
      await $isolate(async (repo) => {
        await repo.save(storage);

        const authGeneral: IAuthTokenGeneral = {
          id: new ObjectID().toHexString(),
          key: "tk",
          user,
          type: "general",
          client,
        };

        expect(await repo.findOneKey(authGeneral, key)).toEqual(storage);
      });
    });

    it("更新出来るか", async () => {
      await $isolate(async (repo) => {
        await repo.save(storage);

        const storageUpdate = storage.copy({ value: "value2" });
        await repo.save(storageUpdate);

        const authGeneral: IAuthTokenGeneral = {
          id: new ObjectID().toHexString(),
          key: "tk",
          user,
          type: "general",
          client,
        };

        expect(await repo.findOneKey(authGeneral, key)).toEqual(storageUpdate);
      });
    });
  });

  describe("del", () => {
    it("正常に削除出来るか", async () => {
      await $isolate(async (repo) => {
        await repo.save(storage);
        await repo.del(storage);

        const authGeneral: IAuthTokenGeneral = {
          id: new ObjectID().toHexString(),
          key: "tk",
          user,
          type: "general",
          client,
        };

        await expect(repo.findOneKey(authGeneral, key)).rejects.toThrow(
          AtError
        );
      });
    });
  });
}

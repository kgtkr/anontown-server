import { IStorageAPI, Storage } from "../entities";
import { PortPick } from "../ports";

export interface SetStoragesInput {
  storages: {
    key: string;
    value: string;
  }[];
}

export async function setStorages(
  { storages }: SetStoragesInput,
  { storageRepo, authContainer }: PortPick<"storageRepo" | "authContainer">
): Promise<{ storages: IStorageAPI[] }> {
  // TODO: トランザクション
  const results: IStorageAPI[] = [];
  const token = authContainer.getToken();
  for (const storageInput of storages) {
    const storage = Storage.create(token, storageInput.key, storageInput.value);
    await storageRepo.save(storage);
    results.push(storage.toAPI(token));
  }
  return {
    storages: results,
  };
}

import { IStorageAPI } from "../entities";
import { PortPick, StorageRepoQuery } from "../ports";

export interface GetStoragesInput {
  query: StorageRepoQuery;
}

export async function getStorages(
  { query }: GetStoragesInput,
  { storageRepo, authContainer }: PortPick<"storageRepo" | "authContainer">
): Promise<IStorageAPI[]> {
  const storages = await storageRepo.find(authContainer.getToken(), query);
  return storages.map((x) => x.toAPI(authContainer.getToken()));
}

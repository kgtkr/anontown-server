import { PortPick } from "../ports";

export interface DelStorageInput {
  key: string;
}

export async function delStorage(
  { key }: DelStorageInput,
  { storageRepo, authContainer }: PortPick<"storageRepo" | "authContainer">
): Promise<null> {
  const storage = await storageRepo.findOneKey(authContainer.getToken(), key);
  await storageRepo.del(storage);
  return null;
}

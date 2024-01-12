import { IAuthToken } from "../../auth";
import { Storage } from "../../entities";

export type StorageRepoQuery = {
  key: string[] | null;
  keyPrefix: string | null;
};

export const emptyStorageRepoQuery: StorageRepoQuery = {
  key: null,
  keyPrefix: null,
};

export interface IStorageRepo {
  findOneKey(token: IAuthToken, key: string): Promise<Storage>;
  find(token: IAuthToken, query: StorageRepoQuery): Promise<Array<Storage>>;
  save(storage: Storage): Promise<void>;
  del(storage: Storage): Promise<void>;
}

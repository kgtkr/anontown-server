import { Option } from "fp-ts/lib/Option";
import { IAuthTokenMaster } from "../../auth";
import { Client } from "../../entities";

export type ClientRepoQuery = {
  id?: string[];
  self?: boolean;
};

export interface IClientRepo {
  findOne(id: string): Promise<Client>;
  insert(client: Client): Promise<void>;
  update(client: Client): Promise<void>;
  find(
    authToken: Option<IAuthTokenMaster>,
    query: ClientRepoQuery
  ): Promise<Array<Client>>;
}

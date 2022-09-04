import { IAuthToken } from "../../auth";
import { Msg } from "../../entities";
import { DateQuery } from "../types";

export type MsgRepoQuery = {
  date?: DateQuery;
  id?: string[];
};

export interface IMsgRepo {
  findOne(id: string): Promise<Msg>;
  insert(msg: Msg): Promise<void>;
  update(msg: Msg): Promise<void>;
  find(
    authToken: IAuthToken,
    query: MsgRepoQuery,
    limit: number
  ): Promise<Array<Msg>>;
}

import { Res } from "../../entities";
import { IAuthContainer } from "../auth-container/index";
import { DateQuery } from "../types";

export type ResRepoQuery = {
  date: DateQuery | null;
  hash: string | null;
  id: string[] | null;
  notice: boolean | null;
  profile: string | null;
  reply: string | null;
  self: boolean | null;
  text: string | null;
  topic: string | null;
};

export const emptyResRepoQuery: ResRepoQuery = {
  date: null,
  hash: null,
  id: null,
  notice: null,
  profile: null,
  reply: null,
  self: null,
  text: null,
  topic: null,
};

export interface IResRepo {
  subscribeInsertEvent(
    topicId: string
  ): AsyncIterable<{ res: Res; count: number }>;

  findOne(id: string): Promise<Res>;

  insert(res: Res): Promise<void>;

  update(res: Res): Promise<void>;

  find(
    auth: IAuthContainer,
    query: ResRepoQuery,
    limit: number
  ): Promise<Array<Res>>;
}

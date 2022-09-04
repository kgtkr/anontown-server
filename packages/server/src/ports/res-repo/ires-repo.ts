import { Observable } from "rxjs";
import { Res } from "../../entities";
import * as G from "../../generated/graphql";
import { IAuthContainer } from "../auth-container/index";
import { DateQuery } from "../types";

export type ResRepoQuery = {
  date?: DateQuery;
  hash?: string;
  id?: string[];
  notice?: boolean;
  profile?: string;
  reply?: string;
  self?: boolean;
  text?: string;
  topic?: string;
};

export interface IResRepo {
  subscribeInsertEvent(): Observable<{ res: Res; count: number }>;

  findOne(id: string): Promise<Res>;

  insert(res: Res): Promise<void>;

  update(res: Res): Promise<void>;

  find(
    auth: IAuthContainer,
    query: ResRepoQuery,
    limit: number
  ): Promise<Array<Res>>;
}

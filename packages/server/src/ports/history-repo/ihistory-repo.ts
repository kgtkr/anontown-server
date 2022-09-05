import { History } from "../../entities";
import { DateQuery } from "../types";

export type HistoryRepoQuery = {
  date: DateQuery | null;
  id: string[] | null;
  topic: string[] | null;
};

export const emptyHistoryRepoQuery: HistoryRepoQuery = {
  date: null,
  id: null,
  topic: null,
};

export interface IHistoryRepo {
  insert(history: History): Promise<void>;
  update(history: History): Promise<void>;
  findOne(id: string): Promise<History>;
  find(query: HistoryRepoQuery, limit: number): Promise<Array<History>>;
}

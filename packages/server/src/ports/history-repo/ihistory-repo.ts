import { History } from "../../entities";
import { DateQuery } from "../types";

export type HistoryRepoQuery = {
  date?: DateQuery;
  id?: string[];
  topic?: string[];
};
export interface IHistoryRepo {
  insert(history: History): Promise<void>;
  update(history: History): Promise<void>;
  findOne(id: string): Promise<History>;
  find(query: HistoryRepoQuery, limit: number): Promise<Array<History>>;
}

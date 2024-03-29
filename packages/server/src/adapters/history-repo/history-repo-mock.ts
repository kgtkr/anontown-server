import { isNullish } from "@kgtkr/utils";
import { AtNotFoundError } from "../../at-error";
import { History } from "../../entities";
import { HistoryRepoQuery, IHistoryRepo } from "../../ports";
import { fromHistory, IHistoryDB, toHistory } from "./ihistory-db";

export class HistoryRepoMock implements IHistoryRepo {
  private histories: Array<IHistoryDB> = [];

  async insert(history: History): Promise<void> {
    this.histories.push(fromHistory(history));
  }

  async update(history: History): Promise<void> {
    this.histories[this.histories.findIndex((h) => h.id === history.id)] =
      fromHistory(history);
  }

  async findOne(id: string): Promise<History> {
    const history = this.histories.find((h) => h.id === id);

    if (history === undefined) {
      throw new AtNotFoundError("編集履歴が存在しません");
    }

    return toHistory(history);
  }

  async find(query: HistoryRepoQuery, limit: number): Promise<Array<History>> {
    const histories = this.histories
      .filter((x) => isNullish(query.id) || query.id.includes(x.id))
      .filter(
        (x) => isNullish(query.topic) || query.topic.includes(x.body.topic)
      )
      .filter((x) => {
        if (isNullish(query.date)) {
          return true;
        }
        const dateV = new Date(query.date.date).valueOf();
        const xDateV = new Date(x.body.date).valueOf();
        switch (query.date.type) {
          case "gte":
            return dateV <= xDateV;
          case "gt":
            return dateV < xDateV;
          case "lte":
            return dateV >= xDateV;
          case "lt":
            return dateV > xDateV;
        }
      })
      .sort((a, b) => {
        const av = new Date(a.body.date).valueOf();
        const bv = new Date(b.body.date).valueOf();
        return !isNullish(query.date) &&
          (query.date.type === "gt" || query.date.type === "gte")
          ? av - bv
          : bv - av;
      })
      .slice(0, limit);

    const result = histories.map((h) => toHistory(h));
    if (
      !isNullish(query.date) &&
      (query.date.type === "gt" || query.date.type === "gte")
    ) {
      result.reverse();
    }
    return result;
  }
}

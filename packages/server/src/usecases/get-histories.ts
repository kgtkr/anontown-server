import { IHistoryAPI } from "../entities";
import { HistoryRepoQuery, PortPick } from "../ports";

export interface GetHistoriesInput {
  query: HistoryRepoQuery;
  limit: number;
}

export async function getHistories(
  { query, limit }: GetHistoriesInput,
  { historyRepo, authContainer }: PortPick<"historyRepo" | "authContainer">
): Promise<IHistoryAPI[]> {
  const histories = await historyRepo.find(query, limit);
  return histories.map((x) => x.toAPI(authContainer.getTokenOrNull()));
}

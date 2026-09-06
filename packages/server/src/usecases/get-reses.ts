import { IResAPI } from "../entities";
import { PortPick, ResRepoQuery } from "../ports";

export async function getReses(
  {
    query,
    limit,
  }: {
    query: ResRepoQuery;
    limit: number;
  },
  { resRepo, authContainer }: PortPick<"resRepo" | "authContainer">
): Promise<IResAPI[]> {
  const reses = await resRepo.find(authContainer, query, limit);
  return reses.map((x) => x.toAPI(authContainer.getTokenOrNull()));
}

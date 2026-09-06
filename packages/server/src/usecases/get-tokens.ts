import { ITokenAPI } from "../entities";
import { PortPick } from "../ports";

export async function getTokens(
  _: Record<string, never> = {},
  { tokenRepo, authContainer }: PortPick<"tokenRepo" | "authContainer">
): Promise<ITokenAPI[]> {
  const tokens = await tokenRepo.findAll(authContainer.getTokenMaster());
  return tokens.map((t) => t.toAPI());
}

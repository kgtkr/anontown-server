import { ITokenAPI } from "../entities";
import { PortPick } from "../ports";

export async function getToken(
  _: Record<string, never> = {},
  { tokenRepo, authContainer }: PortPick<"tokenRepo" | "authContainer">
): Promise<ITokenAPI> {
  const token = await tokenRepo.findOne(authContainer.getToken().id);
  return token.toAPI();
}

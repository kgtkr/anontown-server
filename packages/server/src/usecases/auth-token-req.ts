import { AtNotFoundError } from "../at-error";
import { ITokenGeneralAPI } from "../entities";
import { PortPick } from "../ports";

export interface AuthTokenReqInput {
  id: string;
  key: string;
}

export async function authTokenReq(
  { id, key }: AuthTokenReqInput,
  { tokenRepo, clock }: PortPick<"tokenRepo" | "clock">
): Promise<ITokenGeneralAPI> {
  const token = await tokenRepo.findOne(id);
  if (token.type !== "general") {
    throw new AtNotFoundError("トークンが見つかりません");
  }
  token.authReq(key, clock.now());
  return token.toAPI();
}

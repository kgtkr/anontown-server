import { AtNotFoundError } from "../at-error";
import { ITokenReqAPI } from "../entities";
import { PortPick } from "../ports";

export async function createTokenReq(
  _: Record<string, never> = {},
  {
    tokenRepo,
    authContainer,
    clock,
    safeIdGenerator,
  }: PortPick<"tokenRepo" | "authContainer" | "clock" | "safeIdGenerator">
): Promise<ITokenReqAPI> {
  const token = await tokenRepo.findOne(authContainer.getToken().id);
  if (token.type !== "general") {
    throw new AtNotFoundError("トークンが見つかりません");
  }
  const { req, token: newToken } = token.createReq(
    clock.now(),
    safeIdGenerator
  );

  await tokenRepo.update(newToken);

  return req;
}

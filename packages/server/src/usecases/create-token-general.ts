import { ITokenGeneralAPI, ITokenReqAPI, TokenGeneral } from "../entities";
import { PortPick } from "../ports";

export interface CreateTokenGeneralInput {
  clientId: string;
}

export async function createTokenGeneral(
  { clientId }: CreateTokenGeneralInput,
  {
    clientRepo,
    objectIdGenerator,
    authContainer,
    clock,
    safeIdGenerator,
    tokenRepo,
  }: PortPick<
    | "clientRepo"
    | "objectIdGenerator"
    | "authContainer"
    | "clock"
    | "safeIdGenerator"
    | "tokenRepo"
  >
): Promise<{ token: ITokenGeneralAPI; req: ITokenReqAPI }> {
  const client = await clientRepo.findOne(clientId);
  const token = TokenGeneral.create(
    objectIdGenerator,
    authContainer.getTokenMaster(),
    client,
    clock.now(),
    safeIdGenerator
  );

  const { req, token: newToken } = token.createReq(
    clock.now(),
    safeIdGenerator
  );

  await tokenRepo.insert(newToken);

  return {
    token: token.toAPI(),
    req,
  };
}

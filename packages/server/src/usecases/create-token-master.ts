import { ITokenMasterAPI, TokenMaster } from "../entities";
import { PortPick } from "../ports";
import * as authFromApiParam from "../server/auth-from-api-param";

export interface CreateTokenMasterInput {
  auth: {
    id?: string | null;
    sn?: string | null;
    pass: string;
  };
}

export async function createTokenMaster(
  { auth }: CreateTokenMasterInput,
  {
    userRepo,
    objectIdGenerator,
    clock,
    safeIdGenerator,
    tokenRepo,
  }: PortPick<
    | "userRepo"
    | "objectIdGenerator"
    | "clock"
    | "safeIdGenerator"
    | "tokenRepo"
  >
): Promise<ITokenMasterAPI> {
  const authUser = await authFromApiParam.authUserRequestToUser(
    userRepo,
    auth
  );
  const token = TokenMaster.create(
    objectIdGenerator,
    authUser,
    clock.now(),
    safeIdGenerator
  );
  await tokenRepo.insert(token);

  return token.toAPI();
}

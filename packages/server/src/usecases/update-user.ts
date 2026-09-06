import { nullToUndefined } from "@kgtkr/utils";
import { ITokenMasterAPI, IUserAPI, TokenMaster } from "../entities";
import { PortPick } from "../ports";
import * as authFromApiParam from "../server/auth-from-api-param";

export interface UpdateUserInput {
  sn?: string | null;
  pass?: string | null;
  auth: {
    id?: string | null;
    sn?: string | null;
    pass: string;
  };
}

export async function updateUser(
  { sn, pass, auth }: UpdateUserInput,
  {
    userRepo,
    tokenRepo,
    objectIdGenerator,
    clock,
    safeIdGenerator,
  }: PortPick<
    "userRepo" | "tokenRepo" | "objectIdGenerator" | "clock" | "safeIdGenerator"
  >
): Promise<{ user: IUserAPI; token: ITokenMasterAPI }> {
  const authUser = await authFromApiParam.authUserRequestToUser(userRepo, auth);
  const user = await userRepo.findOne(authUser.id);
  const newUser = user.change(
    authUser,
    nullToUndefined(pass),
    nullToUndefined(sn)
  );
  await userRepo.update(newUser);
  await tokenRepo.delMasterToken(authUser);

  const token = TokenMaster.create(
    objectIdGenerator,
    authUser,
    clock.now(),
    safeIdGenerator
  );
  await tokenRepo.insert(token);
  return { user: newUser.toAPI(), token: token.toAPI() };
}


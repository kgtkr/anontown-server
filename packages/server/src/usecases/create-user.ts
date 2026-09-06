import { ITokenMasterAPI, IUserAPI, TokenMaster, User } from "../entities";
import { PortPick } from "../ports";

export interface CreateUserInput {
  sn: string;
  pass: string;
  recaptcha: string;
}

export async function createUser(
  { sn, pass, recaptcha }: CreateUserInput,
  {
    recaptcha: recaptchaClient,
    objectIdGenerator,
    clock,
    userRepo,
    safeIdGenerator,
    tokenRepo,
  }: PortPick<
    | "recaptcha"
    | "objectIdGenerator"
    | "clock"
    | "userRepo"
    | "safeIdGenerator"
    | "tokenRepo"
  >
): Promise<{ user: IUserAPI; token: ITokenMasterAPI }> {
  await recaptchaClient.verify(recaptcha);

  const user = User.create(
    objectIdGenerator,
    sn,
    pass,
    clock.now()
  );
  await userRepo.insert(user);

  const token = TokenMaster.create(
    objectIdGenerator,
    user.auth(pass),
    clock.now(),
    safeIdGenerator
  );
  await tokenRepo.insert(token);

  return { user: user.toAPI(), token: token.toAPI() };
}


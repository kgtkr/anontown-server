import { IUserAPI } from "../entities";
import { PortPick } from "../ports";

export async function getUser(
  _: Record<string, never> = {},
  { userRepo, authContainer }: PortPick<"userRepo" | "authContainer">
): Promise<IUserAPI> {
  const user = await userRepo.findOne(authContainer.getToken().user);
  return user.toAPI();
}

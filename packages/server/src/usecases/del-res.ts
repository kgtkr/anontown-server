import { some } from "fp-ts/lib/Option";
import { AtNotFoundError } from "../at-error";
import { IResDeleteAPI } from "../entities";
import { PortPick } from "../ports";

export async function delRes(
  { res: resId }: { res: string },
  {
    resRepo,
    userRepo,
    authContainer,
  }: PortPick<"resRepo" | "userRepo" | "authContainer">
): Promise<IResDeleteAPI> {
  const res = await resRepo.findOne(resId);

  if (res.type !== "normal") {
    throw new AtNotFoundError("レスが見つかりません");
  }

  // レスを書き込んだユーザー
  const resUser = await userRepo.findOne(res.user);

  const { res: newRes, resUser: newResUser } = res.del(
    resUser,
    authContainer.getToken()
  );

  await Promise.all([
    resRepo.update(newRes),
    userRepo.update(newResUser),
  ]);

  const api = newRes.toAPI(some(authContainer.getToken()));
  if (api.type !== "delete") {
    throw new Error();
  }
  return api;
}

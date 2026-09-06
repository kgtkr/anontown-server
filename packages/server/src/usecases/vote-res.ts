import { some } from "fp-ts/lib/Option";
import { IResAPI } from "../entities";
import { PortPick } from "../ports";

export async function voteRes(
  args: {
    res: string;
    type: "cv" | "uv" | "dv";
  },
  {
    resRepo,
    userRepo,
    authContainer,
  }: PortPick<"resRepo" | "userRepo" | "authContainer">
): Promise<IResAPI> {
  if (args.type === "cv") {
    const [res, user] = await Promise.all([
      resRepo.findOne(args.res),
      userRepo.findOne(authContainer.getToken().user),
    ]);

    // レスを書き込んだユーザー
    const resUser = await userRepo.findOne(res.user);

    const { res: newRes, resUser: newResUser } = res.cv(
      resUser,
      user,
      authContainer.getToken()
    );

    await Promise.all([
      resRepo.update(newRes),
      userRepo.update(newResUser),
      userRepo.update(user), // TODO: user更新されてないから保存する必要ない
    ]);

    return newRes.toAPI(some(authContainer.getToken()));
  } else {
    const [res, user] = await Promise.all([
      resRepo.findOne(args.res),
      userRepo.findOne(authContainer.getToken().user),
    ]);

    // レスを書き込んだユーザー
    const resUser = await userRepo.findOne(res.user);

    const { res: newRes, resUser: newResUser } = res.v(
      resUser,
      user,
      args.type,
      authContainer.getToken()
    );

    await Promise.all([
      resRepo.update(newRes),
      userRepo.update(newResUser),
      userRepo.update(user), // TODO: user更新されてないから保存する必要ない
    ]);

    return newRes.toAPI(some(authContainer.getToken()));
  }
}

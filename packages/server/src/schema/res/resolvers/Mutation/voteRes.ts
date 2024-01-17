import { some } from "fp-ts/lib/Option";
import type { MutationResolvers } from "./../../../types.generated";
export const voteRes: NonNullable<MutationResolvers["voteRes"]> = async (
  _obj,
  args,
  context,
  _info
) => {
  if (args.type === "cv") {
    const [res, user] = await Promise.all([
      context.ports.resRepo.findOne(args.res),
      context.ports.userRepo.findOne(
        context.ports.authContainer.getToken().user
      ),
    ]);

    // レスを書き込んだユーザー
    const resUser = await context.ports.userRepo.findOne(res.user);

    const { res: newRes, resUser: newResUser } = res.cv(
      resUser,
      user,
      context.ports.authContainer.getToken()
    );

    await Promise.all([
      context.ports.resRepo.update(newRes),
      context.ports.userRepo.update(newResUser),
      context.ports.userRepo.update(user), // TODO: user更新されてないから保存する必要ない
    ]);

    return newRes.toAPI(some(context.ports.authContainer.getToken()));
  } else {
    const [res, user] = await Promise.all([
      context.ports.resRepo.findOne(args.res),
      context.ports.userRepo.findOne(
        context.ports.authContainer.getToken().user
      ),
    ]);

    // レスを書き込んだユーザー
    const resUser = await context.ports.userRepo.findOne(res.user);

    const { res: newRes, resUser: newResUser } = res.v(
      resUser,
      user,
      args.type,
      context.ports.authContainer.getToken()
    );

    await Promise.all([
      context.ports.resRepo.update(newRes),
      context.ports.userRepo.update(newResUser),
      context.ports.userRepo.update(user), // TODO: user更新されてないから保存する必要ない
    ]);

    return newRes.toAPI(some(context.ports.authContainer.getToken()));
  }
};

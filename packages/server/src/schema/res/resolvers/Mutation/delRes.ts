import { some } from "fp-ts/lib/Option";
import { AtNotFoundError } from "../../../../at-error";
import type { MutationResolvers } from "./../../../types.generated";
export const delRes: NonNullable<MutationResolvers["delRes"]> = async (
  _obj,
  args,
  context,
  _info
) => {
  const res = await context.ports.resRepo.findOne(args.res);

  if (res.type !== "normal") {
    throw new AtNotFoundError("レスが見つかりません");
  }

  // レスを書き込んだユーザー
  const resUser = await context.ports.userRepo.findOne(res.user);

  const { res: newRes, resUser: newResUser } = res.del(
    resUser,
    context.ports.authContainer.getToken()
  );

  await Promise.all([
    context.ports.resRepo.update(newRes),
    context.ports.userRepo.update(newResUser),
  ]);

  const api = newRes.toAPI(some(context.ports.authContainer.getToken()));
  if (api.type !== "delete") {
    throw new Error();
  }
  return api;
};

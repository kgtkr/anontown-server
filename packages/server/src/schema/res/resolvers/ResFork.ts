import { getTopic } from "../../../usecases";
import type { ResForkResolvers } from "./../../types.generated";
import { ResBase } from "./ResBase";

export const ResFork: ResForkResolvers = {
  ...ResBase,
  fork: async (res, _args, context, _info) => {
    const fork = await getTopic({ id: res.forkID }, context.ports);
    if (fork.type !== "fork") {
      throw new Error();
    }
    return fork;
  },
};

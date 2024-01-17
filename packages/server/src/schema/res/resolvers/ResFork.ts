import { getTopic } from "../../../usecases";
import type { ResForkResolvers } from "./../../types.generated";
import { base_Res } from "./base_Res";

export const ResFork: ResForkResolvers = {
  topic: base_Res.topic,
  fork: async (res, _args, context, _info) => {
    const fork = await getTopic({ id: res.forkID }, context.ports);
    if (fork.type !== "fork") {
      throw new Error();
    }
    return fork;
  },
};

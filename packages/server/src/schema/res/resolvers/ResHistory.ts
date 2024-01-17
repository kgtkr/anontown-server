import { getHistory } from "../../../usecases";
import type { ResHistoryResolvers } from "./../../types.generated";
import { base_Res } from "./base_Res";

export const ResHistory: ResHistoryResolvers = {
  topic: base_Res.topic,
  history: async (res, _args, context, _info) => {
    const history = await getHistory({ id: res.historyID }, context.ports);
    return history;
  },
};

import { getHistory } from "../../../usecases";
import type { ResHistoryResolvers } from "./../../types.generated";
import { ResBase } from "./ResBase";

export const ResHistory: ResHistoryResolvers = {
  ...ResBase,
  history: async (res, _args, context, _info) => {
    const history = await getHistory({ id: res.historyID }, context.ports);
    return history;
  },
};

import type { QueryResolvers } from "./../../../types.generated";
import { convertDateQuery } from "../../../convertDateQuery";

export const histories: NonNullable<QueryResolvers["histories"]> = async (
  _obj,
  args,
  context,
  _info
) => {
  const histories = await context.ports.historyRepo.find(
    {
      id: args.query.id ?? null,
      date: convertDateQuery(args.query.date ?? null),
      topic: args.query.topic ?? null,
    },
    args.limit
  );
  return histories.map((x) =>
    x.toAPI(context.ports.authContainer.getTokenOrNull())
  );
};

import { getHistories } from "../../../../usecases";
import type { QueryResolvers } from "./../../../types.generated";
import { convertDateQuery } from "../../../convertDateQuery";

export const histories: NonNullable<QueryResolvers["histories"]> = async (
  _obj,
  args,
  context,
  _info
) => {
  return await getHistories(
    {
      query: {
        id: args.query.id ?? null,
        date: convertDateQuery(args.query.date ?? null),
        topic: args.query.topic ?? null,
      },
      limit: args.limit,
    },
    context.ports
  );
};


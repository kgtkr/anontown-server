import { getTopics } from "../../../../usecases";
import type { QueryResolvers } from "./../../../types.generated";

export const topics: NonNullable<QueryResolvers["topics"]> = async (
  _obj,
  args,
  context,
  _info
) => {
  return await getTopics(
    {
      query: {
        id: args.query.id ?? null,
        title: args.query.title ?? null,
        tags: args.query.tags ?? null,
        activeOnly: args.query.activeOnly ?? null,
        parent: args.query.parent ?? null,
      },
      skip: args.skip,
      limit: args.limit,
    },
    context.ports
  );
};

import type { QueryResolvers } from "./../../../types.generated";

export const topics: NonNullable<QueryResolvers["topics"]> = async (
  _obj,
  args,
  context,
  _info
) => {
  const topic = await context.ports.topicRepo.find(
    {
      id: args.query.id ?? null,
      title: args.query.title ?? null,
      tags: args.query.tags ?? null,
      activeOnly: args.query.activeOnly ?? null,
      parent: args.query.parent ?? null,
    },
    args.skip,
    args.limit
  );
  return topic.map((t) => t.toAPI());
};

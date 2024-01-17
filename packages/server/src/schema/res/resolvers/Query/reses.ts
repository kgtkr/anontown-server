import { convertDateQuery } from "../../../convertDateQuery";
import type { QueryResolvers } from "./../../../types.generated";
export const reses: NonNullable<QueryResolvers["reses"]> = async (
  _obj,
  args,
  context,
  _info
) => {
  const reses = await context.ports.resRepo.find(
    context.ports.authContainer,
    {
      id: args.query.id ?? null,
      date: convertDateQuery(args.query.date ?? null),
      topic: args.query.topic ?? null,
      hash: args.query.hash ?? null,
      profile: args.query.profile ?? null,
      notice: args.query.notice ?? null,
      reply: args.query.reply ?? null,
      self: args.query.self ?? null,
      text: args.query.text ?? null,
    },
    args.limit
  );
  return reses.map((x) =>
    x.toAPI(context.ports.authContainer.getTokenOrNull())
  );
};

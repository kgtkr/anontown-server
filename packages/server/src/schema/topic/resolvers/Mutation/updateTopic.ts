import { nullToUndefined } from "@kgtkr/utils";
import { AtNotFoundError } from "../../../../at-error";
import type { MutationResolvers } from "./../../../types.generated";
import * as formatter from "../../../../formatter";

export const updateTopic: NonNullable<
  MutationResolvers["updateTopic"]
> = async (_obj, args, context, _info) => {
  const [topic, user] = await Promise.all([
    context.ports.topicRepo.findOne(args.id),
    context.ports.userRepo.findOne(context.ports.authContainer.getToken().user),
  ]);

  if (topic.type !== "normal") {
    throw new AtNotFoundError("トピックが見つかりません");
  }

  const val = topic.changeData(
    context.ports.objectIdGenerator,
    user,
    context.ports.authContainer.getToken(),
    nullToUndefined(args.title),
    nullToUndefined(args.tags),
    nullToUndefined(args.text),
    context.ports.clock.now()
  );

  await Promise.all([
    context.ports.resRepo.insert(val.res),
    context.ports.historyRepo.insert(val.history),
    context.ports.topicRepo.update(val.topic),
    context.ports.userRepo.update(val.user),
  ]);

  context.ports.logger.info(
    formatter.mutation(context.ports.ipContainer, "reses", val.res.id)
  );
  context.ports.logger.info(
    formatter.mutation(context.ports.ipContainer, "histories", val.history.id)
  );

  return topic.toAPI();
};

import type { MutationResolvers } from "./../../../types.generated";
import * as formatter from "../../../../formatter";
import { TopicFork } from "../../../../entities";
import { AtNotFoundError } from "../../../../at-error";

export const createTopicFork: NonNullable<
  MutationResolvers["createTopicFork"]
> = async (_obj, args, context, _info) => {
  const user = await context.ports.userRepo.findOne(
    context.ports.authContainer.getToken().user
  );
  const parent = await context.ports.topicRepo.findOne(args.parent);

  if (parent.type !== "normal") {
    throw new AtNotFoundError("トピックが見つかりません");
  }

  const create = TopicFork.create(
    context.ports.objectIdGenerator,
    args.title,
    parent,
    user,
    context.ports.authContainer.getToken(),
    context.ports.clock.now()
  );

  await context.ports.topicRepo.insert(create.topic);
  await context.ports.topicRepo.update(create.parent);
  await Promise.all([
    context.ports.userRepo.update(create.user),
    context.ports.resRepo.insert(create.res),
    context.ports.resRepo.insert(create.resParent),
  ]);

  context.ports.logger.info(
    formatter.mutation(context.ports.ipContainer, "topics", create.topic.id)
  );
  context.ports.logger.info(
    formatter.mutation(context.ports.ipContainer, "reses", create.res.id)
  );
  context.ports.logger.info(
    formatter.mutation(context.ports.ipContainer, "reses", create.resParent.id)
  );

  return create.topic.toAPI();
};

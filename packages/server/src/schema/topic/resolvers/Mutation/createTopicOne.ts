import type { MutationResolvers } from "./../../../types.generated";
import * as formatter from "../../../../formatter";
import { TopicOne } from "../../../../entities";

export const createTopicOne: NonNullable<
  MutationResolvers["createTopicOne"]
> = async (_obj, args, context, _info) => {
  const user = await context.ports.userRepo.findOne(
    context.ports.authContainer.getToken().user
  );
  const create = TopicOne.create(
    context.ports.objectIdGenerator,
    args.title,
    args.tags,
    args.text,
    user,
    context.ports.authContainer.getToken(),
    context.ports.clock.now()
  );

  await context.ports.topicRepo.insert(create.topic);
  await Promise.all([
    context.ports.userRepo.update(create.user),
    context.ports.resRepo.insert(create.res),
  ]);

  context.ports.logger.info(
    formatter.mutation(context.ports.ipContainer, "topics", create.topic.id)
  );
  context.ports.logger.info(
    formatter.mutation(context.ports.ipContainer, "reses", create.res.id)
  );

  return create.topic.toAPI();
};

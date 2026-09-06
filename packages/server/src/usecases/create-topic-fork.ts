import { AtNotFoundError } from "../at-error";
import { ITopicForkAPI, TopicFork } from "../entities";
import * as formatter from "../formatter";
import { PortPick } from "../ports";

export interface CreateTopicForkInput {
  title: string;
  parent: string;
}

export async function createTopicFork(
  { title, parent: parentId }: CreateTopicForkInput,
  {
    userRepo,
    authContainer,
    topicRepo,
    objectIdGenerator,
    clock,
    resRepo,
    logger,
    ipContainer,
  }: PortPick<
    | "userRepo"
    | "authContainer"
    | "topicRepo"
    | "objectIdGenerator"
    | "clock"
    | "resRepo"
    | "logger"
    | "ipContainer"
  >
): Promise<ITopicForkAPI> {
  const user = await userRepo.findOne(authContainer.getToken().user);
  const parent = await topicRepo.findOne(parentId);

  if (parent.type !== "normal") {
    throw new AtNotFoundError("トピックが見つかりません");
  }

  const create = TopicFork.create(
    objectIdGenerator,
    title,
    parent,
    user,
    authContainer.getToken(),
    clock.now()
  );

  await topicRepo.insert(create.topic);
  await topicRepo.update(create.parent);
  await Promise.all([
    userRepo.update(create.user),
    resRepo.insert(create.res),
    resRepo.insert(create.resParent),
  ]);

  logger.info(
    formatter.mutation(ipContainer, "topics", create.topic.id)
  );
  logger.info(
    formatter.mutation(ipContainer, "reses", create.res.id)
  );
  logger.info(
    formatter.mutation(ipContainer, "reses", create.resParent.id)
  );

  return create.topic.toAPI();
}

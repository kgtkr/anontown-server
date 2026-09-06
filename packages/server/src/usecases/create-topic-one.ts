import { ITopicOneAPI, TopicOne } from "../entities";
import * as formatter from "../formatter";
import { PortPick } from "../ports";

export interface CreateTopicOneInput {
  title: string;
  tags: string[];
  text: string;
}

export async function createTopicOne(
  { title, tags, text }: CreateTopicOneInput,
  {
    userRepo,
    authContainer,
    objectIdGenerator,
    clock,
    topicRepo,
    resRepo,
    logger,
    ipContainer,
  }: PortPick<
    | "userRepo"
    | "authContainer"
    | "objectIdGenerator"
    | "clock"
    | "topicRepo"
    | "resRepo"
    | "logger"
    | "ipContainer"
  >
): Promise<ITopicOneAPI> {
  const user = await userRepo.findOne(authContainer.getToken().user);
  const create = TopicOne.create(
    objectIdGenerator,
    title,
    tags,
    text,
    user,
    authContainer.getToken(),
    clock.now()
  );

  await topicRepo.insert(create.topic);
  await Promise.all([
    userRepo.update(create.user),
    resRepo.insert(create.res),
  ]);

  logger.info(
    formatter.mutation(ipContainer, "topics", create.topic.id)
  );
  logger.info(
    formatter.mutation(ipContainer, "reses", create.res.id)
  );

  return create.topic.toAPI();
}

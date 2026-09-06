import { ITopicNormalAPI, TopicNormal } from "../entities";
import * as formatter from "../formatter";
import { PortPick } from "../ports";

export interface CreateTopicNormalInput {
  title: string;
  tags: string[];
  text: string;
}

export async function createTopicNormal(
  { title, tags, text }: CreateTopicNormalInput,
  {
    userRepo,
    authContainer,
    objectIdGenerator,
    clock,
    topicRepo,
    resRepo,
    historyRepo,
    logger,
    ipContainer,
  }: PortPick<
    | "userRepo"
    | "authContainer"
    | "objectIdGenerator"
    | "clock"
    | "topicRepo"
    | "resRepo"
    | "historyRepo"
    | "logger"
    | "ipContainer"
  >
): Promise<ITopicNormalAPI> {
  const user = await userRepo.findOne(authContainer.getToken().user);
  const create = TopicNormal.create(
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
    historyRepo.insert(create.history),
  ]);
  logger.info(
    formatter.mutation(ipContainer, "topics", create.topic.id)
  );
  logger.info(
    formatter.mutation(ipContainer, "reses", create.res.id)
  );
  logger.info(
    formatter.mutation(ipContainer, "histories", create.history.id)
  );
  return create.topic.toAPI();
}

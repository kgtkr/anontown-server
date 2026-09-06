import { nullToUndefined } from "@kgtkr/utils";
import { AtNotFoundError } from "../at-error";
import { ITopicNormalAPI } from "../entities";
import * as formatter from "../formatter";
import { PortPick } from "../ports";

export interface UpdateTopicInput {
  id: string;
  title?: string | null;
  tags?: string[] | null;
  text?: string | null;
}

export async function updateTopic(
  { id, title, tags, text }: UpdateTopicInput,
  {
    topicRepo,
    userRepo,
    authContainer,
    objectIdGenerator,
    clock,
    resRepo,
    historyRepo,
    logger,
    ipContainer,
  }: PortPick<
    | "topicRepo"
    | "userRepo"
    | "authContainer"
    | "objectIdGenerator"
    | "clock"
    | "resRepo"
    | "historyRepo"
    | "logger"
    | "ipContainer"
  >
): Promise<ITopicNormalAPI> {
  const [topic, user] = await Promise.all([
    topicRepo.findOne(id),
    userRepo.findOne(authContainer.getToken().user),
  ]);

  if (topic.type !== "normal") {
    throw new AtNotFoundError("トピックが見つかりません");
  }

  const val = topic.changeData(
    objectIdGenerator,
    user,
    authContainer.getToken(),
    nullToUndefined(title),
    nullToUndefined(tags),
    nullToUndefined(text),
    clock.now()
  );

  await Promise.all([
    resRepo.insert(val.res),
    historyRepo.insert(val.history),
    topicRepo.update(val.topic),
    userRepo.update(val.user),
  ]);

  logger.info(
    formatter.mutation(ipContainer, "reses", val.res.id)
  );
  logger.info(
    formatter.mutation(ipContainer, "histories", val.history.id)
  );

  return topic.toAPI();
}

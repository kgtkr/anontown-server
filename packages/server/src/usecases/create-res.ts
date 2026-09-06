import { isNullish } from "@kgtkr/utils";
import * as O from "fp-ts/lib/Option";
import { IResNormalAPI, ResNormal } from "../entities";
import * as formatter from "../formatter";
import { PortPick } from "../ports";

export async function createRes(
  args: {
    topic: string;
    name?: string | null;
    text: string;
    reply?: string | null;
    profile?: string | null;
    age: boolean;
  },
  {
    topicRepo,
    userRepo,
    resRepo,
    profileRepo,
    objectIdGenerator,
    authContainer,
    clock,
    logger,
    ipContainer,
    notificationQueue,
  }: PortPick<
    | "topicRepo"
    | "userRepo"
    | "resRepo"
    | "profileRepo"
    | "objectIdGenerator"
    | "authContainer"
    | "clock"
    | "logger"
    | "ipContainer"
    | "notificationQueue"
  >
): Promise<IResNormalAPI> {
  const [topic, user, reply, profile] = await Promise.all([
    topicRepo.findOne(args.topic),
    userRepo.findOne(authContainer.getToken().user),
    !isNullish(args.reply)
      ? resRepo.findOne(args.reply)
      : Promise.resolve(null),
    !isNullish(args.profile)
      ? profileRepo.findOne(args.profile)
      : Promise.resolve(null),
  ] as const);

  const {
    res,
    user: newUser,
    topic: newTopic,
  } = ResNormal.create(
    objectIdGenerator,
    topic,
    user,
    authContainer.getToken(),
    O.fromNullable(args.name),
    args.text,
    O.fromNullable(reply),
    O.fromNullable(profile),
    args.age,
    clock.now()
  );

  await Promise.all([
    resRepo.insert(res),
    topicRepo.update(newTopic),
    userRepo.update(newUser),
  ]);

  logger.info(formatter.mutation(ipContainer, "reses", res.id));
  const api = res.toAPI(O.some(authContainer.getToken()));
  if (api.type !== "normal") {
    throw new Error();
  }

  if (O.isSome(res.reply) && res.user !== res.reply.value.user) {
    await notificationQueue.enqueue([
      {
        userId: res.reply.value.user,
        payload: JSON.stringify({
          title: "あなたのレスにリプライがありました",
          // TODO: markdownを解釈する
          body: res.text,
          data: {
            // TODO: フロントのURLを設定できるように
            url: `https://anontown.com/topics/${res.topic}/reses/${res.id}`,
          },
        }),
      },
    ]);
  }
  const subscriptionUsers = await topicRepo.subscriptionUserIds(res.topic);
  await notificationQueue.enqueue(
    subscriptionUsers
      .filter((userId) => userId !== res.user)
      .filter(
        (userId) => O.isNone(res.reply) || userId !== res.reply.value.user
      )
      .map((userId) => ({
        userId,
        payload: JSON.stringify({
          title: "あなたが購読しているトピックに新しいレスがありました",
          body: res.text,
          data: {
            url: `https://anontown.com/topics/${res.topic}/reses/${res.id}`,
          },
        }),
      }))
  );

  return api;
}

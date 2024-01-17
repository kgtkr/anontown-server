import { isNullish } from "@kgtkr/utils";
import type { MutationResolvers } from "./../../../types.generated";
import { ResNormal } from "../../../../entities";
import * as formatter from "../../../../formatter";
import * as O from "fp-ts/lib/Option";

export const createRes: NonNullable<MutationResolvers["createRes"]> = async (
  _obj,
  args,
  context,
  _info
) => {
  const [topic, user, reply, profile] = await Promise.all([
    context.ports.topicRepo.findOne(args.topic),
    context.ports.userRepo.findOne(context.ports.authContainer.getToken().user),
    !isNullish(args.reply)
      ? context.ports.resRepo.findOne(args.reply)
      : Promise.resolve(null),
    !isNullish(args.profile)
      ? context.ports.profileRepo.findOne(args.profile)
      : Promise.resolve(null),
  ] as const);

  const {
    res,
    user: newUser,
    topic: newTopic,
  } = ResNormal.create(
    context.ports.objectIdGenerator,
    topic,
    user,
    context.ports.authContainer.getToken(),
    O.fromNullable(args.name),
    args.text,
    O.fromNullable(reply),
    O.fromNullable(profile),
    args.age,
    context.ports.clock.now()
  );

  await Promise.all([
    context.ports.resRepo.insert(res),
    context.ports.topicRepo.update(newTopic),
    context.ports.userRepo.update(newUser),
  ]);

  context.ports.logger.info(
    formatter.mutation(context.ports.ipContainer, "reses", res.id)
  );
  const api = res.toAPI(O.some(context.ports.authContainer.getToken()));
  if (api.type !== "normal") {
    throw new Error();
  }

  if (O.isSome(res.reply) && res.user !== res.reply.value.user) {
    await context.ports.notificationQueue.enqueue([
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
  const subscriptionUsers = await context.ports.topicRepo.subscriptionUserIds(
    res.topic
  );
  await context.ports.notificationQueue.enqueue(
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
};

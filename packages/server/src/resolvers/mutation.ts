import { isNullish, nullToUndefined } from "@kgtkr/utils";
import { fromNullable, some } from "fp-ts/lib/Option";
import { AtNotFoundError } from "../at-error";
import {
  Client,
  IStorageAPI,
  Profile,
  ResNormal,
  Storage,
  TokenGeneral,
  TokenMaster,
  TopicFork,
  TopicNormal,
  TopicOne,
  User,
} from "../entities";
import * as formatter from "../formatter";
import * as G from "../generated/graphql";
import * as authFromApiParam from "../server/auth-from-api-param";
import * as O from "fp-ts/Option";

export const mutation: G.MutationResolvers = {
  createUser: async (_obj, args, context, _info) => {
    await context.ports.recaptcha.verify(args.recaptcha);

    const user = User.create(
      context.ports.objectIdGenerator,
      args.sn,
      args.pass,
      context.ports.clock.now()
    );
    await context.ports.userRepo.insert(user);

    const token = TokenMaster.create(
      context.ports.objectIdGenerator,
      user.auth(args.pass),
      context.ports.clock.now(),
      context.ports.safeIdGenerator
    );
    await context.ports.tokenRepo.insert(token);

    return { user: user.toAPI(), token: token.toAPI() };
  },
  updateUser: async (_obj, args, context, _info) => {
    const authUser = await authFromApiParam.authUserRequestToUser(
      context.ports.userRepo,
      args.auth
    );
    const user = await context.ports.userRepo.findOne(authUser.id);
    const newUser = user.change(
      authUser,
      nullToUndefined(args.pass),
      nullToUndefined(args.sn)
    );
    await context.ports.userRepo.update(newUser);
    await context.ports.tokenRepo.delMasterToken(authUser);

    const token = TokenMaster.create(
      context.ports.objectIdGenerator,
      authUser,
      context.ports.clock.now(),
      context.ports.safeIdGenerator
    );
    await context.ports.tokenRepo.insert(token);
    return { user: newUser.toAPI(), token: token.toAPI() };
  },
  createClient: async (_obj, args, context, _info) => {
    const client = Client.create(
      context.ports.objectIdGenerator,
      context.ports.authContainer.getTokenMaster(),
      args.name,
      args.url,
      context.ports.clock.now()
    );
    await context.ports.clientRepo.insert(client);
    context.ports.logger.info(
      formatter.mutation(context.ports.ipContainer, "clients", client.id)
    );
    return client.toAPI(some(context.ports.authContainer.getTokenMaster()));
  },
  updateClient: async (_obj, args, context, _info) => {
    const client = await context.ports.clientRepo.findOne(args.id);
    const newClient = client.changeData(
      context.ports.authContainer.getTokenMaster(),
      nullToUndefined(args.name),
      nullToUndefined(args.url),
      context.ports.clock.now()
    );
    await context.ports.clientRepo.update(newClient);
    context.ports.logger.info(
      formatter.mutation(context.ports.ipContainer, "clients", client.id)
    );
    return newClient.toAPI(some(context.ports.authContainer.getTokenMaster()));
  },
  createProfile: async (_obj, args, context, _info) => {
    const profile = Profile.create(
      context.ports.objectIdGenerator,
      context.ports.authContainer.getToken(),
      args.name,
      args.text,
      args.sn,
      context.ports.clock.now()
    );
    await context.ports.profileRepo.insert(profile);
    context.ports.logger.info(
      formatter.mutation(context.ports.ipContainer, "profiles", profile.id)
    );
    return profile.toAPI(some(context.ports.authContainer.getToken()));
  },
  updateProfile: async (_obj, args, context, _info: any) => {
    const profile = await context.ports.profileRepo.findOne(args.id);
    const newProfile = profile.changeData(
      context.ports.authContainer.getToken(),
      nullToUndefined(args.name),
      nullToUndefined(args.text),
      nullToUndefined(args.sn),
      context.ports.clock.now()
    );
    await context.ports.profileRepo.update(newProfile);
    context.ports.logger.info(
      formatter.mutation(context.ports.ipContainer, "profiles", newProfile.id)
    );
    return newProfile.toAPI(some(context.ports.authContainer.getToken()));
  },
  createRes: async (_obj, args, context, _info) => {
    const [topic, user, reply, profile] = await Promise.all([
      context.ports.topicRepo.findOne(args.topic),
      context.ports.userRepo.findOne(
        context.ports.authContainer.getToken().user
      ),
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
      fromNullable(args.name),
      args.text,
      fromNullable(reply),
      fromNullable(profile),
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
    const api = res.toAPI(some(context.ports.authContainer.getToken()));
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
  },
  voteRes: async (_obj, args, context, _info) => {
    if (args.type === "cv") {
      const [res, user] = await Promise.all([
        context.ports.resRepo.findOne(args.res),
        context.ports.userRepo.findOne(
          context.ports.authContainer.getToken().user
        ),
      ]);

      // レスを書き込んだユーザー
      const resUser = await context.ports.userRepo.findOne(res.user);

      const { res: newRes, resUser: newResUser } = res.cv(
        resUser,
        user,
        context.ports.authContainer.getToken()
      );

      await Promise.all([
        context.ports.resRepo.update(newRes),
        context.ports.userRepo.update(newResUser),
        context.ports.userRepo.update(user), // TODO: user更新されてないから保存する必要ない
      ]);

      return newRes.toAPI(some(context.ports.authContainer.getToken()));
    } else {
      const [res, user] = await Promise.all([
        context.ports.resRepo.findOne(args.res),
        context.ports.userRepo.findOne(
          context.ports.authContainer.getToken().user
        ),
      ]);

      // レスを書き込んだユーザー
      const resUser = await context.ports.userRepo.findOne(res.user);

      const { res: newRes, resUser: newResUser } = res.v(
        resUser,
        user,
        args.type,
        context.ports.authContainer.getToken()
      );

      await Promise.all([
        context.ports.resRepo.update(newRes),
        context.ports.userRepo.update(newResUser),
        context.ports.userRepo.update(user), // TODO: user更新されてないから保存する必要ない
      ]);

      return newRes.toAPI(some(context.ports.authContainer.getToken()));
    }
  },
  delRes: async (_obj, args, context, _info) => {
    const res = await context.ports.resRepo.findOne(args.res);

    if (res.type !== "normal") {
      throw new AtNotFoundError("レスが見つかりません");
    }

    // レスを書き込んだユーザー
    const resUser = await context.ports.userRepo.findOne(res.user);

    const { res: newRes, resUser: newResUser } = res.del(
      resUser,
      context.ports.authContainer.getToken()
    );

    await Promise.all([
      context.ports.resRepo.update(newRes),
      context.ports.userRepo.update(newResUser),
    ]);

    const api = newRes.toAPI(some(context.ports.authContainer.getToken()));
    if (api.type !== "delete") {
      throw new Error();
    }
    return api;
  },
  setStorages: async (_obj, args, context, _info) => {
    // TODO: トランザクション
    const results: IStorageAPI[] = [];
    for (const storageInput of args.input.storages) {
      const storage = Storage.create(
        context.ports.authContainer.getToken(),
        storageInput.key,
        storageInput.value
      );
      await context.ports.storageRepo.save(storage);
      results.push(storage.toAPI(context.ports.authContainer.getToken()));
    }
    return {
      storages: results,
    };
  },
  delStorage: async (_obj, args, context, _info) => {
    const storage = await context.ports.storageRepo.findOneKey(
      context.ports.authContainer.getToken(),
      args.key
    );
    await context.ports.storageRepo.del(storage);
    return null;
  },
  createTopicNormal: async (_obj, args, context, _info) => {
    const user = await context.ports.userRepo.findOne(
      context.ports.authContainer.getToken().user
    );
    const create = TopicNormal.create(
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
      context.ports.historyRepo.insert(create.history),
    ]);
    context.ports.logger.info(
      formatter.mutation(context.ports.ipContainer, "topics", create.topic.id)
    );
    context.ports.logger.info(
      formatter.mutation(context.ports.ipContainer, "reses", create.res.id)
    );
    context.ports.logger.info(
      formatter.mutation(
        context.ports.ipContainer,
        "histories",
        create.history.id
      )
    );
    return create.topic.toAPI();
  },
  createTopicOne: async (_obj, args, context, _info) => {
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
  },
  createTopicFork: async (_obj, args, context, _info) => {
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
      formatter.mutation(
        context.ports.ipContainer,
        "reses",
        create.resParent.id
      )
    );

    return create.topic.toAPI();
  },
  updateTopic: async (_obj, args, context, _info) => {
    const [topic, user] = await Promise.all([
      context.ports.topicRepo.findOne(args.id),
      context.ports.userRepo.findOne(
        context.ports.authContainer.getToken().user
      ),
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
  },
  resisterPushSubscription: async (_obj, args, context, _info) => {
    await context.ports.pushSubscriptionsRepo.upsert(
      context.ports.authContainer.getToken().user,
      {
        endpoint: args.endpoint,
        keys: {
          p256dh: args.p256dh,
          auth: args.auth,
        },
      }
    );
    return null;
  },
  subscribeTopic: async (_obj, args, context, _info) => {
    await context.ports.topicRepo.enableSubscription(
      args.topic,
      context.ports.authContainer.getToken().user
    );
    return null;
  },
  unsubscribeTopic: async (_obj, args, context, _info) => {
    await context.ports.topicRepo.disableSubscription(
      args.topic,
      context.ports.authContainer.getToken().user
    );
    return null;
  },
};

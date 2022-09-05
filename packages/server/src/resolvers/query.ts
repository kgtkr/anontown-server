import * as G from "../generated/graphql";
import { DateQuery } from "../ports/types";

function convertDateQuery(query: G.DateQuery | null): DateQuery | null {
  if (query === null) {
    return null;
  }
  return {
    date: query.date.toISOString(),
    type: query.type,
  };
}

export const query: G.QueryResolvers = {
  userID: async (_obj, args, context, _info) => {
    return await context.ports.userRepo.findID(args.sn);
  },
  userSN: async (_obj, args, context, _info) => {
    return (await context.ports.userRepo.findOne(args.id)).sn;
  },
  user: async (_obj, _args, context, _info) => {
    return (
      await context.ports.userRepo.findOne(
        context.ports.authContainer.getToken().user
      )
    ).toAPI();
  },
  clients: async (_obj, args, context, _info) => {
    const clients = await context.ports.clientRepo.find(
      context.ports.authContainer.getTokenMasterOrNull(),
      {
        id: args.query.id ?? null,
        self: args.query.self ?? null,
      }
    );
    return clients.map((c) =>
      c.toAPI(context.ports.authContainer.getTokenMasterOrNull())
    );
  },
  histories: async (_obj, args, context, _info) => {
    const histories = await context.ports.historyRepo.find(
      {
        id: args.query.id ?? null,
        date: convertDateQuery(args.query.date ?? null),
        topic: args.query.topic ?? null,
      },
      args.limit
    );
    return histories.map((x) =>
      x.toAPI(context.ports.authContainer.getTokenOrNull())
    );
  },
  msgs: async (_obj, args, context, _info) => {
    const msgs = await context.ports.msgRepo.find(
      context.ports.authContainer.getToken(),
      {
        id: args.query.id ?? null,
        date: convertDateQuery(args.query.date ?? null),
      },
      args.limit
    );
    return msgs.map((x) => x.toAPI(context.ports.authContainer.getToken()));
  },
  profiles: async (_obj, args, context, _info) => {
    const profiles = await context.ports.profileRepo.find(
      context.ports.authContainer,
      {
        id: args.query.id ?? null,
        self: args.query.self ?? null,
      }
    );
    return profiles.map((p) =>
      p.toAPI(context.ports.authContainer.getTokenOrNull())
    );
  },
  reses: async (_obj, args, context, _info: any) => {
    const reses = await context.ports.resRepo.find(
      context.ports.authContainer,
      {
        id: args.query.id ?? null,
        date: convertDateQuery(args.query.date ?? null),
        topic: args.query.topic ?? null,
        hash: args.query.hash ?? null,
        profile: args.query.profile ?? null,
        notice: args.query.notice ?? null,
        reply: args.query.reply ?? null,
        self: args.query.self ?? null,
        text: args.query.text ?? null,
      },
      args.limit
    );
    return reses.map((x) =>
      x.toAPI(context.ports.authContainer.getTokenOrNull())
    );
  },
  storages: async (_obj, args, context, _info) => {
    const storages = await context.ports.storageRepo.find(
      context.ports.authContainer.getToken(),
      {
        key: args.query.key ?? null,
      }
    );
    return storages.map((x) => x.toAPI(context.ports.authContainer.getToken()));
  },
  token: async (_obj, _args, context, _info) => {
    const token = await context.ports.tokenRepo.findOne(
      context.ports.authContainer.getToken().id
    );
    return token.toAPI();
  },
  tokens: async (_obj, _args, context, _info: any) => {
    const tokens = await context.ports.tokenRepo.findAll(
      context.ports.authContainer.getTokenMaster()
    );
    return tokens.map((t) => t.toAPI());
  },
  topics: async (_obj, args, context, _info) => {
    const topic = await context.ports.topicRepo.find(
      {
        id: args.query.id ?? null,
        title: args.query.title ?? null,
        tags: args.query.tags ?? null,
        activeOnly: args.query.activeOnly ?? null,
        parent: args.query.parent ?? null,
      },
      args.skip,
      args.limit
    );
    return topic.map((t) => t.toAPI());
  },
  topicTags: async (_obj, args, context, _info) => {
    return await context.ports.topicRepo.findTags(args.limit);
  },
};

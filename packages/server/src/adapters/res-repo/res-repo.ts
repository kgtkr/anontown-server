import { isNullish, nullUnwrap } from "@kgtkr/utils";
import { AtNotFoundError } from "../../at-error";
import { createRedisClient, RedisClient } from "../../db";
import { Res, ResNormal, ResHistory, ResFork, ResTopic } from "../../entities";
import { IAuthContainer, IResRepo, ResRepoQuery } from "../../ports";
import { z } from "zod";
import * as P from "@prisma/client";
import * as O from "fp-ts/lib/Option";
import * as Im from "immutable";
import { pipe } from "fp-ts/lib/pipeable";
import * as A from "fp-ts/lib/Array";
import * as Ord from "fp-ts/lib/Ord";
import { RedisPubSub } from "graphql-redis-subscriptions";
import * as ixa from "ix/asynciterable";
import * as ixaOps from "ix/asynciterable/operators";

// TODO: 他にイベントができたらグローバルな場所もしくは適切な抽象化レイヤーに移動
const pubsub = new RedisPubSub({
  subscriber: createRedisClient(),
  publisher: RedisClient(),
});

const ResPubSub = z.object({
  id: z.string(),
  topic: z.string(),
  count: z.number(),
});

type ResPubSub = z.infer<typeof ResPubSub>;
const ResPubSubChannel = "res/add";

function toEntity(
  model: P.Res & {
    votes: Array<P.ResVote>;
    reply: P.Res | null;
    _count: {
      replieds: number;
    } | null;
  }
): Res {
  const votes = pipe(
    model.votes,
    A.sort(Ord.contramap<number, P.ResVote>((x) => x.order)(Ord.ordNumber)),
    A.map((v) => ({ user: v.userId, value: v.vote })),
    (xs) => Im.List(xs)
  );
  switch (model.type) {
    case "NORMAL":
      return new ResNormal(
        O.fromNullable(model.name),
        nullUnwrap(model.content),
        pipe(
          O.fromNullable(model.reply),
          O.map((replyRes) => ({
            res: replyRes.id,
            user: replyRes.userId,
          }))
        ),
        (() => {
          const deleteFlag = nullUnwrap(model.deleteFlag);
          switch (deleteFlag) {
            case "ACTIVE":
              return "active" as const;
            case "SELF":
              return "self" as const;
            case "FREEZE":
              return "freeze" as const;
          }
        })(),
        O.fromNullable(model.profileId),
        nullUnwrap(model.age),
        model.id,
        model.topicId,
        model.createdAt,
        model.userId,
        votes,
        model.lv,
        model.hash,
        model._count?.replieds ?? 0
      );
    case "HISTORY":
      return new ResHistory(
        nullUnwrap(model.historyId),
        model.id,
        model.topicId,
        model.createdAt,
        model.userId,
        votes,
        model.lv,
        model.hash,
        model._count?.replieds ?? 0
      );
    case "TOPIC":
      return new ResTopic(
        model.id,
        model.topicId,
        model.createdAt,
        model.userId,
        votes,
        model.lv,
        model.hash,
        model._count?.replieds ?? 0
      );
    case "FORK":
      return new ResFork(
        nullUnwrap(model.forkId),
        model.id,
        model.topicId,
        model.createdAt,
        model.userId,
        votes,
        model.lv,
        model.hash,
        model._count?.replieds ?? 0
      );
  }
}

function fromEntity(entity: Res): Omit<P.Prisma.ResUncheckedCreateInput, "id"> {
  const resBase: Omit<P.Prisma.ResUncheckedCreateInput, "id" | "type"> = {
    createdAt: entity.date,
    userId: entity.user,
    lv: entity.lv,
    hash: entity.hash,
    topicId: entity.topic,
  };

  switch (entity.type) {
    case "normal":
      return {
        ...resBase,
        type: "NORMAL",
        name: pipe(entity.name, O.toNullable),
        content: entity.text,
        replyId: pipe(
          entity.reply,
          O.map((reply) => reply.res),
          O.toNullable
        ),
        deleteFlag: (() => {
          switch (entity.deleteFlag) {
            case "active":
              return "ACTIVE" as const;
            case "self":
              return "SELF" as const;
            case "freeze":
              return "FREEZE" as const;
          }
        })(),
        profileId: pipe(entity.profile, O.toNullable),
        age: entity.age,
      };
    case "history":
      return {
        ...resBase,
        type: "HISTORY",
        historyId: entity.history,
      };
    case "topic":
      return {
        ...resBase,
        type: "TOPIC",
      };
    case "fork":
      return {
        ...resBase,
        type: "FORK",
        forkId: entity.fork,
      };
  }
}

function votesFromEntity(
  res: Res
): Array<P.Prisma.ResVoteCreateWithoutResInput> {
  return res.votes.toArray().map((vote, i) => ({
    userId: vote.user,
    vote: vote.value,
    order: i,
  }));
}

export class ResRepo implements IResRepo {
  constructor(private prisma: P.Prisma.TransactionClient) {}

  subscribeInsertEvent(
    topicId: string
  ): AsyncIterable<{ res: Res; count: number }> {
    return ixa
      .from(pubsub.asyncIterator(ResPubSubChannel))
      .pipe(
        ixaOps.map((message) => {
          if (typeof message !== "string") {
            throw new Error(`invalid message: ${String(message)}`);
          }
          const unknownData: unknown = JSON.parse(message);
          return ResPubSub.parse(unknownData);
        })
      )
      .pipe(ixaOps.filter((data) => data.id === topicId))
      .pipe(
        ixaOps.map(async (data) => {
          const res = await this.findOne(data.id);

          return {
            res: res,
            count: data.count,
          };
        })
      );
  }

  async findOne(id: string): Promise<Res> {
    const res = await this.prisma.res.findUnique({
      where: {
        id,
      },
      include: {
        votes: true,
        reply: true,
        _count: {
          select: {
            replieds: true,
          },
        },
      },
    });
    if (res === null) {
      throw new AtNotFoundError("レスが存在しません");
    }
    return toEntity(res);
  }

  async insert(res: Res): Promise<void> {
    const model = fromEntity(res);
    await this.prisma.res.create({
      data: {
        ...model,
        id: res.id,
        votes: {
          createMany: {
            data: votesFromEntity(res),
          },
        },
      },
    });
    const count = await this.prisma.res.count({
      where: { topicId: res.topic },
    });

    const data: ResPubSub = {
      id: res.id,
      topic: res.topic,
      count,
    };
    await pubsub.publish(ResPubSubChannel, data);
  }

  async update(res: Res): Promise<void> {
    const model = fromEntity(res);

    await this.prisma.res.update({
      where: { id: res.id },
      data: {
        ...model,
        votes: {
          deleteMany: {},
          createMany: {
            data: votesFromEntity(res),
          },
        },
      },
    });
  }

  async find(
    auth: IAuthContainer,
    query: ResRepoQuery,
    limit: number
  ): Promise<Array<Res>> {
    const filter: Array<P.Prisma.ResWhereInput> = [];

    if (!isNullish(query.date)) {
      filter.push({
        createdAt: {
          [query.date.type]: query.date.date,
        },
      });
    }

    if (!isNullish(query.id)) {
      filter.push({
        id: {
          in: query.id,
        },
      });
    }

    if (!isNullish(query.topic)) {
      filter.push({
        topicId: {
          in: query.topic,
        },
      });
    }

    if (query.notice) {
      filter.push({
        reply: {
          userId: auth.getToken().user,
        },
      });
    }

    if (!isNullish(query.hash)) {
      filter.push({
        hash: query.hash,
      });
    }

    if (!isNullish(query.reply)) {
      filter.push({
        replyId: query.reply,
      });
    }

    if (!isNullish(query.profile)) {
      filter.push({
        profileId: query.profile,
      });
    }

    if (query.self) {
      filter.push({
        userId: auth.getToken().user,
      });
    }

    if (!isNullish(query.text)) {
      for (const text of query.text.split(/\s/).filter((x) => x.length !== 0)) {
        filter.push({
          content: {
            contains: text,
            mode: "insensitive",
          },
        });
      }
    }

    const reses = await this.prisma.res.findMany({
      where: { AND: filter },
      orderBy: {
        createdAt:
          !isNullish(query.date) &&
          (query.date.type === "gt" || query.date.type === "gte")
            ? "asc"
            : "desc",
      },
      include: {
        votes: true,
        reply: true,
        _count: {
          select: {
            replieds: true,
          },
        },
      },
      take: limit,
    });

    const result = reses.map((h) => toEntity(h));
    if (
      !isNullish(query.date) &&
      (query.date.type === "gt" || query.date.type === "gte")
    ) {
      result.reverse();
    }
    return result;
  }
}

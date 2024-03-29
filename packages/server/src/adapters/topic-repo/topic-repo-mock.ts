import { isNullish } from "@kgtkr/utils";
import { none } from "fp-ts/lib/Option";
import { AuthContainer } from "..";
import { AtNotFoundError } from "../../at-error";
import { Topic } from "../../entities";
import {
  emptyResRepoQuery,
  IResRepo,
  ITopicRepo,
  TopicRepoQuery,
} from "../../ports";
import {
  fromTopic,
  ITopicDB,
  ITopicForkDB,
  ITopicOneDB,
  toTopic,
} from "./itopic-db";

export class TopicRepoMock implements ITopicRepo {
  private topics: Array<ITopicDB> = [];
  private subscriptions: Map<string, Set<string>> = new Map();

  constructor(public resRepo: IResRepo) {}

  async findOne(id: string): Promise<Topic> {
    const topic = this.topics.find((x) => x.id === id);

    if (topic === undefined) {
      throw new AtNotFoundError("トピックが存在しません");
    }

    return (await this.aggregate([topic]))[0];
  }

  async findTags(
    limit: number
  ): Promise<Array<{ name: string; count: number }>> {
    return Array.from(
      this.topics
        .map((x) => (x.body.type !== "fork" ? x.body.tags : []))
        .reduce((a, b) => a.concat(...b), [])
        .reduce(
          (a, b) => a.set(b, (a.get(b) || 0) + 1),
          new Map<string, number>()
        )
    )
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, limit);
  }

  async find(
    query: TopicRepoQuery,
    skip: number,
    limit: number
  ): Promise<Array<Topic>> {
    const titles = !isNullish(query.title)
      ? query.title.split(/\s/).filter((x) => x.length !== 0)
      : null;

    return this.aggregate(
      this.topics
        .filter((x) => isNullish(query.id) || query.id.includes(x.id))
        .filter(
          (x) =>
            titles === null || titles.every((t) => x.body.title.includes(t))
        )
        .filter(
          (x) =>
            isNullish(query.tags) ||
            query.tags.every((t) => "tags" in x.body && x.body.tags.includes(t))
        )
        .filter((x) => !query.activeOnly || x.body.active)
        .filter(
          (x) =>
            isNullish(query.parent) ||
            ("parent" in x.body && x.body.parent === query.parent)
        )
        .sort(
          (a, b) =>
            new Date(b.body.ageUpdate).valueOf() -
            new Date(a.body.ageUpdate).valueOf()
        )
        .slice(skip)
        .slice(0, limit)
    );
  }

  async cronTopicCheck(now: Date): Promise<void> {
    this.topics
      .filter<ITopicForkDB | ITopicOneDB>(
        (x): x is ITopicForkDB | ITopicOneDB =>
          x.body.type === "fork" || x.body.type === "one"
      )
      .filter(
        (x) =>
          new Date(x.body.update).valueOf() <
          new Date(now.valueOf() - 1000 * 60 * 60 * 24 * 7).valueOf()
      )
      .map((x) => ({ ...x, body: { ...x.body, active: false } }))
      .forEach((x) => {
        this.topics[this.topics.findIndex((y) => y.id === x.id)] = x;
      });
  }

  async insert(topic: Topic): Promise<void> {
    this.topics.push(fromTopic(topic));
  }

  async update(topic: Topic): Promise<void> {
    this.topics[this.topics.findIndex((x) => x.id === topic.id)] =
      fromTopic(topic);
  }

  private async aggregate(topics: Array<ITopicDB>): Promise<Array<Topic>> {
    return Promise.all(
      topics.map(async (t) => {
        const count = (
          await this.resRepo.find(
            new AuthContainer(none),
            { ...emptyResRepoQuery, topic: t.id },
            99999
          )
        ).length;
        return toTopic(t, count);
      })
    );
  }

  async subscriptionUserIds(topicId: string): Promise<Array<string>> {
    return Array.from(this.subscriptions.get(topicId) || []);
  }

  async enableSubscription(topicId: string, userId: string): Promise<void> {
    const subs = this.subscriptions.get(topicId) || new Set();
    subs.add(userId);
    this.subscriptions.set(topicId, subs);
  }

  async disableSubscription(topicId: string, userId: string): Promise<void> {
    const subs = this.subscriptions.get(topicId) || new Set();
    subs.delete(userId);
    this.subscriptions.set(topicId, subs);
  }

  async getSubscription(topicId: string, userId: string): Promise<boolean> {
    const subs = this.subscriptions.get(topicId) || new Set();
    return subs.has(userId);
  }
}

import { Topic } from "../../entities";

export type TopicRepoQuery = {
  activeOnly: boolean | null;
  id: string[] | null;
  parent: string | null;
  tags: string[] | null;
  title: string | null;
};

export const emptyTopicRepoQuery: TopicRepoQuery = {
  activeOnly: null,
  id: null,
  parent: null,
  tags: null,
  title: null,
};

export interface ITopicRepo {
  findOne(id: string): Promise<Topic>;

  findTags(limit: number): Promise<Array<{ name: string; count: number }>>;

  insert(topic: Topic): Promise<void>;

  update(topic: Topic): Promise<void>;

  cronTopicCheck(now: Date): Promise<void>;

  find(
    query: TopicRepoQuery,
    skip: number,
    limit: number
  ): Promise<Array<Topic>>;

  subscriptionUserIds(topicId: string): Promise<Array<string>>;
  enableSubscription(topicId: string, userId: string): Promise<void>;
  disableSubscription(topicId: string, userId: string): Promise<void>;
  getSubscription(topicId: string, userId: string): Promise<boolean>;
}

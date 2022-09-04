import { Topic } from "../../entities";
import * as G from "../../generated/graphql";

export type TopicRepoQuery = {
  activeOnly?: boolean;
  id?: string[];
  parent?: string;
  tags?: string[];
  title?: string;
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
}

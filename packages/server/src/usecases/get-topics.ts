import { ITopicAPI } from "../entities";
import { PortPick, TopicRepoQuery } from "../ports";

export interface GetTopicsInput {
  query: TopicRepoQuery;
  skip: number;
  limit: number;
}

export async function getTopics(
  { query, skip, limit }: GetTopicsInput,
  { topicRepo }: PortPick<"topicRepo">
): Promise<ITopicAPI[]> {
  const topic = await topicRepo.find(query, skip, limit);
  return topic.map((t) => t.toAPI());
}

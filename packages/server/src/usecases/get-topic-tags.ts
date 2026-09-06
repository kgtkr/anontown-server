import { ITagsAPI } from "../entities";
import { PortPick } from "../ports";

export interface GetTopicTagsInput {
  limit: number;
}

export async function getTopicTags(
  { limit }: GetTopicTagsInput,
  { topicRepo }: PortPick<"topicRepo">
): Promise<ITagsAPI[]> {
  return await topicRepo.findTags(limit);
}

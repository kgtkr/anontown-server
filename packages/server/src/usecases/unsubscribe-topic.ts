import { PortPick } from "../ports";

export interface UnsubscribeTopicInput {
  topicId: string;
}

export async function unsubscribeTopic(
  { topicId }: UnsubscribeTopicInput,
  { topicRepo, authContainer }: PortPick<"topicRepo" | "authContainer">
): Promise<null> {
  await topicRepo.disableSubscription(
    topicId,
    authContainer.getToken().user
  );
  return null;
}

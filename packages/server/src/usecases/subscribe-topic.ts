import { PortPick } from "../ports";

export interface SubscribeTopicInput {
  topicId: string;
}

export async function subscribeTopic(
  { topicId }: SubscribeTopicInput,
  { topicRepo, authContainer }: PortPick<"topicRepo" | "authContainer">
): Promise<null> {
  await topicRepo.enableSubscription(
    topicId,
    authContainer.getToken().user
  );
  return null;
}

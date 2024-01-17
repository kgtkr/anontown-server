import type { MutationResolvers } from "./../../../types.generated";

export const unsubscribeTopic: NonNullable<
  MutationResolvers["unsubscribeTopic"]
> = async (_obj, args, context, _info) => {
  await context.ports.topicRepo.disableSubscription(
    args.topic,
    context.ports.authContainer.getToken().user
  );
  return null;
};

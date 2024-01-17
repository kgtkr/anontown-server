import type { MutationResolvers } from "./../../../types.generated";
export const subscribeTopic: NonNullable<
  MutationResolvers["subscribeTopic"]
> = async (_obj, args, context, _info) => {
  await context.ports.topicRepo.enableSubscription(
    args.topic,
    context.ports.authContainer.getToken().user
  );
  return null;
};

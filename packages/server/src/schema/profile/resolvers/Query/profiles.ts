import type { QueryResolvers } from "./../../../types.generated";

export const profiles: NonNullable<QueryResolvers["profiles"]> = async (
  _obj,
  args,
  context,
  _info
) => {
  const profiles = await context.ports.profileRepo.find(
    context.ports.authContainer,
    {
      id: args.query.id ?? null,
      self: args.query.self ?? null,
    }
  );
  return profiles.map((p) =>
    p.toAPI(context.ports.authContainer.getTokenOrNull())
  );
};

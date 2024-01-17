import type { QueryResolvers } from "./../../../types.generated";
export const clients: NonNullable<QueryResolvers["clients"]> = async (
  _obj,
  args,
  context,
  _info
) => {
  const clients = await context.ports.clientRepo.find(
    context.ports.authContainer.getTokenMasterOrNull(),
    {
      id: args.query.id ?? null,
      self: args.query.self ?? null,
    }
  );
  return clients.map((c) =>
    c.toAPI(context.ports.authContainer.getTokenMasterOrNull())
  );
};

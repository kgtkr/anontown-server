import { getClients } from "../../../../usecases";
import type { QueryResolvers } from "./../../../types.generated";

export const clients: NonNullable<QueryResolvers["clients"]> = async (
  _obj,
  args,
  context,
  _info
) => {
  return await getClients(
    {
      query: {
        id: args.query.id ?? null,
        self: args.query.self ?? null,
      },
    },
    context.ports
  );
};

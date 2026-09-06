import { getStorages } from "../../../../usecases";
import type { QueryResolvers } from "./../../../types.generated";

export const storages: NonNullable<QueryResolvers["storages"]> = async (
  _obj,
  args,
  context,
  _info
) => {
  return await getStorages(
    {
      query: {
        key: args.query.key ?? null,
        keyPrefix: args.query.keyPrefix ?? null,
      },
    },
    context.ports
  );
};

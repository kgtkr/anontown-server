import { getProfiles } from "../../../../usecases";
import type { QueryResolvers } from "./../../../types.generated";

export const profiles: NonNullable<QueryResolvers["profiles"]> = async (
  _obj,
  args,
  context,
  _info
) => {
  return await getProfiles(
    {
      query: {
        id: args.query.id ?? null,
        self: args.query.self ?? null,
      },
    },
    context.ports
  );
};

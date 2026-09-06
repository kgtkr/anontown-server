import { getToken } from "../../../../usecases";
import type { QueryResolvers } from "./../../../types.generated";

export const token: NonNullable<QueryResolvers["token"]> = async (
  _obj,
  _args,
  context,
  _info
) => {
  return await getToken({}, context.ports);
};

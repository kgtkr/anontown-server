import { PortPick } from "../ports";

export interface GetUserSNInput {
  id: string;
}

export async function getUserSN(
  { id }: GetUserSNInput,
  { userRepo }: PortPick<"userRepo">
): Promise<string> {
  const user = await userRepo.findOne(id);
  return user.sn;
}

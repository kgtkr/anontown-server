import { PortPick } from "../ports";

export interface GetUserIDInput {
  sn: string;
}

export async function getUserID(
  { sn }: GetUserIDInput,
  { userRepo }: PortPick<"userRepo">
): Promise<string> {
  return await userRepo.findID(sn);
}

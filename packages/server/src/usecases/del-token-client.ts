import { PortPick } from "../ports";

export interface DelTokenClientInput {
  clientId: string;
}

export async function delTokenClient(
  { clientId }: DelTokenClientInput,
  {
    clientRepo,
    tokenRepo,
    authContainer,
  }: PortPick<"clientRepo" | "tokenRepo" | "authContainer">
): Promise<null> {
  const client = await clientRepo.findOne(clientId);
  await tokenRepo.delClientToken(authContainer.getTokenMaster(), client.id);
  return null;
}

import { IClientAPI } from "../entities";
import { ClientRepoQuery, PortPick } from "../ports";

export interface GetClientsInput {
  query: ClientRepoQuery;
}

export async function getClients(
  { query }: GetClientsInput,
  { clientRepo, authContainer }: PortPick<"clientRepo" | "authContainer">
): Promise<IClientAPI[]> {
  const clients = await clientRepo.find(
    authContainer.getTokenMasterOrNull(),
    query
  );
  return clients.map((c) => c.toAPI(authContainer.getTokenMasterOrNull()));
}

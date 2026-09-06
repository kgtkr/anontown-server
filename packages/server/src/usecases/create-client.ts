import { some } from "fp-ts/lib/Option";
import { Client, IClientAPI } from "../entities";
import * as formatter from "../formatter";
import { PortPick } from "../ports";

export interface CreateClientInput {
  name: string;
  url: string;
}

export async function createClient(
  { name, url }: CreateClientInput,
  {
    objectIdGenerator,
    authContainer,
    clientRepo,
    clock,
    logger,
    ipContainer,
  }: PortPick<
    | "objectIdGenerator"
    | "authContainer"
    | "clientRepo"
    | "clock"
    | "logger"
    | "ipContainer"
  >
): Promise<IClientAPI> {
  const client = Client.create(
    objectIdGenerator,
    authContainer.getTokenMaster(),
    name,
    url,
    clock.now()
  );
  await clientRepo.insert(client);
  logger.info(formatter.mutation(ipContainer, "clients", client.id));
  return client.toAPI(some(authContainer.getTokenMaster()));
}

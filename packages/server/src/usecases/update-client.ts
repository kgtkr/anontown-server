import { nullToUndefined } from "@kgtkr/utils";
import { some } from "fp-ts/lib/Option";
import { IClientAPI } from "../entities";
import * as formatter from "../formatter";
import { PortPick } from "../ports";

export interface UpdateClientInput {
  id: string;
  name?: string | null;
  url?: string | null;
}

export async function updateClient(
  { id, name, url }: UpdateClientInput,
  {
    clientRepo,
    authContainer,
    clock,
    logger,
    ipContainer,
  }: PortPick<
    "clientRepo" | "authContainer" | "clock" | "logger" | "ipContainer"
  >
): Promise<IClientAPI> {
  const client = await clientRepo.findOne(id);
  const newClient = client.changeData(
    authContainer.getTokenMaster(),
    nullToUndefined(name),
    nullToUndefined(url),
    clock.now()
  );
  await clientRepo.update(newClient);
  logger.info(formatter.mutation(ipContainer, "clients", client.id));
  return newClient.toAPI(some(authContainer.getTokenMaster()));
}

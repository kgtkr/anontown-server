import { some } from "fp-ts/lib/Option";
import { Client } from "../../../../entities";
import type { MutationResolvers } from "./../../../types.generated";
import * as formatter from "../../../../formatter";

export const createClient: NonNullable<
  MutationResolvers["createClient"]
> = async (_obj, args, context, _info) => {
  const client = Client.create(
    context.ports.objectIdGenerator,
    context.ports.authContainer.getTokenMaster(),
    args.name,
    args.url,
    context.ports.clock.now()
  );
  await context.ports.clientRepo.insert(client);
  context.ports.logger.info(
    formatter.mutation(context.ports.ipContainer, "clients", client.id)
  );
  return client.toAPI(some(context.ports.authContainer.getTokenMaster()));
};

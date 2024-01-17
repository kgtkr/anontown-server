import { nullToUndefined } from "@kgtkr/utils";
import type { MutationResolvers } from "./../../../types.generated";
import * as formatter from "../../../../formatter";
import { some } from "fp-ts/lib/Option";

export const updateClient: NonNullable<
  MutationResolvers["updateClient"]
> = async (_obj, args, context, _info) => {
  const client = await context.ports.clientRepo.findOne(args.id);
  const newClient = client.changeData(
    context.ports.authContainer.getTokenMaster(),
    nullToUndefined(args.name),
    nullToUndefined(args.url),
    context.ports.clock.now()
  );
  await context.ports.clientRepo.update(newClient);
  context.ports.logger.info(
    formatter.mutation(context.ports.ipContainer, "clients", client.id)
  );
  return newClient.toAPI(some(context.ports.authContainer.getTokenMaster()));
};

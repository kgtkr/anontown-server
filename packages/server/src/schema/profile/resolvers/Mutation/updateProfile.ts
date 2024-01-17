import { nullToUndefined } from "@kgtkr/utils";
import type { MutationResolvers } from "./../../../types.generated";
import * as formatter from "../../../../formatter";
import { some } from "fp-ts/lib/Option";

export const updateProfile: NonNullable<
  MutationResolvers["updateProfile"]
> = async (_obj, args, context, _info) => {
  const profile = await context.ports.profileRepo.findOne(args.id);
  const newProfile = profile.changeData(
    context.ports.authContainer.getToken(),
    nullToUndefined(args.name),
    nullToUndefined(args.text),
    nullToUndefined(args.sn),
    context.ports.clock.now()
  );
  await context.ports.profileRepo.update(newProfile);
  context.ports.logger.info(
    formatter.mutation(context.ports.ipContainer, "profiles", newProfile.id)
  );
  return newProfile.toAPI(some(context.ports.authContainer.getToken()));
};

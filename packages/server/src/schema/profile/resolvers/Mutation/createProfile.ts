import { Profile } from "../../../../entities";
import type { MutationResolvers } from "./../../../types.generated";
import * as formatter from "../../../../formatter";
import { some } from "fp-ts/lib/Option";

export const createProfile: NonNullable<
  MutationResolvers["createProfile"]
> = async (_obj, args, context, _info) => {
  const profile = Profile.create(
    context.ports.objectIdGenerator,
    context.ports.authContainer.getToken(),
    args.name,
    args.text,
    args.sn,
    context.ports.clock.now()
  );
  await context.ports.profileRepo.insert(profile);
  context.ports.logger.info(
    formatter.mutation(context.ports.ipContainer, "profiles", profile.id)
  );
  return profile.toAPI(some(context.ports.authContainer.getToken()));
};

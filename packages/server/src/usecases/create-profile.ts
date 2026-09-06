import { some } from "fp-ts/lib/Option";
import { IProfileAPI, Profile } from "../entities";
import * as formatter from "../formatter";
import { PortPick } from "../ports";

export interface CreateProfileInput {
  name: string;
  text: string;
  sn: string;
}

export async function createProfile(
  { name, text, sn }: CreateProfileInput,
  {
    objectIdGenerator,
    authContainer,
    profileRepo,
    clock,
    logger,
    ipContainer,
  }: PortPick<
    | "objectIdGenerator"
    | "authContainer"
    | "profileRepo"
    | "clock"
    | "logger"
    | "ipContainer"
  >
): Promise<IProfileAPI> {
  const profile = Profile.create(
    objectIdGenerator,
    authContainer.getToken(),
    name,
    text,
    sn,
    clock.now()
  );
  await profileRepo.insert(profile);
  logger.info(formatter.mutation(ipContainer, "profiles", profile.id));
  return profile.toAPI(some(authContainer.getToken()));
}

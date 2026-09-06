import { nullToUndefined } from "@kgtkr/utils";
import { some } from "fp-ts/lib/Option";
import { IProfileAPI } from "../entities";
import * as formatter from "../formatter";
import { PortPick } from "../ports";

export interface UpdateProfileInput {
  id: string;
  name?: string | null;
  text?: string | null;
  sn?: string | null;
}

export async function updateProfile(
  { id, name, text, sn }: UpdateProfileInput,
  {
    profileRepo,
    authContainer,
    clock,
    logger,
    ipContainer,
  }: PortPick<
    "profileRepo" | "authContainer" | "clock" | "logger" | "ipContainer"
  >
): Promise<IProfileAPI> {
  const profile = await profileRepo.findOne(id);
  const newProfile = profile.changeData(
    authContainer.getToken(),
    nullToUndefined(name),
    nullToUndefined(text),
    nullToUndefined(sn),
    clock.now()
  );
  await profileRepo.update(newProfile);
  logger.info(formatter.mutation(ipContainer, "profiles", newProfile.id));
  return newProfile.toAPI(some(authContainer.getToken()));
}

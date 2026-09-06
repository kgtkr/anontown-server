import { IProfileAPI } from "../entities";
import { PortPick, ProfileRepoQuery } from "../ports";

export interface GetProfilesInput {
  query: ProfileRepoQuery;
}

export async function getProfiles(
  { query }: GetProfilesInput,
  { profileRepo, authContainer }: PortPick<"profileRepo" | "authContainer">
): Promise<IProfileAPI[]> {
  const profiles = await profileRepo.find(authContainer, query);
  return profiles.map((p) => p.toAPI(authContainer.getTokenOrNull()));
}

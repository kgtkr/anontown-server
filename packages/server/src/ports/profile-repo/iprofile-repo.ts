import { Profile } from "../../entities";
import { IAuthContainer } from "../auth-container/index";

export type ProfileRepoQuery = {
  id: string[] | null;
  self: boolean | null;
};

export const emptyProfileRepoQuery: ProfileRepoQuery = {
  id: null,
  self: null,
};

export interface IProfileRepo {
  findOne(id: string): Promise<Profile>;
  find(auth: IAuthContainer, query: ProfileRepoQuery): Promise<Array<Profile>>;
  insert(profile: Profile): Promise<void>;
  update(profile: Profile): Promise<void>;
}

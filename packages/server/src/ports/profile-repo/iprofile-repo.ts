import { Profile } from "../../entities";
import * as G from "../../generated/graphql";
import { IAuthContainer } from "../auth-container/index";

export type ProfileRepoQuery = {
  id?: string[];
  self?: boolean;
};
export interface IProfileRepo {
  findOne(id: string): Promise<Profile>;
  find(auth: IAuthContainer, query: ProfileRepoQuery): Promise<Array<Profile>>;
  insert(profile: Profile): Promise<void>;
  update(profile: Profile): Promise<void>;
}

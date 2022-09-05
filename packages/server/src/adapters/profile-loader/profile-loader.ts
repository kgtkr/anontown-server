import * as DataLoader from "dataloader";
import { Profile } from "../../entities/index";
import {
  emptyProfileRepoQuery,
  IAuthContainer,
  IProfileLoader,
  IProfileRepo,
} from "../../ports/index";
import { loader } from "../loader-helper";

export class ProfileLoader implements IProfileLoader {
  loader: DataLoader<string, Profile>;

  constructor(profileRepo: IProfileRepo, auth: IAuthContainer) {
    this.loader = loader((ids) =>
      profileRepo.find(auth, { ...emptyProfileRepoQuery, id: ids })
    );
  }

  load(id: string) {
    return this.loader.load(id);
  }

  loadMany(ids: Array<string>) {
    return this.loader.loadMany(ids);
  }
}

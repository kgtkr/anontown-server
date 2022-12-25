import { Client as FaktoryClient } from "faktory-worker";
import { Config } from "./config";

export const faktoryClient = new FaktoryClient({
  url: Config.faktory.url,
});

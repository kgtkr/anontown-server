import { prisma } from "../prisma-client";
import { array, option } from "fp-ts";
import { none, some, Option } from "fp-ts/lib/Option";
import { TokenRepo } from "../adapters";
import { AtAuthError } from "../at-error";
import { ITokenRepo, Ports } from "../ports";
import * as authFromApiParam from "./auth-from-api-param";
import { createPorts } from "../createPorts";

export interface AppContext {
  ports: Ports;
}

async function createToken(raw: unknown, tokenRepo: ITokenRepo) {
  if (typeof raw !== "string") {
    return none;
  }
  const arr = raw.split(",");
  const id = array.lookup(0, arr);
  const key = array.lookup(1, arr);
  if (option.isNone(id) || option.isNone(key)) {
    throw new AtAuthError("パラメーターが不正です");
  }

  return some(
    await authFromApiParam.tokenHeaderToToken(tokenRepo, {
      id: id.value,
      key: key.value,
    })
  );
}

export async function createContext({
  rawToken,
  ip,
}: {
  rawToken: unknown;
  ip: Option<string>;
}): Promise<AppContext> {
  const token = await createToken(rawToken, new TokenRepo(prisma));

  return {
    ports: createPorts({
      token,
      ip,
    }),
  };
}

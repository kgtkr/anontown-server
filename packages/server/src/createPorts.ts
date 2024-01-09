import { Ports } from "./ports";
import * as O from "fp-ts/Option";
import { IAuthToken } from "./auth";
import {
  AuthContainer,
  ClientLoader,
  ClientRepo,
  FixClock,
  HistoryLoader,
  HistoryRepo,
  Logger,
  ObjectIdGenerator,
  ProfileLoader,
  ProfileRepo,
  RecaptchaClient,
  ResLoader,
  ResRepo,
  SafeIdGenerator,
  StorageRepo,
  TokenRepo,
  TopicLoader,
  TopicRepo,
  UserRepo,
} from "./adapters";
import { prisma } from "./prisma-client";
import { FixIpContainer } from "./adapters/fix-ip-container";
import { NotificationQueueImpl } from "./adapters/NotificationQueueImpl";
import { PushSubscriptionsRepoImpl } from "./adapters/PushSubscriptionsRepoImpl";
import { NotificationSenderImpl } from "./adapters/NotificationSenderImpl";
import { faktoryClient } from "./faktoryClient";

export type PortsConfig = {
  token: O.Option<IAuthToken>;
  ip: O.Option<string>;
};

export const PortsConfig: PortsConfig = {
  token: O.none,
  ip: O.none,
};

export function createPorts(config: PortsConfig): Ports {
  const ipContainer = new FixIpContainer(config.ip);
  const logger = new Logger();
  const tokenRepo = new TokenRepo(prisma);
  const authContainer = new AuthContainer(config.token);
  const clientRepo = new ClientRepo(prisma);
  const historyRepo = new HistoryRepo(prisma);
  const profileRepo = new ProfileRepo(prisma);
  const resRepo = new ResRepo(prisma);
  const topicRepo = new TopicRepo(prisma);
  const userRepo = new UserRepo(prisma);
  const storageRepo = new StorageRepo(prisma);
  const clientLoader = new ClientLoader(clientRepo, authContainer);
  const historyLoader = new HistoryLoader(historyRepo);
  const profileLoader = new ProfileLoader(profileRepo, authContainer);
  const resLoader = new ResLoader(resRepo, authContainer);
  const topicLoader = new TopicLoader(topicRepo);
  const pushSubscriptionsRepo = new PushSubscriptionsRepoImpl(prisma);
  const notificationQueue = new NotificationQueueImpl(
    pushSubscriptionsRepo,
    faktoryClient
  );
  const notificationSender = new NotificationSenderImpl(pushSubscriptionsRepo);

  return {
    authContainer,
    ipContainer,
    clock: new FixClock(new Date()),
    logger,
    recaptcha: new RecaptchaClient(),
    safeIdGenerator: new SafeIdGenerator(),
    objectIdGenerator: new ObjectIdGenerator(),
    clientRepo,
    historyRepo,
    profileRepo,
    resRepo,
    tokenRepo,
    topicRepo,
    userRepo,
    storageRepo,
    clientLoader,
    historyLoader,
    profileLoader,
    resLoader,
    topicLoader,
    pushSubscriptionsRepo,
    notificationQueue,
    notificationSender,
  };
}

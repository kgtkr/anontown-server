import { ApolloServer, gql } from "apollo-server-koa";
import cors from "@koa/cors";
import Koa from "koa";
import * as fs from "fs/promises";
import { createServer } from "http";
import { AtError } from "../at-error";
import { Config } from "../config";
import { resolvers as appResolvers } from "../resolvers";
import { runWorker } from "../worker";
import { AppContext, createContext } from "./context";
import Router from "@koa/router";
import {
  ApolloServerPluginDrainHttpServer,
  ApolloServerPluginLandingPageGraphQLPlayground,
} from "apollo-server-core";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { WebSocketServer } from "ws";
import { useServer } from "graphql-ws/lib/use/ws";
import { prisma } from "../prisma-client";
import { faktoryClient } from "../faktoryClient";
import { RedisClient } from "../db";
import { logger } from "../logger";

export async function serverRun() {
  const typeDefs = gql(
    await fs.readFile(require.resolve("../../schema.gql"), "utf8")
  );

  const app = new Koa();
  app.use(cors());

  const router = new Router();
  const httpServer = createServer();
  const schema = makeExecutableSchema({ typeDefs, resolvers: appResolvers });
  const wsServer = new WebSocketServer({
    server: httpServer,
    path: "/",
  });
  const serverCleanup = useServer(
    {
      schema,
      context: ({ connectionParams }) => {
        return createContext({
          "x-token": connectionParams?.["token"],
        });
      },
    },
    wsServer
  );

  const server = new ApolloServer({
    schema,
    context: (params): Promise<AppContext> => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      return createContext(params.ctx.request.headers);
    },
    introspection: true,
    debug: false,
    formatError: (error) => {
      console.log(error);
      if (error.originalError instanceof AtError) {
        const atError = error.originalError;
        return {
          message: atError.data.message,
          extensions: {
            code: atError.data.code,
            data: atError.data.data,
          },
        };
      } else {
        return {
          message: "サーバー内部エラー",
        };
      }
    },
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }),
      ApolloServerPluginLandingPageGraphQLPlayground({
        tabs: [
          {
            endpoint: "/",
            query: "",
            headers: {
              "X-Token": "",
            },
          },
        ],
      }),
      {
        async serverWillStart() {
          return {
            async drainServer() {
              await serverCleanup.dispose();
            },
          };
        },
      },
    ],
  });
  await server.start();

  await runWorker();

  router.get("/ping", (ctx, _next) => (ctx.body = "OK"));
  router.get("/livez", (ctx, _next) => (ctx.body = "OK"));
  router.get("/readyz", async (ctx, _next) => {
    try {
      await prisma.$queryRaw`SELECT 1;`;
      await faktoryClient.info();
      await RedisClient().ping();
      ctx.body = "OK";
    } catch (error) {
      logger.error("readyz error", error);
      ctx.status = 500;
      ctx.body = "NG";
    }
  });
  server.applyMiddleware({ app, path: "/" });
  app.use(router.routes());
  app.use(router.allowedMethods());

  httpServer.on("request", app.callback());

  await new Promise<void>((resolve) =>
    httpServer.listen({ port: Config.server.port }, resolve)
  );
  console.log("Server ready");
}

import cors from "@koa/cors";
import Koa from "koa";
import { createServer } from "http";
import { AtError } from "../at-error";
import { Config } from "../config";
import { resolvers } from "../schema/resolvers.generated";
import { resolveTypes } from "../schema/resolveTypes";
import { typeDefs } from "../schema/typeDefs.generated";
import { startWorker } from "../worker";
import { AppContext, createContext } from "./context";
import Router from "@koa/router";
import { ApolloServer } from "@apollo/server";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { WebSocketServer } from "ws";
import { useServer } from "graphql-ws/lib/use/ws";
import { prisma } from "../prisma-client";
import { faktoryClient } from "../faktoryClient";
import { RedisClient } from "../db";
import { logger } from "../logger";
import { koaMiddleware } from "@as-integrations/koa";
import { makeExecutableSchema } from "@graphql-tools/schema";
import bodyParser from "koa-bodyparser";
import { GraphQLError } from "graphql";
import { startCron } from "../cron";

export async function serverRun() {
  const app = new Koa();
  app.use(cors());
  app.use(bodyParser());

  const router = new Router();
  const httpServer = createServer(app.callback());
  const schema = makeExecutableSchema({
    typeDefs,
    resolvers: [resolvers, resolveTypes],
  });
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
    introspection: true,
    formatError: (formattedError, error) => {
      const originalError: unknown = (error as any).originalError;
      if (originalError instanceof AtError) {
        return {
          message: originalError.data.message,
          extensions: {
            code: originalError.data.code,
            data: originalError.data.data,
          },
        };
      } else if (originalError instanceof GraphQLError) {
        return formattedError;
      } else {
        logger.error("server error", error);
        return {
          message: "サーバー内部エラー",
        };
      }
    },
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }),
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

  startCron();
  await startWorker();

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
  app.use(router.routes());
  app.use(router.allowedMethods());
  app.use(
    koaMiddleware(server, {
      context: (params): Promise<AppContext> => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        return createContext(params.ctx.request.headers);
      },
    })
  );

  await new Promise<void>((resolve) =>
    httpServer.listen({ port: Config.server.port }, resolve)
  );
  console.log("Server ready");
}

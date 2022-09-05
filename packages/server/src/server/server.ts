import { ApolloServer, gql } from "apollo-server-koa";
import cors from "@koa/cors";
import Koa from "koa";
import * as fs from "fs/promises";
import { createServer } from "http";
import { AtErrorSymbol, AtServerError } from "../at-error";
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

export async function serverRun() {
  const typeDefs = gql(
    await fs.readFile(require.resolve("../../schema.gql"), "utf8")
  );

  const app = new Koa();
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
    formatError: (error: any) => {
      console.log(error);
      if (error.extensions.exception[AtErrorSymbol]) {
        return error.extensions.exception.data;
      } else {
        return new AtServerError().data;
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

  runWorker();

  router.get("/ping", (ctx, _next) => (ctx.body = "OK"));
  server.applyMiddleware({ app, path: "/" });
  app.use(router.routes());
  app.use(router.allowedMethods());
  app.use(cors());

  httpServer.on("request", app.callback());

  await new Promise<void>((resolve) =>
    httpServer.listen({ port: Config.server.port }, resolve)
  );
  console.log("Server ready");
}

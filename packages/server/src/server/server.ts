import { ApolloServer, gql } from "apollo-server-koa";
import cors from "@koa/cors";
import Koa from "koa";
import { either } from "fp-ts";
import * as fs from "fs/promises";
import { createServer } from "http";
import * as t from "io-ts";
import { AtErrorSymbol, AtServerError } from "../at-error";
import { Config } from "../config";
import { resolvers as appResolvers } from "../resolvers";
import { runWorker } from "../worker";
import { AppContext, createContext } from "./context";
import Router from "@koa/router";
import {
  ApolloServerPluginDrainHttpServer,
  ApolloServerPluginLandingPageLocalDefault,
} from "apollo-server-core";

export async function serverRun() {
  const typeDefs = gql(
    await fs.readFile(require.resolve("../../schema.gql"), "utf8")
  );

  const app = new Koa();
  const router = new Router();
  const httpServer = createServer();

  const server = new ApolloServer({
    typeDefs,
    resolvers: appResolvers,
    context: (params: unknown): Promise<AppContext> => {
      const decodedParams = t.UnknownRecord.decode(params);
      if (either.isRight(decodedParams)) {
        const { req, connection } = decodedParams.right;
        const decodedReq = t.type({ headers: t.UnknownRecord }).decode(req);
        const decodeConnection = t
          .type({ context: t.UnknownRecord })
          .decode(connection);
        if (either.isRight(decodedReq)) {
          return createContext(decodedReq.right.headers);
        }

        if (either.isRight(decodeConnection)) {
          return createContext(decodeConnection.right.context);
        }
      }

      return createContext({});
    },
    introspection: true,
    playground: {
      tabs: [
        {
          endpoint: "/",
          query: "",
          headers: {
            "X-Token": "",
          },
        },
      ],
    },
    debug: false,
    formatError: (error: any) => {
      console.log(error);
      if (error.extensions.exception[AtErrorSymbol]) {
        return error.extensions.exception.data;
      } else {
        return new AtServerError().data;
      }
    },
    subscriptions: {
      path: "/",
    },
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }),
      ApolloServerPluginLandingPageLocalDefault({ embed: true }),
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
  server.installSubscriptionHandlers(httpServer);

  await new Promise<void>((resolve) =>
    httpServer.listen({ port: Config.server.port }, resolve)
  );
  console.log(
    `Server ready at ${server.graphqlPath}, ${
      server.subscriptionsPath ?? "<unknown subscriptionsPath>"
    }`
  );
}

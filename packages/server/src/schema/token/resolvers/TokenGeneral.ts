import type { TokenGeneralResolvers } from "./../../types.generated";
export const TokenGeneral: TokenGeneralResolvers = {
  client: async (token, _args, context, _info) => {
    const client = await context.ports.clientLoader.load(token.clientID);
    return client.toAPI(context.ports.authContainer.getTokenMasterOrNull());
  },
};

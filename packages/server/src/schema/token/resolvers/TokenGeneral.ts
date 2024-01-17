import type { TokenGeneralResolvers } from "./../../types.generated";
export const TokenGeneral: TokenGeneralResolvers = {
  client: async (token, _args, context, _info) => {
    const client = await context.ports.clientLoader.load(token.clientID);
    return client.toAPI(context.ports.authContainer.getTokenMasterOrNull());
  },
    date: () => { /* TokenGeneral.date resolver is required because TokenGeneral.date exists but TokenGeneralMapper.date does not */ },
    id: () => { /* TokenGeneral.id resolver is required because TokenGeneral.id exists but TokenGeneralMapper.id does not */ },
    key: () => { /* TokenGeneral.key resolver is required because TokenGeneral.key exists but TokenGeneralMapper.key does not */ }
};

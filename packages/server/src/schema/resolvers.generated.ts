/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from "./types.generated";
import { Client } from "./client/resolvers/Client";
import { CreateClientResponseError } from "./client/resolvers/CreateClientResponseError";
import { CreateTokenGeneralResponse } from "./token/resolvers/CreateTokenGeneralResponse";
import { CreateUserResponse } from "./user/resolvers/CreateUserResponse";
import { History } from "./history/resolvers/History";
import { authTokenReq as Mutation_authTokenReq } from "./token/resolvers/Mutation/authTokenReq";
import { createClient as Mutation_createClient } from "./client/resolvers/Mutation/createClient";
import { createProfile as Mutation_createProfile } from "./profile/resolvers/Mutation/createProfile";
import { createRes as Mutation_createRes } from "./res/resolvers/Mutation/createRes";
import { createTokenGeneral as Mutation_createTokenGeneral } from "./token/resolvers/Mutation/createTokenGeneral";
import { createTokenMaster as Mutation_createTokenMaster } from "./token/resolvers/Mutation/createTokenMaster";
import { createTokenReq as Mutation_createTokenReq } from "./token/resolvers/Mutation/createTokenReq";
import { createTopicFork as Mutation_createTopicFork } from "./topic/resolvers/Mutation/createTopicFork";
import { createTopicNormal as Mutation_createTopicNormal } from "./topic/resolvers/Mutation/createTopicNormal";
import { createTopicOne as Mutation_createTopicOne } from "./topic/resolvers/Mutation/createTopicOne";
import { createUser as Mutation_createUser } from "./user/resolvers/Mutation/createUser";
import { delRes as Mutation_delRes } from "./res/resolvers/Mutation/delRes";
import { delStorage as Mutation_delStorage } from "./storage/resolvers/Mutation/delStorage";
import { delTokenClient as Mutation_delTokenClient } from "./token/resolvers/Mutation/delTokenClient";
import { resisterPushSubscription as Mutation_resisterPushSubscription } from "./base/resolvers/Mutation/resisterPushSubscription";
import { setStorages as Mutation_setStorages } from "./storage/resolvers/Mutation/setStorages";
import { subscribeTopic as Mutation_subscribeTopic } from "./topic/resolvers/Mutation/subscribeTopic";
import { unsubscribeTopic as Mutation_unsubscribeTopic } from "./topic/resolvers/Mutation/unsubscribeTopic";
import { updateClient as Mutation_updateClient } from "./client/resolvers/Mutation/updateClient";
import { updateProfile as Mutation_updateProfile } from "./profile/resolvers/Mutation/updateProfile";
import { updateTopic as Mutation_updateTopic } from "./topic/resolvers/Mutation/updateTopic";
import { updateUser as Mutation_updateUser } from "./user/resolvers/Mutation/updateUser";
import { voteRes as Mutation_voteRes } from "./res/resolvers/Mutation/voteRes";
import { Profile } from "./profile/resolvers/Profile";
import { clients as Query_clients } from "./client/resolvers/Query/clients";
import { histories as Query_histories } from "./history/resolvers/Query/histories";
import { profiles as Query_profiles } from "./profile/resolvers/Query/profiles";
import { query as Query_query } from "./base/resolvers/Query/query";
import { reses as Query_reses } from "./res/resolvers/Query/reses";
import { storages as Query_storages } from "./storage/resolvers/Query/storages";
import { token as Query_token } from "./token/resolvers/Query/token";
import { tokens as Query_tokens } from "./token/resolvers/Query/tokens";
import { topicTags as Query_topicTags } from "./topic/resolvers/Query/topicTags";
import { topics as Query_topics } from "./topic/resolvers/Query/topics";
import { user as Query_user } from "./user/resolvers/Query/user";
import { userID as Query_userID } from "./user/resolvers/Query/userID";
import { userSN as Query_userSN } from "./user/resolvers/Query/userSN";
import { ResDelete } from "./res/resolvers/ResDelete";
import { ResFork } from "./res/resolvers/ResFork";
import { ResHistory } from "./res/resolvers/ResHistory";
import { ResNormal } from "./res/resolvers/ResNormal";
import { ResSubscript } from "./res/resolvers/ResSubscript";
import { ResTopic } from "./res/resolvers/ResTopic";
import { SetStoragesPayload } from "./storage/resolvers/SetStoragesPayload";
import { Storage } from "./storage/resolvers/Storage";
import { resAdded as Subscription_resAdded } from "./res/resolvers/Subscription/resAdded";
import { Tags } from "./topic/resolvers/Tags";
import { TokenGeneral } from "./token/resolvers/TokenGeneral";
import { TokenMaster } from "./token/resolvers/TokenMaster";
import { TokenReq } from "./token/resolvers/TokenReq";
import { TopicFork } from "./topic/resolvers/TopicFork";
import { TopicNormal } from "./topic/resolvers/TopicNormal";
import { TopicOne } from "./topic/resolvers/TopicOne";
import { UpdateUserResponse } from "./user/resolvers/UpdateUserResponse";
import { User } from "./user/resolvers/User";
import { ValidateData } from "./base/resolvers/ValidateData";
import { DateTimeResolver } from "graphql-scalars";
export const resolvers: Resolvers = {
  Query: {
    clients: Query_clients,
    histories: Query_histories,
    profiles: Query_profiles,
    query: Query_query,
    reses: Query_reses,
    storages: Query_storages,
    token: Query_token,
    tokens: Query_tokens,
    topicTags: Query_topicTags,
    topics: Query_topics,
    user: Query_user,
    userID: Query_userID,
    userSN: Query_userSN,
  },
  Mutation: {
    authTokenReq: Mutation_authTokenReq,
    createClient: Mutation_createClient,
    createProfile: Mutation_createProfile,
    createRes: Mutation_createRes,
    createTokenGeneral: Mutation_createTokenGeneral,
    createTokenMaster: Mutation_createTokenMaster,
    createTokenReq: Mutation_createTokenReq,
    createTopicFork: Mutation_createTopicFork,
    createTopicNormal: Mutation_createTopicNormal,
    createTopicOne: Mutation_createTopicOne,
    createUser: Mutation_createUser,
    delRes: Mutation_delRes,
    delStorage: Mutation_delStorage,
    delTokenClient: Mutation_delTokenClient,
    resisterPushSubscription: Mutation_resisterPushSubscription,
    setStorages: Mutation_setStorages,
    subscribeTopic: Mutation_subscribeTopic,
    unsubscribeTopic: Mutation_unsubscribeTopic,
    updateClient: Mutation_updateClient,
    updateProfile: Mutation_updateProfile,
    updateTopic: Mutation_updateTopic,
    updateUser: Mutation_updateUser,
    voteRes: Mutation_voteRes,
  },
  Subscription: { resAdded: Subscription_resAdded },
  Client: Client,
  CreateClientResponseError: CreateClientResponseError,
  CreateTokenGeneralResponse: CreateTokenGeneralResponse,
  CreateUserResponse: CreateUserResponse,
  History: History,
  Profile: Profile,
  ResDelete: ResDelete,
  ResFork: ResFork,
  ResHistory: ResHistory,
  ResNormal: ResNormal,
  ResSubscript: ResSubscript,
  ResTopic: ResTopic,
  SetStoragesPayload: SetStoragesPayload,
  Storage: Storage,
  Tags: Tags,
  TokenGeneral: TokenGeneral,
  TokenMaster: TokenMaster,
  TokenReq: TokenReq,
  TopicFork: TopicFork,
  TopicNormal: TopicNormal,
  TopicOne: TopicOne,
  UpdateUserResponse: UpdateUserResponse,
  User: User,
  ValidateData: ValidateData,
  DateTime: DateTimeResolver,
};

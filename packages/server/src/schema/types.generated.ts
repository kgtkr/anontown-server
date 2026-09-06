import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig,
} from "graphql";
import { ClientMapper } from "./client/schema.mappers";
import {
  CreateTokenGeneralResponseMapper,
  TokenGeneralMapper,
  TokenMasterMapper,
  TokenReqMapper,
} from "./token/schema.mappers";
import { HistoryMapper } from "./history/schema.mappers";
import {
  ResDeleteMapper,
  ResForkMapper,
  ResHistoryMapper,
  ResNormalMapper,
  ResSubscriptMapper,
  ResTopicMapper,
} from "./res/schema.mappers";
import { StorageMapper } from "./storage/schema.mappers";
import {
  TagsMapper,
  TopicForkMapper,
  TopicNormalMapper,
  TopicOneMapper,
} from "./topic/schema.mappers";
import { UserMapper } from "./user/schema.mappers";
import { AppContext } from "../server";
export type Maybe<T> = T | null | undefined;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: NonNullable<T[P]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string | number };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  DateTime: { input: Date | string; output: Date | string };
};

export type AuthUser = {
  id?: InputMaybe<Scalars["String"]["input"]>;
  pass: Scalars["String"]["input"];
  sn?: InputMaybe<Scalars["String"]["input"]>;
};

export type CharType =
  | "d"
  | "han"
  | "hira"
  | "hy"
  | "kana"
  | "lc"
  | "ub"
  | "uc";

export type Client = {
  __typename?: "Client";
  date: Scalars["DateTime"]["output"];
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
  self?: Maybe<Scalars["Boolean"]["output"]>;
  update: Scalars["DateTime"]["output"];
  url: Scalars["String"]["output"];
};

export type ClientQuery = {
  id?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  self?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type CreateClientResponse = Client | CreateClientResponseError;

export type CreateClientResponseError = {
  __typename?: "CreateClientResponseError";
  name: ValidateData;
  url: Scalars["Boolean"]["output"];
};

export type CreateTokenGeneralResponse = {
  __typename?: "CreateTokenGeneralResponse";
  req: TokenReq;
  token: TokenGeneral;
};

export type CreateUserResponse = {
  __typename?: "CreateUserResponse";
  token: TokenMaster;
  user: User;
};

export type DateQuery = {
  date: Scalars["DateTime"]["input"];
  type: DateType;
};

export type DateType = "gt" | "gte" | "lt" | "lte";

export type History = {
  __typename?: "History";
  date: Scalars["DateTime"]["output"];
  hash: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  self?: Maybe<Scalars["Boolean"]["output"]>;
  tags: Array<Scalars["String"]["output"]>;
  text: Scalars["String"]["output"];
  title: Scalars["String"]["output"];
  topic: TopicNormal;
};

export type HistoryQuery = {
  date?: InputMaybe<DateQuery>;
  id?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  topic?: InputMaybe<Array<Scalars["ID"]["input"]>>;
};

export type Mutation = {
  __typename?: "Mutation";
  authTokenReq: TokenGeneral;
  createClient: Client;
  createProfile: Profile;
  createRes: ResNormal;
  createTokenGeneral: CreateTokenGeneralResponse;
  createTokenMaster: TokenMaster;
  createTokenReq: TokenReq;
  createTopicFork: TopicFork;
  createTopicNormal: TopicNormal;
  createTopicOne: TopicOne;
  createUser: CreateUserResponse;
  delRes: ResDelete;
  delStorage?: Maybe<Scalars["Boolean"]["output"]>;
  delTokenClient?: Maybe<Scalars["Boolean"]["output"]>;
  resisterPushSubscription?: Maybe<Scalars["Boolean"]["output"]>;
  setStorages: SetStoragesPayload;
  subscribeTopic?: Maybe<Scalars["Boolean"]["output"]>;
  unsubscribeTopic?: Maybe<Scalars["Boolean"]["output"]>;
  updateClient: Client;
  updateProfile: Profile;
  updateTopic: TopicNormal;
  updateUser: UpdateUserResponse;
  voteRes: Res;
};

export type MutationauthTokenReqArgs = {
  id: Scalars["ID"]["input"];
  key: Scalars["String"]["input"];
};

export type MutationcreateClientArgs = {
  name: Scalars["String"]["input"];
  url: Scalars["String"]["input"];
};

export type MutationcreateProfileArgs = {
  name: Scalars["String"]["input"];
  sn: Scalars["String"]["input"];
  text: Scalars["String"]["input"];
};

export type MutationcreateResArgs = {
  age: Scalars["Boolean"]["input"];
  name?: InputMaybe<Scalars["String"]["input"]>;
  profile?: InputMaybe<Scalars["String"]["input"]>;
  reply?: InputMaybe<Scalars["String"]["input"]>;
  text: Scalars["String"]["input"];
  topic: Scalars["String"]["input"];
};

export type MutationcreateTokenGeneralArgs = {
  client: Scalars["ID"]["input"];
};

export type MutationcreateTokenMasterArgs = {
  auth: AuthUser;
};

export type MutationcreateTopicForkArgs = {
  parent: Scalars["ID"]["input"];
  title: Scalars["String"]["input"];
};

export type MutationcreateTopicNormalArgs = {
  tags: Array<Scalars["String"]["input"]>;
  text: Scalars["String"]["input"];
  title: Scalars["String"]["input"];
};

export type MutationcreateTopicOneArgs = {
  tags: Array<Scalars["String"]["input"]>;
  text: Scalars["String"]["input"];
  title: Scalars["String"]["input"];
};

export type MutationcreateUserArgs = {
  pass: Scalars["String"]["input"];
  recaptcha: Scalars["String"]["input"];
  sn: Scalars["String"]["input"];
};

export type MutationdelResArgs = {
  res: Scalars["ID"]["input"];
};

export type MutationdelStorageArgs = {
  key: Scalars["String"]["input"];
};

export type MutationdelTokenClientArgs = {
  client: Scalars["ID"]["input"];
};

export type MutationresisterPushSubscriptionArgs = {
  auth: Scalars["String"]["input"];
  endpoint: Scalars["String"]["input"];
  p256dh: Scalars["String"]["input"];
};

export type MutationsetStoragesArgs = {
  input: SetStoragesInput;
};

export type MutationsubscribeTopicArgs = {
  topic: Scalars["ID"]["input"];
};

export type MutationunsubscribeTopicArgs = {
  topic: Scalars["ID"]["input"];
};

export type MutationupdateClientArgs = {
  id: Scalars["ID"]["input"];
  name?: InputMaybe<Scalars["String"]["input"]>;
  url?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationupdateProfileArgs = {
  id: Scalars["ID"]["input"];
  name?: InputMaybe<Scalars["String"]["input"]>;
  sn?: InputMaybe<Scalars["String"]["input"]>;
  text?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationupdateTopicArgs = {
  id: Scalars["ID"]["input"];
  tags?: InputMaybe<Array<Scalars["String"]["input"]>>;
  text?: InputMaybe<Scalars["String"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationupdateUserArgs = {
  auth: AuthUser;
  pass?: InputMaybe<Scalars["String"]["input"]>;
  sn?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationvoteResArgs = {
  res: Scalars["ID"]["input"];
  type: VoteType;
};

export type Profile = {
  __typename?: "Profile";
  date: Scalars["DateTime"]["output"];
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
  self?: Maybe<Scalars["Boolean"]["output"]>;
  sn: Scalars["String"]["output"];
  text: Scalars["String"]["output"];
  update: Scalars["DateTime"]["output"];
};

export type ProfileQuery = {
  id?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  self?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type Query = {
  __typename?: "Query";
  clients: Array<Client>;
  histories: Array<History>;
  profiles: Array<Profile>;
  query: Query;
  reses: Array<Res>;
  storages: Array<Storage>;
  token: Token;
  tokens: Array<Token>;
  topicTags: Array<Tags>;
  topics: Array<Topic>;
  user: User;
  userID: Scalars["ID"]["output"];
  userSN: Scalars["String"]["output"];
};

export type QueryclientsArgs = {
  query: ClientQuery;
};

export type QueryhistoriesArgs = {
  limit?: Scalars["Int"]["input"];
  query: HistoryQuery;
};

export type QueryprofilesArgs = {
  query: ProfileQuery;
};

export type QueryresesArgs = {
  limit?: Scalars["Int"]["input"];
  query: ResQuery;
};

export type QuerystoragesArgs = {
  query: StorageQuery;
};

export type QuerytopicTagsArgs = {
  limit?: Scalars["Int"]["input"];
};

export type QuerytopicsArgs = {
  limit?: Scalars["Int"]["input"];
  query: TopicQuery;
  skip?: Scalars["Int"]["input"];
};

export type QueryuserIDArgs = {
  sn: Scalars["String"]["input"];
};

export type QueryuserSNArgs = {
  id: Scalars["ID"]["input"];
};

export type Res = {
  date: Scalars["DateTime"]["output"];
  dv: Scalars["Int"]["output"];
  hash: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  replyCount: Scalars["Int"]["output"];
  self?: Maybe<Scalars["Boolean"]["output"]>;
  topic: Topic;
  uv: Scalars["Int"]["output"];
  voteFlag?: Maybe<VoteFlag>;
};

export type ResDelete = Res & {
  __typename?: "ResDelete";
  date: Scalars["DateTime"]["output"];
  dv: Scalars["Int"]["output"];
  flag: ResDeleteFlag;
  hash: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  replyCount: Scalars["Int"]["output"];
  self?: Maybe<Scalars["Boolean"]["output"]>;
  topic: Topic;
  uv: Scalars["Int"]["output"];
  voteFlag?: Maybe<VoteFlag>;
};

export type ResDeleteFlag = "freeze" | "self";

export type ResFork = Res & {
  __typename?: "ResFork";
  date: Scalars["DateTime"]["output"];
  dv: Scalars["Int"]["output"];
  fork: TopicFork;
  hash: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  replyCount: Scalars["Int"]["output"];
  self?: Maybe<Scalars["Boolean"]["output"]>;
  topic: Topic;
  uv: Scalars["Int"]["output"];
  voteFlag?: Maybe<VoteFlag>;
};

export type ResHistory = Res & {
  __typename?: "ResHistory";
  date: Scalars["DateTime"]["output"];
  dv: Scalars["Int"]["output"];
  hash: Scalars["String"]["output"];
  history: History;
  id: Scalars["ID"]["output"];
  replyCount: Scalars["Int"]["output"];
  self?: Maybe<Scalars["Boolean"]["output"]>;
  topic: Topic;
  uv: Scalars["Int"]["output"];
  voteFlag?: Maybe<VoteFlag>;
};

export type ResNormal = Res & {
  __typename?: "ResNormal";
  date: Scalars["DateTime"]["output"];
  dv: Scalars["Int"]["output"];
  hash: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  isReply?: Maybe<Scalars["Boolean"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  profile?: Maybe<Profile>;
  reply?: Maybe<Res>;
  replyCount: Scalars["Int"]["output"];
  self?: Maybe<Scalars["Boolean"]["output"]>;
  text: Scalars["String"]["output"];
  topic: Topic;
  uv: Scalars["Int"]["output"];
  voteFlag?: Maybe<VoteFlag>;
};

export type ResQuery = {
  date?: InputMaybe<DateQuery>;
  hash?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  notice?: InputMaybe<Scalars["Boolean"]["input"]>;
  profile?: InputMaybe<Scalars["ID"]["input"]>;
  reply?: InputMaybe<Scalars["ID"]["input"]>;
  self?: InputMaybe<Scalars["Boolean"]["input"]>;
  text?: InputMaybe<Scalars["String"]["input"]>;
  topic?: InputMaybe<Scalars["ID"]["input"]>;
};

export type ResSubscript = {
  __typename?: "ResSubscript";
  count: Scalars["Int"]["output"];
  res: Res;
};

export type ResTopic = Res & {
  __typename?: "ResTopic";
  date: Scalars["DateTime"]["output"];
  dv: Scalars["Int"]["output"];
  hash: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  replyCount: Scalars["Int"]["output"];
  self?: Maybe<Scalars["Boolean"]["output"]>;
  topic: Topic;
  uv: Scalars["Int"]["output"];
  voteFlag?: Maybe<VoteFlag>;
};

export type SetStoragesInput = {
  storages: Array<StorageInput>;
};

export type SetStoragesPayload = {
  __typename?: "SetStoragesPayload";
  storages: Array<Storage>;
};

export type Storage = {
  __typename?: "Storage";
  key: Scalars["String"]["output"];
  value: Scalars["String"]["output"];
};

export type StorageInput = {
  key: Scalars["String"]["input"];
  value: Scalars["String"]["input"];
};

export type StorageQuery = {
  key?: InputMaybe<Array<Scalars["String"]["input"]>>;
  keyPrefix?: InputMaybe<Scalars["String"]["input"]>;
};

export type Subscription = {
  __typename?: "Subscription";
  resAdded: ResSubscript;
};

export type SubscriptionresAddedArgs = {
  topic: Scalars["ID"]["input"];
};

export type Tags = {
  __typename?: "Tags";
  count: Scalars["Int"]["output"];
  name: Scalars["String"]["output"];
};

export type Token = {
  date: Scalars["DateTime"]["output"];
  id: Scalars["ID"]["output"];
  key: Scalars["String"]["output"];
};

export type TokenGeneral = Token & {
  __typename?: "TokenGeneral";
  client: Client;
  date: Scalars["DateTime"]["output"];
  id: Scalars["ID"]["output"];
  key: Scalars["String"]["output"];
};

export type TokenMaster = Token & {
  __typename?: "TokenMaster";
  date: Scalars["DateTime"]["output"];
  id: Scalars["ID"]["output"];
  key: Scalars["String"]["output"];
};

export type TokenReq = {
  __typename?: "TokenReq";
  key: Scalars["String"]["output"];
  token: Scalars["ID"]["output"];
};

export type Topic = {
  active: Scalars["Boolean"]["output"];
  date: Scalars["DateTime"]["output"];
  id: Scalars["ID"]["output"];
  resCount: Scalars["Int"]["output"];
  subscribe?: Maybe<Scalars["Boolean"]["output"]>;
  title: Scalars["String"]["output"];
  update: Scalars["DateTime"]["output"];
};

export type TopicFork = Topic & {
  __typename?: "TopicFork";
  active: Scalars["Boolean"]["output"];
  date: Scalars["DateTime"]["output"];
  id: Scalars["ID"]["output"];
  parent: TopicNormal;
  resCount: Scalars["Int"]["output"];
  subscribe?: Maybe<Scalars["Boolean"]["output"]>;
  title: Scalars["String"]["output"];
  update: Scalars["DateTime"]["output"];
};

export type TopicNormal = Topic &
  TopicSearch & {
    __typename?: "TopicNormal";
    active: Scalars["Boolean"]["output"];
    date: Scalars["DateTime"]["output"];
    id: Scalars["ID"]["output"];
    resCount: Scalars["Int"]["output"];
    subscribe?: Maybe<Scalars["Boolean"]["output"]>;
    tags: Array<Scalars["String"]["output"]>;
    text: Scalars["String"]["output"];
    title: Scalars["String"]["output"];
    update: Scalars["DateTime"]["output"];
  };

export type TopicOne = Topic &
  TopicSearch & {
    __typename?: "TopicOne";
    active: Scalars["Boolean"]["output"];
    date: Scalars["DateTime"]["output"];
    id: Scalars["ID"]["output"];
    resCount: Scalars["Int"]["output"];
    subscribe?: Maybe<Scalars["Boolean"]["output"]>;
    tags: Array<Scalars["String"]["output"]>;
    text: Scalars["String"]["output"];
    title: Scalars["String"]["output"];
    update: Scalars["DateTime"]["output"];
  };

export type TopicQuery = {
  activeOnly?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  parent?: InputMaybe<Scalars["ID"]["input"]>;
  tags?: InputMaybe<Array<Scalars["String"]["input"]>>;
  title?: InputMaybe<Scalars["String"]["input"]>;
};

export type TopicSearch = {
  active: Scalars["Boolean"]["output"];
  date: Scalars["DateTime"]["output"];
  id: Scalars["ID"]["output"];
  resCount: Scalars["Int"]["output"];
  subscribe?: Maybe<Scalars["Boolean"]["output"]>;
  tags: Array<Scalars["String"]["output"]>;
  text: Scalars["String"]["output"];
  title: Scalars["String"]["output"];
  update: Scalars["DateTime"]["output"];
};

export type UpdateUserResponse = {
  __typename?: "UpdateUserResponse";
  token: TokenMaster;
  user: User;
};

export type User = {
  __typename?: "User";
  id: Scalars["ID"]["output"];
  sn: Scalars["String"]["output"];
};

export type ValidateData = {
  __typename?: "ValidateData";
  char?: Maybe<Array<Maybe<CharType>>>;
  max?: Maybe<Scalars["Int"]["output"]>;
  min?: Maybe<Scalars["Int"]["output"]>;
};

export type VoteFlag = "dv" | "not" | "uv";

export type VoteType = "cv" | "dv" | "uv";

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping of union types */
export type ResolversUnionTypes<RefType extends Record<string, unknown>> = {
  CreateClientResponse: ClientMapper | CreateClientResponseError;
};

/** Mapping of interface types */
export type ResolversInterfaceTypes<RefType extends Record<string, unknown>> = {
  Res:
    | ResDeleteMapper
    | ResForkMapper
    | ResHistoryMapper
    | ResNormalMapper
    | ResTopicMapper;
  Token: TokenGeneralMapper | TokenMasterMapper;
  Topic: TopicForkMapper | TopicNormalMapper | TopicOneMapper;
  TopicSearch: TopicNormalMapper | TopicOneMapper;
};

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AuthUser: AuthUser;
  String: ResolverTypeWrapper<Scalars["String"]["output"]>;
  CharType: CharType;
  Client: ResolverTypeWrapper<ClientMapper>;
  ID: ResolverTypeWrapper<Scalars["ID"]["output"]>;
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]["output"]>;
  ClientQuery: ClientQuery;
  CreateClientResponse: ResolverTypeWrapper<
    ResolversUnionTypes<ResolversTypes>["CreateClientResponse"]
  >;
  CreateClientResponseError: ResolverTypeWrapper<CreateClientResponseError>;
  CreateTokenGeneralResponse: ResolverTypeWrapper<CreateTokenGeneralResponseMapper>;
  CreateUserResponse: ResolverTypeWrapper<
    Omit<CreateUserResponse, "token" | "user"> & {
      token: ResolversTypes["TokenMaster"];
      user: ResolversTypes["User"];
    }
  >;
  DateQuery: DateQuery;
  DateTime: ResolverTypeWrapper<Scalars["DateTime"]["output"]>;
  DateType: DateType;
  History: ResolverTypeWrapper<HistoryMapper>;
  HistoryQuery: HistoryQuery;
  Mutation: ResolverTypeWrapper<{}>;
  Profile: ResolverTypeWrapper<Profile>;
  ProfileQuery: ProfileQuery;
  Query: ResolverTypeWrapper<{}>;
  Int: ResolverTypeWrapper<Scalars["Int"]["output"]>;
  Res: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>["Res"]>;
  ResDelete: ResolverTypeWrapper<ResDeleteMapper>;
  ResDeleteFlag: ResDeleteFlag;
  ResFork: ResolverTypeWrapper<ResForkMapper>;
  ResHistory: ResolverTypeWrapper<ResHistoryMapper>;
  ResNormal: ResolverTypeWrapper<ResNormalMapper>;
  ResQuery: ResQuery;
  ResSubscript: ResolverTypeWrapper<ResSubscriptMapper>;
  ResTopic: ResolverTypeWrapper<ResTopicMapper>;
  SetStoragesInput: SetStoragesInput;
  SetStoragesPayload: ResolverTypeWrapper<
    Omit<SetStoragesPayload, "storages"> & {
      storages: Array<ResolversTypes["Storage"]>;
    }
  >;
  Storage: ResolverTypeWrapper<StorageMapper>;
  StorageInput: StorageInput;
  StorageQuery: StorageQuery;
  Subscription: ResolverTypeWrapper<{}>;
  Tags: ResolverTypeWrapper<TagsMapper>;
  Token: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>["Token"]>;
  TokenGeneral: ResolverTypeWrapper<TokenGeneralMapper>;
  TokenMaster: ResolverTypeWrapper<TokenMasterMapper>;
  TokenReq: ResolverTypeWrapper<TokenReqMapper>;
  Topic: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>["Topic"]>;
  TopicFork: ResolverTypeWrapper<TopicForkMapper>;
  TopicNormal: ResolverTypeWrapper<TopicNormalMapper>;
  TopicOne: ResolverTypeWrapper<TopicOneMapper>;
  TopicQuery: TopicQuery;
  TopicSearch: ResolverTypeWrapper<
    ResolversInterfaceTypes<ResolversTypes>["TopicSearch"]
  >;
  UpdateUserResponse: ResolverTypeWrapper<
    Omit<UpdateUserResponse, "token" | "user"> & {
      token: ResolversTypes["TokenMaster"];
      user: ResolversTypes["User"];
    }
  >;
  User: ResolverTypeWrapper<UserMapper>;
  ValidateData: ResolverTypeWrapper<ValidateData>;
  VoteFlag: VoteFlag;
  VoteType: VoteType;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AuthUser: AuthUser;
  String: Scalars["String"]["output"];
  Client: ClientMapper;
  ID: Scalars["ID"]["output"];
  Boolean: Scalars["Boolean"]["output"];
  ClientQuery: ClientQuery;
  CreateClientResponse: ResolversUnionTypes<ResolversParentTypes>["CreateClientResponse"];
  CreateClientResponseError: CreateClientResponseError;
  CreateTokenGeneralResponse: CreateTokenGeneralResponseMapper;
  CreateUserResponse: Omit<CreateUserResponse, "token" | "user"> & {
    token: ResolversParentTypes["TokenMaster"];
    user: ResolversParentTypes["User"];
  };
  DateQuery: DateQuery;
  DateTime: Scalars["DateTime"]["output"];
  History: HistoryMapper;
  HistoryQuery: HistoryQuery;
  Mutation: {};
  Profile: Profile;
  ProfileQuery: ProfileQuery;
  Query: {};
  Int: Scalars["Int"]["output"];
  Res: ResolversInterfaceTypes<ResolversParentTypes>["Res"];
  ResDelete: ResDeleteMapper;
  ResFork: ResForkMapper;
  ResHistory: ResHistoryMapper;
  ResNormal: ResNormalMapper;
  ResQuery: ResQuery;
  ResSubscript: ResSubscriptMapper;
  ResTopic: ResTopicMapper;
  SetStoragesInput: SetStoragesInput;
  SetStoragesPayload: Omit<SetStoragesPayload, "storages"> & {
    storages: Array<ResolversParentTypes["Storage"]>;
  };
  Storage: StorageMapper;
  StorageInput: StorageInput;
  StorageQuery: StorageQuery;
  Subscription: {};
  Tags: TagsMapper;
  Token: ResolversInterfaceTypes<ResolversParentTypes>["Token"];
  TokenGeneral: TokenGeneralMapper;
  TokenMaster: TokenMasterMapper;
  TokenReq: TokenReqMapper;
  Topic: ResolversInterfaceTypes<ResolversParentTypes>["Topic"];
  TopicFork: TopicForkMapper;
  TopicNormal: TopicNormalMapper;
  TopicOne: TopicOneMapper;
  TopicQuery: TopicQuery;
  TopicSearch: ResolversInterfaceTypes<ResolversParentTypes>["TopicSearch"];
  UpdateUserResponse: Omit<UpdateUserResponse, "token" | "user"> & {
    token: ResolversParentTypes["TokenMaster"];
    user: ResolversParentTypes["User"];
  };
  User: UserMapper;
  ValidateData: ValidateData;
};

export type ClientResolvers<
  ContextType = AppContext,
  ParentType extends ResolversParentTypes["Client"] = ResolversParentTypes["Client"]
> = {
  date?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  self?: Resolver<Maybe<ResolversTypes["Boolean"]>, ParentType, ContextType>;
  update?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  url?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateClientResponseResolvers<
  ContextType = AppContext,
  ParentType extends ResolversParentTypes["CreateClientResponse"] = ResolversParentTypes["CreateClientResponse"]
> = {
  __resolveType: TypeResolveFn<
    "Client" | "CreateClientResponseError",
    ParentType,
    ContextType
  >;
};

export type CreateClientResponseErrorResolvers<
  ContextType = AppContext,
  ParentType extends ResolversParentTypes["CreateClientResponseError"] = ResolversParentTypes["CreateClientResponseError"]
> = {
  name?: Resolver<ResolversTypes["ValidateData"], ParentType, ContextType>;
  url?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateTokenGeneralResponseResolvers<
  ContextType = AppContext,
  ParentType extends ResolversParentTypes["CreateTokenGeneralResponse"] = ResolversParentTypes["CreateTokenGeneralResponse"]
> = {
  req?: Resolver<ResolversTypes["TokenReq"], ParentType, ContextType>;
  token?: Resolver<ResolversTypes["TokenGeneral"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateUserResponseResolvers<
  ContextType = AppContext,
  ParentType extends ResolversParentTypes["CreateUserResponse"] = ResolversParentTypes["CreateUserResponse"]
> = {
  token?: Resolver<ResolversTypes["TokenMaster"], ParentType, ContextType>;
  user?: Resolver<ResolversTypes["User"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateTimeScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["DateTime"], any> {
  name: "DateTime";
}

export type HistoryResolvers<
  ContextType = AppContext,
  ParentType extends ResolversParentTypes["History"] = ResolversParentTypes["History"]
> = {
  date?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  hash?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  self?: Resolver<Maybe<ResolversTypes["Boolean"]>, ParentType, ContextType>;
  tags?: Resolver<Array<ResolversTypes["String"]>, ParentType, ContextType>;
  text?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  title?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  topic?: Resolver<ResolversTypes["TopicNormal"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<
  ContextType = AppContext,
  ParentType extends ResolversParentTypes["Mutation"] = ResolversParentTypes["Mutation"]
> = {
  authTokenReq?: Resolver<
    ResolversTypes["TokenGeneral"],
    ParentType,
    ContextType,
    RequireFields<MutationauthTokenReqArgs, "id" | "key">
  >;
  createClient?: Resolver<
    ResolversTypes["Client"],
    ParentType,
    ContextType,
    RequireFields<MutationcreateClientArgs, "name" | "url">
  >;
  createProfile?: Resolver<
    ResolversTypes["Profile"],
    ParentType,
    ContextType,
    RequireFields<MutationcreateProfileArgs, "name" | "sn" | "text">
  >;
  createRes?: Resolver<
    ResolversTypes["ResNormal"],
    ParentType,
    ContextType,
    RequireFields<MutationcreateResArgs, "age" | "text" | "topic">
  >;
  createTokenGeneral?: Resolver<
    ResolversTypes["CreateTokenGeneralResponse"],
    ParentType,
    ContextType,
    RequireFields<MutationcreateTokenGeneralArgs, "client">
  >;
  createTokenMaster?: Resolver<
    ResolversTypes["TokenMaster"],
    ParentType,
    ContextType,
    RequireFields<MutationcreateTokenMasterArgs, "auth">
  >;
  createTokenReq?: Resolver<
    ResolversTypes["TokenReq"],
    ParentType,
    ContextType
  >;
  createTopicFork?: Resolver<
    ResolversTypes["TopicFork"],
    ParentType,
    ContextType,
    RequireFields<MutationcreateTopicForkArgs, "parent" | "title">
  >;
  createTopicNormal?: Resolver<
    ResolversTypes["TopicNormal"],
    ParentType,
    ContextType,
    RequireFields<MutationcreateTopicNormalArgs, "tags" | "text" | "title">
  >;
  createTopicOne?: Resolver<
    ResolversTypes["TopicOne"],
    ParentType,
    ContextType,
    RequireFields<MutationcreateTopicOneArgs, "tags" | "text" | "title">
  >;
  createUser?: Resolver<
    ResolversTypes["CreateUserResponse"],
    ParentType,
    ContextType,
    RequireFields<MutationcreateUserArgs, "pass" | "recaptcha" | "sn">
  >;
  delRes?: Resolver<
    ResolversTypes["ResDelete"],
    ParentType,
    ContextType,
    RequireFields<MutationdelResArgs, "res">
  >;
  delStorage?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType,
    RequireFields<MutationdelStorageArgs, "key">
  >;
  delTokenClient?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType,
    RequireFields<MutationdelTokenClientArgs, "client">
  >;
  resisterPushSubscription?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType,
    RequireFields<
      MutationresisterPushSubscriptionArgs,
      "auth" | "endpoint" | "p256dh"
    >
  >;
  setStorages?: Resolver<
    ResolversTypes["SetStoragesPayload"],
    ParentType,
    ContextType,
    RequireFields<MutationsetStoragesArgs, "input">
  >;
  subscribeTopic?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType,
    RequireFields<MutationsubscribeTopicArgs, "topic">
  >;
  unsubscribeTopic?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType,
    RequireFields<MutationunsubscribeTopicArgs, "topic">
  >;
  updateClient?: Resolver<
    ResolversTypes["Client"],
    ParentType,
    ContextType,
    RequireFields<MutationupdateClientArgs, "id">
  >;
  updateProfile?: Resolver<
    ResolversTypes["Profile"],
    ParentType,
    ContextType,
    RequireFields<MutationupdateProfileArgs, "id">
  >;
  updateTopic?: Resolver<
    ResolversTypes["TopicNormal"],
    ParentType,
    ContextType,
    RequireFields<MutationupdateTopicArgs, "id">
  >;
  updateUser?: Resolver<
    ResolversTypes["UpdateUserResponse"],
    ParentType,
    ContextType,
    RequireFields<MutationupdateUserArgs, "auth">
  >;
  voteRes?: Resolver<
    ResolversTypes["Res"],
    ParentType,
    ContextType,
    RequireFields<MutationvoteResArgs, "res" | "type">
  >;
};

export type ProfileResolvers<
  ContextType = AppContext,
  ParentType extends ResolversParentTypes["Profile"] = ResolversParentTypes["Profile"]
> = {
  date?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  self?: Resolver<Maybe<ResolversTypes["Boolean"]>, ParentType, ContextType>;
  sn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  text?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  update?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<
  ContextType = AppContext,
  ParentType extends ResolversParentTypes["Query"] = ResolversParentTypes["Query"]
> = {
  clients?: Resolver<
    Array<ResolversTypes["Client"]>,
    ParentType,
    ContextType,
    RequireFields<QueryclientsArgs, "query">
  >;
  histories?: Resolver<
    Array<ResolversTypes["History"]>,
    ParentType,
    ContextType,
    RequireFields<QueryhistoriesArgs, "limit" | "query">
  >;
  profiles?: Resolver<
    Array<ResolversTypes["Profile"]>,
    ParentType,
    ContextType,
    RequireFields<QueryprofilesArgs, "query">
  >;
  query?: Resolver<ResolversTypes["Query"], ParentType, ContextType>;
  reses?: Resolver<
    Array<ResolversTypes["Res"]>,
    ParentType,
    ContextType,
    RequireFields<QueryresesArgs, "limit" | "query">
  >;
  storages?: Resolver<
    Array<ResolversTypes["Storage"]>,
    ParentType,
    ContextType,
    RequireFields<QuerystoragesArgs, "query">
  >;
  token?: Resolver<ResolversTypes["Token"], ParentType, ContextType>;
  tokens?: Resolver<Array<ResolversTypes["Token"]>, ParentType, ContextType>;
  topicTags?: Resolver<
    Array<ResolversTypes["Tags"]>,
    ParentType,
    ContextType,
    RequireFields<QuerytopicTagsArgs, "limit">
  >;
  topics?: Resolver<
    Array<ResolversTypes["Topic"]>,
    ParentType,
    ContextType,
    RequireFields<QuerytopicsArgs, "limit" | "query" | "skip">
  >;
  user?: Resolver<ResolversTypes["User"], ParentType, ContextType>;
  userID?: Resolver<
    ResolversTypes["ID"],
    ParentType,
    ContextType,
    RequireFields<QueryuserIDArgs, "sn">
  >;
  userSN?: Resolver<
    ResolversTypes["String"],
    ParentType,
    ContextType,
    RequireFields<QueryuserSNArgs, "id">
  >;
};

export type ResResolvers<
  ContextType = AppContext,
  ParentType extends ResolversParentTypes["Res"] = ResolversParentTypes["Res"]
> = {
  __resolveType: TypeResolveFn<
    "ResDelete" | "ResFork" | "ResHistory" | "ResNormal" | "ResTopic",
    ParentType,
    ContextType
  >;
  date?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  dv?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  hash?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  replyCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  self?: Resolver<Maybe<ResolversTypes["Boolean"]>, ParentType, ContextType>;
  topic?: Resolver<ResolversTypes["Topic"], ParentType, ContextType>;
  uv?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  voteFlag?: Resolver<
    Maybe<ResolversTypes["VoteFlag"]>,
    ParentType,
    ContextType
  >;
};

export type ResDeleteResolvers<
  ContextType = AppContext,
  ParentType extends ResolversParentTypes["ResDelete"] = ResolversParentTypes["ResDelete"]
> = {
  date?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  dv?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  flag?: Resolver<ResolversTypes["ResDeleteFlag"], ParentType, ContextType>;
  hash?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  replyCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  self?: Resolver<Maybe<ResolversTypes["Boolean"]>, ParentType, ContextType>;
  topic?: Resolver<ResolversTypes["Topic"], ParentType, ContextType>;
  uv?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  voteFlag?: Resolver<
    Maybe<ResolversTypes["VoteFlag"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ResForkResolvers<
  ContextType = AppContext,
  ParentType extends ResolversParentTypes["ResFork"] = ResolversParentTypes["ResFork"]
> = {
  date?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  dv?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  fork?: Resolver<ResolversTypes["TopicFork"], ParentType, ContextType>;
  hash?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  replyCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  self?: Resolver<Maybe<ResolversTypes["Boolean"]>, ParentType, ContextType>;
  topic?: Resolver<ResolversTypes["Topic"], ParentType, ContextType>;
  uv?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  voteFlag?: Resolver<
    Maybe<ResolversTypes["VoteFlag"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ResHistoryResolvers<
  ContextType = AppContext,
  ParentType extends ResolversParentTypes["ResHistory"] = ResolversParentTypes["ResHistory"]
> = {
  date?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  dv?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  hash?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  history?: Resolver<ResolversTypes["History"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  replyCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  self?: Resolver<Maybe<ResolversTypes["Boolean"]>, ParentType, ContextType>;
  topic?: Resolver<ResolversTypes["Topic"], ParentType, ContextType>;
  uv?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  voteFlag?: Resolver<
    Maybe<ResolversTypes["VoteFlag"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ResNormalResolvers<
  ContextType = AppContext,
  ParentType extends ResolversParentTypes["ResNormal"] = ResolversParentTypes["ResNormal"]
> = {
  date?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  dv?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  hash?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  isReply?: Resolver<Maybe<ResolversTypes["Boolean"]>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  profile?: Resolver<Maybe<ResolversTypes["Profile"]>, ParentType, ContextType>;
  reply?: Resolver<Maybe<ResolversTypes["Res"]>, ParentType, ContextType>;
  replyCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  self?: Resolver<Maybe<ResolversTypes["Boolean"]>, ParentType, ContextType>;
  text?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  topic?: Resolver<ResolversTypes["Topic"], ParentType, ContextType>;
  uv?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  voteFlag?: Resolver<
    Maybe<ResolversTypes["VoteFlag"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ResSubscriptResolvers<
  ContextType = AppContext,
  ParentType extends ResolversParentTypes["ResSubscript"] = ResolversParentTypes["ResSubscript"]
> = {
  count?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  res?: Resolver<ResolversTypes["Res"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ResTopicResolvers<
  ContextType = AppContext,
  ParentType extends ResolversParentTypes["ResTopic"] = ResolversParentTypes["ResTopic"]
> = {
  date?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  dv?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  hash?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  replyCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  self?: Resolver<Maybe<ResolversTypes["Boolean"]>, ParentType, ContextType>;
  topic?: Resolver<ResolversTypes["Topic"], ParentType, ContextType>;
  uv?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  voteFlag?: Resolver<
    Maybe<ResolversTypes["VoteFlag"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SetStoragesPayloadResolvers<
  ContextType = AppContext,
  ParentType extends ResolversParentTypes["SetStoragesPayload"] = ResolversParentTypes["SetStoragesPayload"]
> = {
  storages?: Resolver<
    Array<ResolversTypes["Storage"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StorageResolvers<
  ContextType = AppContext,
  ParentType extends ResolversParentTypes["Storage"] = ResolversParentTypes["Storage"]
> = {
  key?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  value?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SubscriptionResolvers<
  ContextType = AppContext,
  ParentType extends ResolversParentTypes["Subscription"] = ResolversParentTypes["Subscription"]
> = {
  resAdded?: SubscriptionResolver<
    ResolversTypes["ResSubscript"],
    "resAdded",
    ParentType,
    ContextType,
    RequireFields<SubscriptionresAddedArgs, "topic">
  >;
};

export type TagsResolvers<
  ContextType = AppContext,
  ParentType extends ResolversParentTypes["Tags"] = ResolversParentTypes["Tags"]
> = {
  count?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TokenResolvers<
  ContextType = AppContext,
  ParentType extends ResolversParentTypes["Token"] = ResolversParentTypes["Token"]
> = {
  __resolveType: TypeResolveFn<
    "TokenGeneral" | "TokenMaster",
    ParentType,
    ContextType
  >;
  date?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  key?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
};

export type TokenGeneralResolvers<
  ContextType = AppContext,
  ParentType extends ResolversParentTypes["TokenGeneral"] = ResolversParentTypes["TokenGeneral"]
> = {
  client?: Resolver<ResolversTypes["Client"], ParentType, ContextType>;
  date?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  key?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TokenMasterResolvers<
  ContextType = AppContext,
  ParentType extends ResolversParentTypes["TokenMaster"] = ResolversParentTypes["TokenMaster"]
> = {
  date?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  key?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TokenReqResolvers<
  ContextType = AppContext,
  ParentType extends ResolversParentTypes["TokenReq"] = ResolversParentTypes["TokenReq"]
> = {
  key?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  token?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TopicResolvers<
  ContextType = AppContext,
  ParentType extends ResolversParentTypes["Topic"] = ResolversParentTypes["Topic"]
> = {
  __resolveType: TypeResolveFn<
    "TopicFork" | "TopicNormal" | "TopicOne",
    ParentType,
    ContextType
  >;
  active?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  date?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  resCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  subscribe?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType
  >;
  title?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  update?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
};

export type TopicForkResolvers<
  ContextType = AppContext,
  ParentType extends ResolversParentTypes["TopicFork"] = ResolversParentTypes["TopicFork"]
> = {
  active?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  date?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  parent?: Resolver<ResolversTypes["TopicNormal"], ParentType, ContextType>;
  resCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  subscribe?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType
  >;
  title?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  update?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TopicNormalResolvers<
  ContextType = AppContext,
  ParentType extends ResolversParentTypes["TopicNormal"] = ResolversParentTypes["TopicNormal"]
> = {
  active?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  date?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  resCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  subscribe?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType
  >;
  tags?: Resolver<Array<ResolversTypes["String"]>, ParentType, ContextType>;
  text?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  title?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  update?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TopicOneResolvers<
  ContextType = AppContext,
  ParentType extends ResolversParentTypes["TopicOne"] = ResolversParentTypes["TopicOne"]
> = {
  active?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  date?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  resCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  subscribe?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType
  >;
  tags?: Resolver<Array<ResolversTypes["String"]>, ParentType, ContextType>;
  text?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  title?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  update?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TopicSearchResolvers<
  ContextType = AppContext,
  ParentType extends ResolversParentTypes["TopicSearch"] = ResolversParentTypes["TopicSearch"]
> = {
  __resolveType: TypeResolveFn<
    "TopicNormal" | "TopicOne",
    ParentType,
    ContextType
  >;
  active?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  date?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  resCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  subscribe?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType
  >;
  tags?: Resolver<Array<ResolversTypes["String"]>, ParentType, ContextType>;
  text?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  title?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  update?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
};

export type UpdateUserResponseResolvers<
  ContextType = AppContext,
  ParentType extends ResolversParentTypes["UpdateUserResponse"] = ResolversParentTypes["UpdateUserResponse"]
> = {
  token?: Resolver<ResolversTypes["TokenMaster"], ParentType, ContextType>;
  user?: Resolver<ResolversTypes["User"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<
  ContextType = AppContext,
  ParentType extends ResolversParentTypes["User"] = ResolversParentTypes["User"]
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  sn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ValidateDataResolvers<
  ContextType = AppContext,
  ParentType extends ResolversParentTypes["ValidateData"] = ResolversParentTypes["ValidateData"]
> = {
  char?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["CharType"]>>>,
    ParentType,
    ContextType
  >;
  max?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = AppContext> = {
  Client?: ClientResolvers<ContextType>;
  CreateClientResponse?: CreateClientResponseResolvers<ContextType>;
  CreateClientResponseError?: CreateClientResponseErrorResolvers<ContextType>;
  CreateTokenGeneralResponse?: CreateTokenGeneralResponseResolvers<ContextType>;
  CreateUserResponse?: CreateUserResponseResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  History?: HistoryResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Profile?: ProfileResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Res?: ResResolvers<ContextType>;
  ResDelete?: ResDeleteResolvers<ContextType>;
  ResFork?: ResForkResolvers<ContextType>;
  ResHistory?: ResHistoryResolvers<ContextType>;
  ResNormal?: ResNormalResolvers<ContextType>;
  ResSubscript?: ResSubscriptResolvers<ContextType>;
  ResTopic?: ResTopicResolvers<ContextType>;
  SetStoragesPayload?: SetStoragesPayloadResolvers<ContextType>;
  Storage?: StorageResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  Tags?: TagsResolvers<ContextType>;
  Token?: TokenResolvers<ContextType>;
  TokenGeneral?: TokenGeneralResolvers<ContextType>;
  TokenMaster?: TokenMasterResolvers<ContextType>;
  TokenReq?: TokenReqResolvers<ContextType>;
  Topic?: TopicResolvers<ContextType>;
  TopicFork?: TopicForkResolvers<ContextType>;
  TopicNormal?: TopicNormalResolvers<ContextType>;
  TopicOne?: TopicOneResolvers<ContextType>;
  TopicSearch?: TopicSearchResolvers<ContextType>;
  UpdateUserResponse?: UpdateUserResponseResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  ValidateData?: ValidateDataResolvers<ContextType>;
};

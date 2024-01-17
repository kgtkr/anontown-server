import { getProfile, getRes } from "../../../usecases";
import type { ResNormalResolvers } from "./../../types.generated";
import { base_Res } from "./base_Res";

export const ResNormal: ResNormalResolvers = {
  topic: base_Res.topic,
  reply: async (res, _args, context, _info) => {
    if (res.replyID !== null) {
      const reply = await getRes({ id: res.replyID }, context.ports);
      return reply;
    } else {
      return null;
    }
  },
  profile: async (res, _args, context, _info) => {
    if (res.profileID !== null) {
      const profile = await getProfile({ id: res.profileID }, context.ports);
      return profile;
    } else {
      return null;
    }
  },
};

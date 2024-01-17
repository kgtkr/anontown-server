import type { ResSubscriptResolvers } from "./../../types.generated";
export const ResSubscript: ResSubscriptResolvers = {
  /* Implement ResSubscript resolver logic here */
  res: ({ res }) => {
    /* ResSubscript.res resolver is required because ResSubscript.res and ResSubscriptMapper.res are not compatible */
    return res;
  },
};

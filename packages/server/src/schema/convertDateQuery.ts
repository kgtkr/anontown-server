import { DateQuery } from "../ports/types";
import { stringToDate } from "./stringToDate";
import * as G from "./types.generated";

export function convertDateQuery(query: G.DateQuery | null): DateQuery | null {
  if (query === null) {
    return null;
  }
  return {
    date: stringToDate(query.date).toISOString(),
    type: query.type,
  };
}

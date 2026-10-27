import { ExpiryCondition } from "../rules/duration/expiry-condition";

export type StatusInstance = {
  id: string; // `${statusId}:${sourceId}`, so re-applying refreshes it
  statusId: string;
  sourceId: string; // action id
  expiryConditions?: ExpiryCondition[];
};

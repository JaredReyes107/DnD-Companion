import { FeatureGrant } from "@/core/entities/rules/feature-template";
import { ExpiryCondition } from "@/core/entities/rules/duration/expiry-condition";
import { DerivedStatKey } from "@/core/entities/rules/stats.types";

export type StatusGrant = Extract<
  FeatureGrant,
  { type: "modifier" } | { type: "advantage" }
>;

export type StatusTemplate = {
  id: string;
  tags?: string[];
  grants?: StatusGrant[]; // applied while the status is active
  defaultExpiry?: ExpiryCondition[]; // early-end conditions every instance carries
  limitStat?: DerivedStatKey; // max simultaneous instances; oldest is evicted
  bindsSourceEffects?: boolean; // removing it ends everything its source applied
};

import { FeatureGrant } from "../feature-template";
import { ExpiryCondition } from "../duration/expiry-condition";
import { DerivedStatKey } from "../stats.types";

export type StatusKind = "condition" | "buff" | "debuff" | "aura";

export type StatusGrant = Extract<
  FeatureGrant,
  { type: "modifier" } | { type: "advantage" }
>;

export type StatusTemplate = {
  id: string;
  kind?: StatusKind; // default "buff"; drives grouping in the Effects tab
  tags?: string[];
  grants?: StatusGrant[]; // modifier / advantage template ids; may be empty (descriptive)
  defaultExpiry?: ExpiryCondition[];
  limitStat?: DerivedStatKey;
  dependsOn?: string;
  bindsSourceEffects?: boolean; // legacy; only needed for the deprecated runtime paths
};

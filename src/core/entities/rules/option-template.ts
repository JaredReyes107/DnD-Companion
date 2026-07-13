// src/core/entities/rules/option-template.ts
import { FeatureGrant } from "./feature-template";

export type OptionTemplate = {
  id: string; // e.g. "maneuver_trip_attack", "invocation_agonizing_blast"
  poolId: string; // e.g. "battle_master_maneuvers" — which pool this belongs to

  grants?: FeatureGrant[]; // reuses the same union: resource | action | modifier
  tags?: string[];
};
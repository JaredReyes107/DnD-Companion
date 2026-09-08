import { ScalingFormula } from "@/core/data/rules/scaling/scaling-formula";
import { ContentOrigin } from "./content-origin";
import { ResourceGrantor } from "./grantor";

export type ScalingCondition = {
  base: import("@/core/data/rules/scaling/scaling-formula").ScalingBase;
  operator: ">=" | ">" | "<=" | "<" | "==";
  value: number;
};

export type ResourceBound =
  | { kind: "value"; amount: number }
  | {
      kind: "formula";
      formula: import("@/core/data/rules/scaling/scaling-formula").ScalingFormula;
    }
  | { kind: "unbounded" }
  | {
      kind: "conditional";
      when: ScalingCondition;
      ifTrue: ResourceBound;
      ifFalse: ResourceBound;
    };

export type RestoreTrigger =
  | { type: "shortRest" }
  | { type: "longRest" }
  | { type: "turnStart" }
  | { type: "roundStart" }
  | { type: "interval"; formula: ScalingFormula } // "1d4 long rests" — needs a dice-capable base later
  | { type: "none" };

export type RestoreRule = {
  trigger: RestoreTrigger;
  amount: "full" | { kind: "fixed"; value: number }; // partial restore, e.g. Channel Divinity short rest
};

export type Recharge = RestoreRule[]; // empty/only-"none" = never recharges on schedule

export type ResourceCategory =
  | "spell_slots"
  | "pact_slots"
  | "class_features"
  | "subclass_features"
  | "racial_features"
  | "background_features"
  | "feats";

export type ResourceTemplate = {
  id: string;
  category: ResourceCategory;
  origin: ContentOrigin;
  grantor: ResourceGrantor;

  scaling: ScalingFormula;
  min?: ResourceBound; // default: { kind: "value", amount: 0 } if omitted
  max: ResourceBound; // required — explicit "unbounded" beats an implicit Infinity leak

  recharge: Recharge;
  tags?: string[];
};

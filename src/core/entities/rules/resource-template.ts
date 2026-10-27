import { ContentOrigin } from "./content-origin";
import { ResourceGrantor } from "./grantor";
import { TimingTrigger } from "./trigger";
import { Comparator } from "@/core/entities/rules/comparator";

export type ScalingCondition = {
  base: import("@/core/data/rules/scaling/scaling-formula").ScalingBase;
  operator: Comparator;
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

export type RestoreAmount =
  | "full"
  | { kind: "reset"; value: number } // set current to this exact value
  | { kind: "delta"; value: number }; // add this to current (negative = decay)

export type ResourceRechargeCondition = {
  operator: Comparator;
  value: number;
};

export type RestoreRule = {
  trigger: TimingTrigger;
  amount: RestoreAmount;
  when?: ResourceRechargeCondition;
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
  grantors: ResourceGrantor[];

  min?: ResourceBound; // default: { kind: "value", amount: 0 } if omitted
  max: ResourceBound; // required — explicit "unbounded" beats an implicit Infinity leak

  recharge: Recharge;
  tags?: string[];
};

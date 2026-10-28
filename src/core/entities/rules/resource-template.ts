import { Expr } from "./expr/expr";
import { ContentOrigin } from "./content-origin";
import { ResourceGrantor } from "./grantor";
import { TimingTrigger } from "./trigger";
import { Comparator } from "@/core/entities/rules/comparator";

export type ScalingCondition = {
  base: Expr;
  operator: Comparator;
  value: number;
};

export type ResourceBound =
  | { kind: "value"; amount: number }
  | {
      kind: "formula";
      formula: Expr;
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
  sourceId?: string;
  origin: ContentOrigin;
  grantors?: ResourceGrantor[];

  max: Expr;
  min?: Expr; // default: { kind: "value", amount: 0 } if omitted
  recharge: Recharge;

  tags?: string[];
};

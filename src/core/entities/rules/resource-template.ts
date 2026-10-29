import { Expr } from "./expr/expr";
import { ContentOrigin } from "./content-origin";
import { ResourceGrantor } from "./grantor";
import { TimingTrigger } from "./trigger";
import { Comparator } from "./predicate/predicate";

export type RestoreAmount =
  | "full"
  | { kind: "reset"; value: Expr } // current := value
  | { kind: "delta"; value: Expr }; // current += value (negative = decay)

/** Compares the resource's own current value, before the restore. */
export type ResourceRechargeCondition = {
  operator: Comparator;
  value: number;
};

export type RestoreRule = {
  trigger: TimingTrigger;
  amount: RestoreAmount;
  when?: ResourceRechargeCondition;
};

export type Recharge = RestoreRule[]; // empty = never recharges on a schedule

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

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

  /** Pools of interchangeable payers (e.g. "spell_slot", "standard_slot"). Requires `rank`. */
  groups?: string[];
  /** Position inside every group it belongs to. An Expr, so pact slots can derive it from level. */
  rank?: Expr;

  tags?: string[];
};

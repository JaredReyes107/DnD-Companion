import { ExpiryCondition } from "../rules/duration/expiry-condition";
import { Expr } from "../rules/expr/expr";
import { StatModel } from "../rules/stats.types";
import { Condition } from "./Condition";

export enum ModifierType {
  ADDITIVE = "additive",
  MULTIPLICATIVE = "multiplicative",
  SET = "set",
  FLOOR = "floor",
  CAP = "cap",
}

export type ModifierValue = number | Expr;

export interface ModifierTemplate {
  id: string;
  sourceId: string;
  statModel: StatModel;
  type: ModifierType;
  value: ModifierValue;
  // Falls back to a type-keyed default (DEFAULT_MODIFIER_PRIORITY) when omitted
  priority?: ModifierValue;
  condition?: Condition;
  effectId?: string; // for stacking
  tags?: string[];
}

export interface ModifierInstance {
  id: string;
  templateId: string;
  sourceId: string;
  statModel: StatModel;
  type: ModifierType;
  value: number; // resolved at instantiation, same convention as StatModifierInstance had
  priority: number; // resolved at instantiation — formula evaluated once per build
  condition?: Condition;
  effectId?: string;
  expiryConditions?: ExpiryCondition[];
  tags?: string[];
}

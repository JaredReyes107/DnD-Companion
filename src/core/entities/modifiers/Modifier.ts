import { ExpiryCondition } from "../rules/duration/expiry-condition";
import { ResolvedBase } from "../rules/resolved-base";
import { StatModel } from "../rules/stats.types";
import { Condition } from "./Condition";
import { Character } from "@/core/entities/character/Character";

export enum ModifierType {
  ADDITIVE = "additive",
  MULTIPLICATIVE = "multiplicative",
  SET = "set",
  FLOOR = "floor",
  CAP = "cap",
}

export type ModifierValue = number | ((context: ModifierEvalContext) => number);

export type ModifierEvalContext = {
  character: Character;
  resolved: ResolvedBase;
  // Set by the stat resolver when evaluating check-targeted modifiers.
  // Allows value formulas to vary per node (e.g. Fire Rune: only double PB
  // for nodes the character is actually proficient in).
  targetNodeId?: string;
  [key: string]: unknown;
};

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

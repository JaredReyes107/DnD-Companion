import { Ability } from "@/core/entities/rules/ability/ability.types";
import { SkillInstance } from "@/core/entities/character/skill-instance";
import { Character } from "@/core/entities/character/Character";
import { ExpiryCondition } from "./duration/expiry-condition";

export type DerivedStatKey =
  | "maxHp"
  | "speed"
  | "initiative"
  | "ac"
  | "spellAttackModifier"
  | "spellSaveDC";

export type StatModel =
  | { type: "ability"; ability: Ability }
  | { type: "save"; ability: Ability }
  | { type: "skill"; skill: SkillInstance } // superseded by "check" — see migration note
  | { type: "check"; nodeId: string }
  | { type: "derived"; key: DerivedStatKey }
  | { type: "custom"; key: string };

export type ModifierType =
  | "add" // +10 speed
  | "subtract" //-5 maxHp
  | "multiply" // x2 speed (haste)
  | "override" // AC = 13 + Dex
  | "min" // speed at least 10
  | "max"; // speed cannot exceed X

export type StatModifierTemplate = {
  id: string;
  //?: Consider moving into "Instance" and apply dinamically for later reuse in items, features, etc
  sourceId: string; // featureId, itemId, actionId or spellId
  statModel: StatModel;
  mode: ModifierType;

  value: number | ((character: Character) => number);

  priority?: number;
};

export type StatModifierInstance = {
  templateId: string;
  sourceId: string;
  statModel: StatModel;

  mode: ModifierType;
  value: number;

  priority?: number;
};

export type RuntimeModifierInstance = {
  id: string;
  modifier: StatModifierInstance;
  expiryConditions?: ExpiryCondition[]; // undefined = passive/permanent
  concentration?: boolean;
};

export type ActiveCombatModifier = {
  id: string;
  modifier: StatModifierInstance;
  expiryConditions?: ExpiryCondition[];
  concentration?: boolean;
};

import { Ability } from "@/game/domain/rules/ability/ability.types";
import { SkillInstance } from "@/game/domain/character/skill-instance";
import { Character } from "@/game/domain/character/Character";

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
  | { type: "skill"; skill: SkillInstance }
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
  //origin: "Players Handbook", //For distinguishing official rules and homebrew

  mode: ModifierType;
  value: number;

  priority?: number;
};

export type RuntimeModifierInstance = {
  id: string; // unique instance id
  modifier: StatModifierInstance;

  appliedAtRound: number;
  expiresAtRound?: number; // inclusive
};

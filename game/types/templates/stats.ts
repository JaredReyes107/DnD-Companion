import { Ability } from "./abilities-scores";
import { SkillInstance } from "./character-skills";

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

export type Stat = {
  statModel: StatModel;
  base: number;
};

export type StatModifier = {
  statModel: StatModel;
  sourceId: string; // featureId, itemId, actionId or spellId
  //origin: "Players Handbook", //For distinguishing official rules and homebrew

  mode: ModifierType;
  value: number;
  priority?: number;

  scope: "persistent" | "combat";
};

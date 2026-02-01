import { Ability } from "./abilities-scores";

export type StatId =
  | Ability
  | "maxHp"
  | "speed"
  | "initiative"
  | "ac"
  | "spellAttackModifier"
  | "spellSaveDC"
  | string;

export type Stat = {
  statId: StatId;
  base: number;
};

export type StatModifier = {
  modifierId: string;
  statId: StatId;
  sourceId: string; // featureId, itemId, actionId or spellId
  //origin: "Players Handbook", //For distinguishing official rules and homebrew

  mode:
    | "add" // +10 speed
    | "substract" //-5 maxHp
    | "multiply" // x2 speed (haste)
    | "override" // AC = 13 + Dex
    | "min" // speed at least 10
    | "max"; // speed cannot exceed X
  value: number;

  scope: "persistent" | "combat";
};

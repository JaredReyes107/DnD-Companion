import { Ability } from "@/core/entities/rules/ability/ability.types";
import { Character } from "@/core/entities/character/Character";
import { ExpiryCondition } from "./duration/expiry-condition";

export type DerivedStatKey =
  | "maxHp"
  | "speed"
  | "initiative"
  | "ac"
  | "spellAttackModifier"
  | "spellSaveDC";

export type SpellcastingStatKey = "attackModifier" | "saveDC";

export type StatModel =
  | { type: "ability"; ability: Ability }
  | { type: "save"; ability: Ability }
  | { type: "check"; nodeId: string }
  | { type: "spellcasting"; sourceId: string; key: SpellcastingStatKey }
  | {
      type: "spellcastingByAbility";
      ability: Ability;
      key: SpellcastingStatKey;
    }
  | { type: "spellcastingGlobal"; key: SpellcastingStatKey }
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

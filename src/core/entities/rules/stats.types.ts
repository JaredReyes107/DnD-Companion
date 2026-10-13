import { Ability } from "@/core/entities/rules/ability/ability.types";
import { ExpiryCondition } from "./duration/expiry-condition";
import { ModifierInstance } from "../modifiers/Modifier";

export type DerivedStatKey =
  | "maxHp"
  | "speed"
  | "initiative"
  | "ac"
  | "spellAttackModifier"
  | "spellSaveDC"
  | "concentrationLimit"
  | "proficiencyBonus";

export type SpellcastingStatKey = "attackModifier" | "saveDC";

export type StatModel =
  | { type: "ability"; ability: Ability }
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

export type RuntimeModifierInstance = {
  id: string;
  modifier: ModifierInstance;
  expiryConditions?: ExpiryCondition[]; // undefined = passive/permanent
};

export type ActiveCombatModifier = {
  id: string;
  modifier: ModifierInstance;
  expiryConditions?: ExpiryCondition[];
};

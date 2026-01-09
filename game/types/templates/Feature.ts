import { DamageType } from "./DamageTypes";

// Custom data
export type CombatRole = "active" | "passive" | "none" | "special";
export type ActionSlot = "action" | "bonusAction" | "reaction" | "passive";
export type RechargeType =
  | "longRest"
  | "shortRest"
  | "daily"
  | "perTurn"
  | "none"
  | "custom";

export type FeatureCharges = {
  scaling:
    | { type: "none"; value: number }
    | { type: "level"; values: number[] } // index = class level - 1
    | { type: "ability"; abilityIndex: number } // e.g., CHA modifier
    | { type: "proficiency" }
    | { type: "formula"; formula: string }; // e.g., "PB + CHA"
  max?: number;
  usesLeft?: number;

  recharge: RechargeType;
};

export type FeatureScaling = {
  base: number;
  increasesAt?: number[]; // levels at which the value increases
  max?: number;
};

export type FeatureSource =
  | "class"
  | "subclass"
  | "race"
  | "feat"
  | "background"
  | string;

export type ModifierTag =
  | "ac"
  | "speed"
  | "resistance"
  | "concentrationAdvantage"
  | "saveBonus"
  | "statBonus"
  | "skillBonus"
  | "initiativeBonus"
  | "activeToggle"
  | "temporaryHP"
  | "ignoreOpportunityAttacks"
  | "reactionType";

export type FeatureModifier =
  | { type: "ac"; formula: string } // "INT modifier"
  | { type: "speed"; amount: number }
  | { type: "resistance"; damageTypes: DamageType[] }
  | { type: "concentrationAdvantage" }
  | { type: "saveBonus"; saves: number[]; bonus: number | string } // e.g., "INT modifier"
  | { type: "statBonus"; stat: number; bonus: number | string }
  | { type: "skillBonus"; skills: number[]; bonus: number | string }
  | { type: "initiativeBonus"; bonus: number | string }
  | { type: "temporaryHP"; amount: number | string }
  | { type: "ignoreOpportunityAttacks"; value: boolean }
  | { type: "reactionType"; trigger: "damageTaken" | string }
  | { type: "activeToggle"; effects: FeatureModifier[] }; // Nestable toggle group

export type Feature = {
  //Identity
  id: string;
  name: string;
  source?: FeatureSource;
  //If featureSource = 'class'
  class?: string;
  level?: number;

  //UI data
  description: string;
  tags?: string[]; // for UI filtering like ["defensive", "mobility"]

  //Combat Data
  combatRole: CombatRole; // active, passive, none or 'special' (other)
  actionSlot?: ActionSlot; // action, bonusAction, reaction, or passive etc.

  charges?: FeatureCharges;

  mechanics?: {
    toggle?: boolean;
    concentration?: boolean;
    duration?: string; // e.g., "1 minute", "Until rest"
  };

  modifiers?: FeatureModifier[];

  effectTags?: ModifierTag[]; // for logic (like highlighting speed increases)
  important?: boolean; // show prominently in UI

  data?: Record<
    string,
    number | string | boolean | FeatureScaling | FeatureCharges | unknown
  >;
};

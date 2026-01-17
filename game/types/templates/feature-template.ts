export type CombatRole = "active" | "passive" | "none" | "special";
export type ActionSlot = "action" | "bonusAction" | "reaction" | "passive";

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

export type FeatureTemplate = {
  id: string;
  label: string;
  description: string;

  source: "class" | "subclass" | "race" | "feat" | "background" | "other";
  // if source = 'class'
  classId?: string;
  level?: number;

  combatRole: CombatRole;
  actionSlot?: ActionSlot;

  tags?: string[]; // "combat", "passive", "resource", "movement", etc.

  resources?: string[]; // ids of ResourceDefinitions
};

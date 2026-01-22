export type CombatRole = "active" | "passive" | "none" | "special";
//TODO: Relocate ActivationType into action-template
export type ActivationType =
  | "action"
  | "bonusAction"
  | "reaction"
  | "onAttack"
  | "onHit"
  | "onSpellCast"
  | "onDamageReceived"
  | "lastStand"
  | "passive";

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

  combatRole?: CombatRole;
  activationType?: ActivationType;

  tags?: string[]; // "combat", "passive", "resource", "movement", etc.

  resources?: string[]; // ids of ResourceTemplate
};

export type CombatRole = "active" | "passive" | "none" | "special";

export type FeatureTemplate = {
  id: string;

  source: "class" | "subclass" | "race" | "feat" | "background" | "other";
  // if source = 'class'
  classId?: string;
  level?: number;

  combatRole?: CombatRole;

  tags?: string[]; // "combat", "passive", "resource", "movement", etc.

  resources?: string[]; // ids of ResourceTemplate
  actions?: string[]; // ids of ActionTemplate
  modifiers?: string[]; //ids of ModifiersTemplate
};

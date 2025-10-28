import { Feature } from "@/types/Feature";

export type ClassName =
  | "Barbarian"
  | "Bard"
  | "Cleric"
  | "Druid"
  | "Fighter"
  | "Monk"
  | "Paladin"
  | "Ranger"
  | "Rogue"
  | "Sorcerer"
  | "Warlock"
  | "Wizard"
  | "Artificer";

export type Class = {
  name: ClassName;
  label: string; // in Spanish
  hitDie: number;
  savingThrows: [number, number]; // Ability indexes
  primaryAbilities: number[]; // For multiclassing
  casterType: "Full" | "Half" | "Third" | "None";
  spellcastingAbility?: number; // if caster
  classFeatures: Feature[];
};

export type Subclass = {
  value: string;
  name: string;
  source: string; // PHB, XGE, TCE, etc.
  //subclassFeatures: Rasgo[];
};

import { Armor } from "./Armor";
import { ClassDetails } from "./ClassDetails";
import { DamageType, EffectivenessType } from "./DamageTypes";
import { Feature } from "./Feature";
import { Weapon } from "./Weapon";

export type Character = {
  // Internal Id
  id: string;
  icon: string;

  // Identity
  Name: string;
  Race: string;
  racialFeatures?: Feature[];
  Alignment: string;

  // Classes
  Classes: ClassDetails[];
  XP: number;

  feats?: Feature[]; // optional raw feat list

  // Standard Order: Strength, Dexterity, Constitution, Intelligence, Wisdom and Charisma
  Stats: number[];
  StatModifiers: number[];

  // Calculated data
  ProficiencyBonus: number;
  InitiativeBonus: number;
  ArmorClass: number;
  Speed: number;

  // Standard Order: Strength, Dexterity, Constitution, Intelligence, Wisdom and Charisma
  SavingThrowsProficiencies: boolean[];
  SavingThrowModifiers: number[];

  // By alfabetical order, in Spanish
  SkillProficiencies: boolean[];
  SkillExpertises: boolean[];
  SkillModifiers: number[];

  // Inventory
  Equipment: {
    Armas: Weapon[];
    Armaduras: Armor[];
  };

  HP: number;
  CurrentHP: number;
  TempHP: number;

  DamageEffectiveness: Record<DamageType, EffectivenessType>;

  // Optional data, like spellcasting and other features like Lucky charges
  SpellSlots?: { [level: number]: { max: number; used: number } }; // if spellcaster
};

import { Alignment } from "@/core/data/rules/Alignments";
import { CharacterClasses } from "./character-classes";
import { AbilityScores } from "@/core/entities/rules/ability/ability.types";
import { CharacterSavingThrows } from "@/core/entities/rules/saving-throw/saving-throw-instance";
import { CharacterSkills } from "@/core/entities/character/skill-instance";
import { HitPoints } from "@/core/entities/rules/hit-points";
import { FeatureInstance } from "../features/feature-instance";
import { ResourceInstance } from "../resources/resource-instance";
import { ActionInstance } from "@/core/entities/actions/action-instance";
import { StatModifierInstance } from "@/core/entities/rules/stats.types";
import { CombatState } from "@/core/entities/combat/combat-state";
import { ChoiceInstance } from "./choice-instance";

export type Character = {
  // Internal Id
  id: string;

  // Identity
  icon: string;
  name: string;
  race: string;
  alignment: Alignment;

  experiencePoints: number;
  classes: CharacterClasses;

  // Base Stats
  baseAbilityScores: AbilityScores;
  baseMaximumHP: number;
  baseSpeed: number;

  hitPoints: HitPoints;
  currentHitDice: Record<number, number>;

  savingThrows: CharacterSavingThrows;
  skills: CharacterSkills;

  actionLimits: {
    actions: number;
    bonusActions: number;
    reactions: number;
  };

  encounterId: string;

  features: Record<string, FeatureInstance>;
  featureChoices: Record<string, ChoiceInstance>;

  // Runtime State
  resources: Record<string, ResourceInstance>;
  actions: Record<string, ActionInstance>;
  statModifiers: Record<string, StatModifierInstance>;

  combatState?: CombatState;
};

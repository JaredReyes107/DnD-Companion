import { Alignment } from "@/core/data/rules/Alignments";
import { CharacterClasses } from "./character-classes";
import { AbilityScores } from "@/core/entities/rules/ability/ability.types";
import { CharacterCheckState } from "./check-state";
import { HitPoints } from "@/core/entities/rules/hit-points";
import { FeatureInstance } from "../features/feature-instance";
import { ResourceInstance } from "../resources/resource-instance";
import { ModifierInstance } from "../modifiers/Modifier";
import { CombatState } from "@/core/entities/combat/combat-state";
import { ChoiceInstance } from "./choice-instance";
import { CharacterLanguageState } from "./language-state";

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

  checks: CharacterCheckState;
  languages: CharacterLanguageState;

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
  statModifiers: Record<string, ModifierInstance>;

  combatState?: CombatState;
};

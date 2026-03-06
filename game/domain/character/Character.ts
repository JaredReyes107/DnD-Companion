import { Alignment } from "@/game/data/base/Alignments";
import { CharacterClasses } from "./character-classes";
import { AbilityScores } from "@/game/domain/rules/ability/ability.types";
import { CharacterSavingThrows } from "@/game/domain/rules/saving-throw/saving-throw-instance";
import { CharacterSkills } from "@/game/domain/character/skill-instance";
import { HitPoints } from "@/game/data/templates/hit-points";
import { FeatureInstance } from "../features/feature-instance";
import { ResourceInstance } from "../resources/resource-instance";
import { ActionInstance } from "@/game/domain/actions/action-instance";
import { StatModifierInstance } from "../../data/templates/stats.types";
import { CombatState } from "@/game/domain/combat/combat-state";

export type Character = {
  // Internal Id
  id: string;
  icon: string;

  // Identity
  name: string;
  race: string; //TODO: Use raceTemplateId (raceInstance) rather than directly storing the name
  alignment: Alignment;
  experiencePoints: number;

  classes: CharacterClasses;

  //Base Stats
  baseAbilityScores: AbilityScores;
  baseMaximumHP: number;
  baseSpeed: number;

  hitPoints: HitPoints;
  currentHitDice: Record<number, number>;

  savingThrows: CharacterSavingThrows;
  skills: CharacterSkills;

  features: Record<string, FeatureInstance>;
  resources: Record<string, ResourceInstance>;
  actions: Record<string, ActionInstance>;
  statModifiers: Record<string, StatModifierInstance>;

  combatState: CombatState | null;
};

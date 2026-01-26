import { Alignment } from "@/game/base-data/alignments";
import { CharacterClasses } from "../instances/character-classes";
import {
  AbilityScores,
  CharacterSavingThrows,
} from "@/game/types/templates/abilities-scores";
import { CharacterSkills } from "@/game/types/templates/character-skills";
import { HitPoints } from "@/game/types/templates/hit-points";
import { FeatureInstance } from "./feature-instance";
import { ResourceInstance } from "./resource-instance";
import { Action } from "./action";
import { StatModifier } from "../templates/stats";
import { CombatState } from "@/game/types/instances/combat-state";

export type Character = {
  // Internal Id
  id: string;
  icon: string;

  // Identity
  name: string;
  race: string;
  alignment: Alignment;
  experiencePoints: number;

  classes: CharacterClasses;

  //Base Stats
  baseAbilityScores: AbilityScores;
  baseMaximumHP: number;
  baseSpeed: number;

  hitPoints: HitPoints;

  savingThrows: CharacterSavingThrows;
  skills: CharacterSkills;

  features: Record<string, FeatureInstance>;
  resources: Record<string, ResourceInstance>;
  actions: Record<string, Action>;
  statModifiers: Record<string, StatModifier>;

  combatState: CombatState | null;
};

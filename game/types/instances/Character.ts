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
import { CombatState } from "@/game/types/templates/combat-state";

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

  abilityScores: AbilityScores;
  savingThrows: CharacterSavingThrows;
  skills: CharacterSkills;

  hitPoints: HitPoints;
  speed: number;

  features: Record<string, FeatureInstance>;
  resources: Record<string, ResourceInstance>;

  combatState: CombatState;
};

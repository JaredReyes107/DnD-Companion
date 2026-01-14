import { Alignment } from "@/game/base-data/alignments";
import { CharacterClasses } from "../instances/character-classes";
import {
  AbilityScores,
  CharacterSavingThrows,
} from "@/game/types/templates/abilities-scores";
import { CharacterSkills } from "./character-skills";
import { HitPoints } from "./hit-points";
import { CombatState } from "./combat-state";
import { CharacterSpellcasting } from "../instances/character-spellcasting";

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

  combatState: CombatState;

  spellcasting?: CharacterSpellcasting;
};

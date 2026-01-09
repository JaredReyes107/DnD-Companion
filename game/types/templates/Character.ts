import { Alignment } from "@/game/base-data/Alignments";
import { CharacterClasses } from "../instances/CharacterClasses";
import {
  AbilityScores,
  SavingThrows,
} from "@/game/types/templates/AbilityScores";
import { CharacterSkills } from "./Skills";
import { HitPoints } from "./HitPoints";
import { CombatState } from "./CombatState";
import { CharacterSpellcasting } from "../instances/CharacterSpellcasting";

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
  savingThrows: SavingThrows;
  skills: CharacterSkills;

  hitPoints: HitPoints;
  speed: number;

  combatState: CombatState;

  spellcasting?: CharacterSpellcasting;
};

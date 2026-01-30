import { Skill } from "@/game/types/templates/character-skills";
import { sortGameIdsByName } from "@/lib/helpers/localization-helper";

export const SKILLS: Record<string, Skill> = {
  acrobatics: {
    ability: "DEX",
  },
  animal_handling: {
    ability: "WIS",
  },
  arcana: {
    ability: "INT",
  },
  athletics: {
    ability: "STR",
  },
  deception: {
    ability: "CHA",
  },
  history: {
    ability: "INT",
  },
  insight: {
    ability: "WIS",
  },
  intimidation: {
    ability: "CHA",
  },
  investigation: {
    ability: "INT",
  },
  medicine: {
    ability: "WIS",
  },
  nature: {
    ability: "INT",
  },
  perception: {
    ability: "CHA",
  },
  performance: {
    ability: "CHA",
  },
  persuasion: {
    ability: "CHA",
  },
  religion: {
    ability: "INT",
  },
  sleight_of_hand: {
    ability: "DEX",
  },
  stealth: {
    ability: "DEX",
  },
  survival: {
    ability: "WIS",
  },
};

export const SKILL_KEYS = sortGameIdsByName(Object.keys(SKILLS), "skills");

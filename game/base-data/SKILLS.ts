/* eslint-disable prettier/prettier */
import { Skill } from "@/game/types/templates/Skills";

export const SKILLS: Record<string, Skill> = {
  acrobatics: {
    name: "Acrobatics",
    ability: "DEX",
  },
  animal_handling: {
    name: "Animal Handling",
    ability: "WIS",
  },
  arcana: {
    name: "Arcana",
    ability: "INT",
  },
  athletics: {
    name: "Athletics",
    ability: "STR",
  },
  deception: {
    name: "Deception",
    ability: "CHA",
  },
  history: {
    name: "History",
    ability: "INT",
  },
  insight: {
    name: "Insight",
    ability: "WIS",
  },
  intimidation: {
    name: "Intimidation",
    ability: "CHA",
  },
  investigation: {
    name: "Investigation",
    ability: "INT",
  },
  medicine: {
    name: "Medicine",
    ability: "WIS",
  },
  nature: {
    name: "Nature",
    ability: "INT",
  },
  perception: {
    name: "Perception",
    ability: "CHA",
  },
  performance: {
    name: "Performance",
    ability: "CHA",
  },
  persuasion: {
    name: "Persuasion",
    ability: "CHA",
  },
  religion: {
    name: "Religion",
    ability: "INT",
  },
  sleight_of_hand: {
    name: "Sleight of Hand",
    ability: "DEX",
  },
  stealth: {
    name: "Stealth",
    ability: "DEX",
  },
  survival: {
    name: "Survival",
    ability: "WIS",
  },
};

export const SKILL_ORDER = Object.keys(SKILLS);

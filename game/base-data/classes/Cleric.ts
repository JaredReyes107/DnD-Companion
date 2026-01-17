/* eslint-disable prettier/prettier */
import { ClassTemplate } from "@/game/types/templates/class-template";

export const CLERIC: ClassTemplate = {
  id: "cleric",
  name: "Cleric",

  hitDie: 8,

  primaryAbilities: ["WIS"],
  savingThrows: ["WIS", "CHA"],

  spellcastingTemplate: {
    id: "cleric_spellcasting",
    ability: "WIS",
    kind: "standard",
    progression: "full",
  },

  featuresByLevel: {
    
  },
};

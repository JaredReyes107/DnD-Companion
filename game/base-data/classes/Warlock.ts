/* eslint-disable prettier/prettier */
import { ClassTemplate } from "@/game/types/templates/class-template";

export const WARLOCK: ClassTemplate = {
  id: "warlock",
  name: "Warlock",

  hitDie: 8,

  primaryAbilities: ["CHA"],
  savingThrows: ["INT", "CHA"],

  spellcasting: {
    type: "pact",
    ability: "CHA"
  },

  featuresByLevel: {
    
  },
};

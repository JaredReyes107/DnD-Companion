/* eslint-disable prettier/prettier */
import { ClassTemplate } from "@/game/types/templates/class-template";

export const PALADIN: ClassTemplate = {
  id: "paladin",
  name: "Paladin",

  hitDie: 10,

  primaryAbilities: ["STR", "CHA"],
  savingThrows: ["CON", "CHA"],

  spellcasting: {
    type: "half",
    ability: "CHA"
  },

  featuresByLevel: {
    
  },
};

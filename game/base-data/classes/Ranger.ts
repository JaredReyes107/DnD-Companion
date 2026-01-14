/* eslint-disable prettier/prettier */
import { ClassTemplate } from "@/game/types/templates/class-template";

export const RANGER: ClassTemplate = {
  id: "ranger",
  name: "Ranger",

  hitDie: 10,

  primaryAbilities: ["DEX", "WIS"],
  savingThrows: ["STR", "DEX"],

  spellcasting: {
    type: "half",
    ability: "WIS"
  },

  featuresByLevel: {
    
  },
};

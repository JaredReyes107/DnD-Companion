/* eslint-disable prettier/prettier */
import { ClassTemplate } from "@/game/types/templates/ClassTemplate";

export const ARTIFICER: ClassTemplate = {
  id: "artificer",
  name: "Artificer",

  hitDie: 8,

  primaryAbilities: ["INT"],
  savingThrows: ["CON", "INT"],

  spellcasting: {
    type: "half",
    ability: "INT"
  },

  featuresByLevel: {
    
  },
};

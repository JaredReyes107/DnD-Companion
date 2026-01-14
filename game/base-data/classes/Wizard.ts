/* eslint-disable prettier/prettier */
import { ClassTemplate } from "@/game/types/templates/class-template";

export const WIZARD: ClassTemplate = {
  id: "wizard",
  name: "Wizard",

  hitDie: 6,

  primaryAbilities: ["INT"],
  savingThrows: ["INT", "WIS"],

  spellcasting: {
    type: "full",
    ability: "INT"
  },

  featuresByLevel: {
    
  },
};

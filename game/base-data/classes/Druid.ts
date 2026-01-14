/* eslint-disable prettier/prettier */
import { ClassTemplate } from "@/game/types/templates/class-template";

export const DRUID: ClassTemplate = {
  id: "druid",
  name: "Druid",

  hitDie: 8,

  primaryAbilities: ["WIS"],
  savingThrows: ["DEX", "WIS"],

  spellcasting: {
    type: "full",
    ability: "WIS"
  },

  featuresByLevel: {
    
  },
};

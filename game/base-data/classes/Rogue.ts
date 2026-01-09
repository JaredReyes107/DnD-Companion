/* eslint-disable prettier/prettier */
import { ClassTemplate } from "@/game/types/templates/ClassTemplate";

export const ROGUE: ClassTemplate = {
  id: "rogue",
  name: "Rogue",

  hitDie: 8,

  primaryAbilities: ["DEX"],
  savingThrows: ["DEX", "INT"],

  featuresByLevel: {
    
  },
};

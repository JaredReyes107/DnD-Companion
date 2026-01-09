/* eslint-disable prettier/prettier */
import { ClassTemplate } from "@/game/types/templates/ClassTemplate";

export const MONK: ClassTemplate = {
  id: "monk",
  name: "Monk",

  hitDie: 8,

  primaryAbilities: ["STR", "DEX"],
  savingThrows: ["STR", "DEX"],

  featuresByLevel: {
    
  },
};

/* eslint-disable prettier/prettier */
import { ClassTemplate } from "@/game/types/templates/ClassTemplate";

export const FIGHTER: ClassTemplate = {
  id: "fighter",
  name: "Fighter",

  hitDie: 10,

  primaryAbilities: ["STR", "DEX"],
  savingThrows: ["STR", "CON"],

  featuresByLevel: {
    
  },
};

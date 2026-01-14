/* eslint-disable prettier/prettier */
import { ClassTemplate } from "@/game/types/templates/class-template";

export const BARBARIAN: ClassTemplate = {
  id: "barbarian",
  name: "Barbarian",

  hitDie: 12,

  primaryAbilities: ["STR"],
  savingThrows: ["STR", "DEX"],

  featuresByLevel: {
    
  },
};

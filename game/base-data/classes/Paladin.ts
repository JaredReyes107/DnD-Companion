/* eslint-disable prettier/prettier */
import { ClassTemplate } from "@/game/types/templates/class-template";

export const PALADIN: ClassTemplate = {
  id: "paladin",
  name: "Paladin",

  hitDie: 10,

  primaryAbilities: ["STR", "CHA"],
  savingThrows: ["CON", "CHA"],

  spellcastingTemplate: {
    id: "paladin_spellcasting",
    ability: "CHA",
    kind: "standard",
    progression: "half",
  },

  featuresByLevel: {
    
  },
};

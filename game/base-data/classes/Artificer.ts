/* eslint-disable prettier/prettier */
import { ClassTemplate } from "@/game/types/templates/class-template";

export const ARTIFICER: ClassTemplate = {
  id: "artificer",
  name: "Artificer",

  hitDie: 8,

  primaryAbilities: ["INT"],
  savingThrows: ["CON", "INT"],

  spellcastingTemplate: {
    id: "artificer_spellcasting",
    ability: "INT",
    kind: "standard",
    progression: "half",
  },

  featuresByLevel: {
    
  },
};

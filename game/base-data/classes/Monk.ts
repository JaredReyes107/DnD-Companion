/* eslint-disable prettier/prettier */
import { ClassTemplate } from "@/game/types/templates/class-template";

export const MONK: ClassTemplate = {
  id: "monk",
  name: "Monk",

  hitDie: 8,

  primaryAbilities: ["STR", "DEX"],
  savingThrows: ["STR", "DEX"],

  featuresByLevel: {
    2: [
      {
        id: "ki",
        label: "Ki",
        source: "class",
        level: 2,
        description: "You gain ki points that you can use to fuel various ki features.",
        tags: ["resource"],
        combatRole: "active",
        resources: ["ki_points"]
      },
    ]
  },
};

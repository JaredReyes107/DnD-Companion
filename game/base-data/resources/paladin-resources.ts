import { ResourceTemplate } from "@/game/types/templates/resource-template";

export const RESOURCES_PALADIN: Record<string, ResourceTemplate> = {
  divine_sense: {
    id: "divine_sense",
    label: "Divine Sense",
    sourceId: "paladin",
    category: "class-feature",
    scalingType: "CHA:+1",
    recharge: "longRest",
    tags: ["combat", "healing"],
  },
  lay_on_hands: {
    id: "lay_on_hands",
    label: "Lay on Hands",
    sourceId: "paladin",
    category: "class-feature",
    scalingType: "class-level:*5",
    recharge: "longRest",
    tags: ["combat", "damage", "resistance"],
  },
  cleansing_touch: {
    id: "cleansing_touch",
    label: "Cleansing Touch",
    sourceId: "paladin",
    category: "class-feature",
    scalingType: "CHA",
    recharge: "longRest",
    tags: ["combat", "damage", "resistance"],
  },
};

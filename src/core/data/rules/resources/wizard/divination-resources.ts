import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const DIVINATION_RESOURCES: Record<string, ResourceTemplate> = {
  portent_dice: {
    id: "portent_dice",
    sourceId: "divination",
    category: "subclass_features",
    scalingType: "portent-dice",
    recharge: "longRest",
    tags: ["utility"],
  },
  portent_turn_uses: {
    id: "portent_turn_uses",
    sourceId: "divination",
    category: "subclass_features",
    scalingType: "fixed:1",
    recharge: "perTurn",
    tags: ["utility"],
  },

  the_third_eye: {
    id: "the_third_eye",
    sourceId: "divination",
    category: "subclass_features",
    scalingType: "fixed:1",
    recharge: "shortRest",
    tags: ["senses"],
  },
};

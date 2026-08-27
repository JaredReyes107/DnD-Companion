import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const DIVINE_SOUL_RESOURCES: Record<string, ResourceTemplate> = {
  favored_by_the_gods: {
    id: "favored_by_the_gods",
    sourceId: "divine_soul",
    category: "subclass_features",
    scalingType: "fixed:1",
    recharge: "shortRest",
    tags: ["utility", "bonus", "saving-throw", "attack-roll"],
  },

  empowered_healing: {
    id: "empowered_healing",
    sourceId: "divine_soul",
    category: "subclass_features",
    scalingType: "fixed:1",
    recharge: "perTurn",
    tags: ["healing"],
  },

  unearthly_recovery: {
    id: "unearthly_recovery",
    sourceId: "divine_soul",
    category: "subclass_features",
    scalingType: "fixed:1",
    recharge: "longRest",
    tags: ["healing"],
  },
};

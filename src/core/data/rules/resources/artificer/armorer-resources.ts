import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const ARMORER_RESOURCES: Record<string, ResourceTemplate> = {
  defensive_field: {
    id: "defensive_field",
    sourceId: "guardian",
    category: "subclass_features",
    scalingType: "PB",
    recharge: "shortRest",
    tags: ["defense"],
  },

  lightning_launcher_burst: {
    id: "lightning_launcher_burst",
    sourceId: "infiltrator",
    category: "subclass_features",
    scalingType: "fixed:1",
    recharge: "perRound",
    tags: ["utility"],
  },

  perfected_armor_guardian: {
    id: "perfected_armor_guardian",
    sourceId: "guardian",
    category: "subclass_features",
    scalingType: "PB",
    recharge: "longRest",
    tags: ["utility"],
  },
};

import { E } from "@/core/entities/rules/expr/expr";
import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const ARMORER_RESOURCES: Record<string, ResourceTemplate> = {
  defensive_field: {
    id: "defensive_field",
    sourceId: "guardian",
    category: "subclass_features",
    max: E.pb(),
    recharge: "shortRest",
    tags: ["defense"],
  },

  lightning_launcher_burst: {
    id: "lightning_launcher_burst",
    sourceId: "infiltrator",
    category: "subclass_features",
    max: E.n(1),
    recharge: "perRound",
    tags: ["utility"],
  },

  perfected_armor_guardian: {
    id: "perfected_armor_guardian",
    sourceId: "guardian",
    category: "subclass_features",
    max: E.pb(),
    recharge: "longRest",
    tags: ["utility"],
  },
};

import { E } from "@/core/entities/rules/expr/expr";
import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const STORM_SORCERY_RESOURCES: Record<string, ResourceTemplate> = {
  wind_soul_share_flight: {
    id: "wind_soul_share_flight",
    sourceId: "storm_sorcery",
    category: "subclass_features",
    max: E.n(1),
    recharge: "shortRest",
    tags: ["movement", "buff"],
  },
};

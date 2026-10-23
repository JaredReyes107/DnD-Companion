import { E } from "@/core/entities/rules/expr/expr";
import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const LIGHT_RESOURCES: Record<string, ResourceTemplate> = {
  warding_flare: {
    id: "warding_flare",
    sourceId: "light",
    category: "subclass_features",
    max: E.max(E.n(1), E.mod("WIS")),
    recharge: "longRest",
    tags: ["combat"],
  },
};

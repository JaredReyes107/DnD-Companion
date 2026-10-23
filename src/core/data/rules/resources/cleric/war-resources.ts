import { E } from "@/core/entities/rules/expr/expr";
import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const WAR_RESOURCES: Record<string, ResourceTemplate> = {
  war_priest: {
    id: "war_priest",
    sourceId: "war",
    category: "subclass_features",
    max: E.max(E.n(1), E.mod("WIS")),
    recharge: "longRest",
    tags: [],
  },
};

import { E } from "@/core/entities/rules/expr/expr";
import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const WATCHERS_RESOURCES: Record<string, ResourceTemplate> = {
  mortal_bulwark: {
    id: "mortal_bulwark",
    sourceId: "watchers",
    category: "subclass_features",
    max: E.n(1),
    recharge: "longRest",
    tags: [],
  },
};

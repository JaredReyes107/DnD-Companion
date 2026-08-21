import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const WATCHERS_RESOURCES: Record<string, ResourceTemplate> = {
  mortal_bulwark: {
    id: "mortal_bulwark",
    sourceId: "watchers",
    category: "subclass_features",
    scalingType: "fixed:1",
    recharge: "longRest",
    tags: [],
  },
};

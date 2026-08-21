import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const DEVOTION_RESOURCES: Record<string, ResourceTemplate> = {
  holy_nimbus: {
    id: "holy_nimbus",
    sourceId: "devotion",
    category: "subclass_features",
    scalingType: "fixed:1",
    recharge: "longRest",
    tags: [],
  },
};

import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const VENGEANCE_RESOURCES: Record<string, ResourceTemplate> = {
  avenging_angel: {
    id: "avenging_angel",
    sourceId: "vengeance",
    category: "subclass_features",
    scalingType: "fixed:1",
    recharge: "longRest",
    tags: [],
  },
};

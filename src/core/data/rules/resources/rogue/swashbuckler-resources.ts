import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const SWASHBUCKLER_RESOURCES: Record<string, ResourceTemplate> = {
  master_duelist: {
    id: "master_duelist",
    sourceId: "swashbuckler",
    category: "subclass_features",
    scalingType: "fixed:1",
    recharge: "shortRest",
    tags: ["combat"],
  },
};

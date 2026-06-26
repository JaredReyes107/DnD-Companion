import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const SPORES_RESOURCES: Record<string, ResourceTemplate> = {
  fungal_infestation: {
    id: "fungal_infestation",
    sourceId: "spores",
    category: "subclass_features",
    scalingType: "WIS",
    recharge: "longRest",
    tags: [],
  },
};

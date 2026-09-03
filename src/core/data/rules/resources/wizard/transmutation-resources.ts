import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const TRANSMUTATION_RESOURCES: Record<string, ResourceTemplate> = {
  shapechanger: {
    id: "shapechanger",
    sourceId: "transmutation",
    category: "subclass_features",
    scalingType: "fixed:1",
    recharge: "shortRest",
    tags: ["spells", "transformation"],
  },
};

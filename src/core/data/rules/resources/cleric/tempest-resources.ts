import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const TEMPEST_RESOURCES: Record<string, ResourceTemplate> = {
  wrath_of_the_storm: {
    id: "wrath_of_the_storm",
    sourceId: "tempest",
    category: "subclass_features",
    scalingType: "PB",
    recharge: "longRest",
    tags: ["combat", "reaction"],
  },
};

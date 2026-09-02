import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const CONJURATION_RESOURCES: Record<string, ResourceTemplate> = {
  benign_transposition: {
    id: "benign_transposition",
    sourceId: "conjuration",
    category: "subclass_features",
    scalingType: "fixed:1",
    recharge: "longRest",
    tags: ["movement"],
  },
};

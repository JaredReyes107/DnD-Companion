import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const INQUISITIVE_RESOURCES: Record<string, ResourceTemplate> = {
  unerring_eye: {
    id: "unerring_eye",
    sourceId: "inquisitive",
    category: "subclass_features",
    scalingType: "WIS",
    recharge: "longRest",
    tags: [],
  },
};

import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const BLADESINGING_RESOURCES: Record<string, ResourceTemplate> = {
  bladesong: {
    id: "bladesong",
    sourceId: "bladesinging",
    category: "subclass_features",
    scalingType: "PB",
    recharge: "longRest",
    tags: ["combat", "buff"],
  },
};

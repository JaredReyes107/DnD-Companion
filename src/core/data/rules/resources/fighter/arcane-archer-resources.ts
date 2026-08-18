import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const ARCANE_ARCHER_RESOURCES: Record<string, ResourceTemplate> = {
  arcane_shot: {
    id: "arcane_shot",
    sourceId: "arcane_archer",
    category: "subclass_features",
    scalingType: "fixed:2",
    recharge: "shortRest",
    tags: [],
  },
};

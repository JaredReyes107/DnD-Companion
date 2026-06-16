import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const GLAMOUR_RESOURCES: Record<string, ResourceTemplate> = {
  mantle_of_majesty: {
    id: "mantle_of_majesty",
    label: "Mantle of Majesty",
    sourceId: "glamour",
    category: "subclass_features",
    scalingType: "fixed:1",
    recharge: "longRest",
    tags: ["combat", "support"],
  },
  unbreakable_majesty: {
    id: "unbreakable_majesty",
    label: "Unbreakable Majesty",
    sourceId: "glamour",
    category: "subclass_features",
    scalingType: "fixed:1",
    recharge: "longRest",
    tags: ["combat"],
  },
};

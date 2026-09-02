import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const ABJURATION_RESOURCES: Record<string, ResourceTemplate> = {
  arcane_ward_create: {
    id: "arcane_ward_create",
    sourceId: "abjuration",
    category: "subclass_features",
    scalingType: "fixed:1",
    recharge: "longRest",
    tags: ["defense"],
  },

  arcane_ward_hp: {
    id: "arcane_ward_hp",
    sourceId: "abjuration",
    category: "subclass_features",
    scalingType: "class-level:*2", //TODO: Add multiple operators. *2 Lv + 5 Int mod
    recharge: "none",
    tags: ["defense"],
  },
};

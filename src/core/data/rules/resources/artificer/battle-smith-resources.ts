import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const BATTLE_SMITH_RESOURCES: Record<string, ResourceTemplate> = {
  arcane_jolt: {
    id: "arcane_jolt",
    sourceId: "battle_smith",
    category: "subclass_features",
    scalingType: "INTs",
    recharge: "longRest",
    tags: ["combat", "damage", "healing"],
  },
};

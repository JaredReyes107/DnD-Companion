import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const RESOURCES_LAND: Record<string, ResourceTemplate> = {
  natural_recovery: {
    id: "natural_recovery",
    sourceId: "land",
    category: "subclass_features",
    scalingType: "fixed:1",
    recharge: "longRest",
    tags: ["spellcasting"],
    // NOTE: tracks the once-per-day USE of the feature, not the slot levels
    // recovered. The actual spell-level math (half druid level, rounded up)
    // is a TODO for the spellcasting system once slot recovery is implemented.
  },
};
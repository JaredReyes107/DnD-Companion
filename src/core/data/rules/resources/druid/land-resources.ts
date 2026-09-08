import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const LAND_RESOURCES: Record<string, ResourceTemplate> = {
  natural_recovery: {
    id: "natural_recovery",
    category: "subclass_features",
    origin: { book: "PHB" },
    grantor: {
      system: "feature",
      featureId: "natural_recovery",
      obtainedVia: { via: "subclass", classId: "druid", subclassId: "land" },
    },

    scaling: { base: { kind: "fixed", value: 1 } },
    max: { kind: "value", amount: 1 },
    min: { kind: "value", amount: 0 },

    // NOTE: tracks the once-per-day USE of the feature, not the slot levels
    // recovered. The actual spell-level math (half druid level, rounded up)
    // is a TODO for the spellcasting system once slot recovery is implemented.
    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: ["spellcasting"],
  },
};

import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const STARS_RESOURCES: Record<string, ResourceTemplate> = {
  star_map_guiding_bolt: {
    id: "star_map_guiding_bolt",
    category: "subclass_features",
    origin: { book: "TCE" },
    grantor: {
      system: "feature",
      featureId: "star_map_guiding_bolt",
      obtainedVia: { via: "subclass", classId: "druid", subclassId: "stars" },
    },

    scaling: { base: { kind: "scaler", id: "PB" } },
    max: { kind: "formula", formula: { base: { kind: "scaler", id: "PB" } } },
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: ["spellcasting"],
  },
  cosmic_omen: {
    id: "cosmic_omen",
    category: "subclass_features",
    origin: { book: "TCE" },
    grantor: {
      system: "feature",
      featureId: "cosmic_omen",
      obtainedVia: { via: "subclass", classId: "druid", subclassId: "stars" },
    },

    scaling: { base: { kind: "scaler", id: "WIS" } },
    max: { kind: "formula", formula: { base: { kind: "scaler", id: "WIS" } } },
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: ["reaction", "support"],
  },
};

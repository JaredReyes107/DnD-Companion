import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const WILD_MAGIC_RESOURCES: Record<string, ResourceTemplate> = {
  magic_awareness: {
    id: "magic_awareness",
    category: "subclass_features",
    origin: { book: "TCE" },
    grantors: [
      {
        system: "feature",
        featureId: "magic_awareness",
        obtainedVia: {
          via: "subclass",
          classId: "barbarian",
          subclassId: "wild_magic",
        },
      },
    ],

    max: { kind: "formula", formula: { base: { kind: "scaler", id: "PB" } } },
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: ["utility"],
  },
  bolstering_magic: {
    id: "bolstering_magic",
    category: "subclass_features",
    origin: { book: "TCE" },
    grantors: [
      {
        system: "feature",
        featureId: "bolstering_magic",
        obtainedVia: {
          via: "subclass",
          classId: "barbarian",
          subclassId: "wild_magic",
        },
      },
    ],

    max: { kind: "formula", formula: { base: { kind: "scaler", id: "PB" } } },
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: ["support", "utility"],
  },
};

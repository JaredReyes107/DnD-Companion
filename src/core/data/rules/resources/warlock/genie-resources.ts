import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const GENIE_RESOURCES: Record<string, ResourceTemplate> = {
  bottled_respite: {
    id: "bottled_respite",
    category: "subclass_features",
    origin: { book: "TCE" },
    grantors: [
      {
        system: "feature",
        featureId: "bottled_respite",
        obtainedVia: {
          via: "subclass",
          classId: "warlock",
          subclassId: "genie",
        },
      },
    ],
    max: { kind: "value", amount: 1 },
    min: { kind: "value", amount: 0 },
    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: ["utility"],
  },
  genies_wrath: {
    id: "genies_wrath",
    category: "subclass_features",
    origin: { book: "TCE" },
    grantors: [
      {
        system: "feature",
        featureId: "genies_wrath",
        obtainedVia: {
          via: "subclass",
          classId: "warlock",
          subclassId: "genie",
        },
      },
    ],
    max: { kind: "value", amount: 1 },
    min: { kind: "value", amount: 0 },
    recharge: [{ trigger: { type: "perRound" }, amount: "full" }],
    tags: ["combat", "damage"],
  },
  elemental_gift_flight: {
    id: "elemental_gift_flight",
    category: "subclass_features",
    origin: { book: "TCE" },
    grantors: [
      {
        system: "feature",
        featureId: "elemental_gift_flight",
        obtainedVia: {
          via: "subclass",
          classId: "warlock",
          subclassId: "genie",
        },
      },
    ],
    max: { kind: "formula", formula: { base: { kind: "scaler", id: "PB" } } },
    min: { kind: "value", amount: 0 },
    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: ["movement"],
  },
  limited_wish: {
    id: "limited_wish",
    category: "subclass_features",
    origin: { book: "TCE" },
    grantors: [
      {
        system: "feature",
        featureId: "limited_wish",
        obtainedVia: {
          via: "subclass",
          classId: "warlock",
          subclassId: "genie",
        },
      },
    ],
    max: { kind: "value", amount: 1 },
    min: { kind: "value", amount: 0 },
    // TODO: Recharge rate. 1d4 long rests
    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: ["spells"],
  },
};

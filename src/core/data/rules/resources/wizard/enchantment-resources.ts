import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const ENCHANTMENT_RESOURCES: Record<string, ResourceTemplate> = {
  hypnotic_gaze: {
    id: "hypnotic_gaze",
    category: "subclass_features",
    origin: { book: "PHB" },
    grantors: [
      {
        system: "feature",
        featureId: "hypnotic_gaze",
        obtainedVia: {
          via: "subclass",
          classId: "wizard",
          subclassId: "enchantment",
        },
      },
    ],

    max: { kind: "value", amount: 1 },
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: [],
  },
  instinctive_charm: {
    id: "instinctive_charm",
    category: "subclass_features",
    origin: { book: "PHB" },
    grantors: [
      {
        system: "feature",
        featureId: "instinctive_charm",
        obtainedVia: {
          via: "subclass",
          classId: "wizard",
          subclassId: "enchantment",
        },
      },
    ],

    max: { kind: "value", amount: 1 },
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: [],
  },
};

import { E } from "@/core/entities/rules/expr/expr";
import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const ENCHANTMENT_RESOURCES: Record<string, ResourceTemplate> = {
  hypnotic_gaze: {
    id: "hypnotic_gaze",
    category: "subclass_features",
    max: E.n(1),

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

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: [],
  },
  instinctive_charm: {
    id: "instinctive_charm",
    category: "subclass_features",
    max: E.n(1),

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

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: [],
  },
};

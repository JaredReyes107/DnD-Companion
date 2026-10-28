import { E } from "@/core/entities/rules/expr/expr";
import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const GLORY_RESOURCES: Record<string, ResourceTemplate> = {
  glorious_defense: {
    id: "glorious_defense",
    category: "subclass_features",
    max: E.max(E.n(1), E.mod("CHA")),

    origin: { book: "TCE" },
    grantors: [
      {
        system: "feature",
        featureId: "glorious_defense",
        obtainedVia: {
          via: "subclass",
          classId: "paladin",
          subclassId: "glory",
        },
      },
    ],

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: [],
  },
  living_legend: {
    id: "living_legend",
    category: "subclass_features",
    max: E.n(1),

    origin: { book: "TCE" },
    grantors: [
      {
        system: "feature",
        featureId: "living_legend",
        obtainedVia: {
          via: "subclass",
          classId: "paladin",
          subclassId: "glory",
        },
      },
    ],

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: [],
  },
  living_legend_precise_attack: {
    id: "living_legend_precise_attack",
    category: "subclass_features",
    max: E.n(1),

    origin: { book: "TCE" },
    grantors: [
      {
        system: "feature",
        featureId: "living_legend_precise_attack",
        obtainedVia: {
          via: "subclass",
          classId: "paladin",
          subclassId: "glory",
        },
      },
    ],

    recharge: [{ trigger: { type: "roundStart" }, amount: "full" }],
    tags: [],
  },
};

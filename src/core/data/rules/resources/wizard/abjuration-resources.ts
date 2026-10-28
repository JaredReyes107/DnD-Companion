import { ResourceTemplate } from "@/core/entities/rules/resource-template";
import { E } from "@/core/entities/rules/expr/expr";

export const ABJURATION_RESOURCES: Record<string, ResourceTemplate> = {
  arcane_ward_create: {
    id: "arcane_ward_create",
    category: "subclass_features",
    max: E.n(1),

    origin: { book: "PHB" },
    grantors: [
      {
        system: "feature",
        featureId: "arcane_ward_create",
        obtainedVia: {
          via: "subclass",
          classId: "wizard",
          subclassId: "abjuration",
        },
      },
    ],

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: ["defense"],
  },

  arcane_ward_hp: {
    id: "arcane_ward_hp",
    category: "subclass_features",
    max: E.add(E.mul(E.classLevel("wizard"), E.n(2)), E.mod("INT")),

    origin: { book: "PHB" },
    grantors: [
      {
        system: "feature",
        featureId: "arcane_ward_hp",
        obtainedVia: {
          via: "subclass",
          classId: "wizard",
          subclassId: "abjuration",
        },
      },
    ],

    recharge: [],
    tags: ["defense"],
  },
};

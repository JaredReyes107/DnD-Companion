import { E } from "@/core/entities/rules/expr/expr";
import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const ELOQUENCE_RESOURCES: Record<string, ResourceTemplate> = {
  universal_speech: {
    id: "universal_speech",
    category: "subclass_features",
    max: E.n(1),

    origin: { book: "TCE" },
    grantors: [
      {
        system: "feature",
        featureId: "universal_speech",
        obtainedVia: {
          via: "subclass",
          classId: "bard",
          subclassId: "eloquence",
        },
      },
    ],

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: [],
  },
  infectious_inspiration: {
    id: "infectious_inspiration",
    category: "subclass_features",
    max: E.max(E.n(1), E.mod("CHA")),

    origin: { book: "TCE" },
    grantors: [
      {
        system: "feature",
        featureId: "infectious_inspiration",
        obtainedVia: {
          via: "subclass",
          classId: "bard",
          subclassId: "eloquence",
        },
      },
    ],

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: [],
  },
};

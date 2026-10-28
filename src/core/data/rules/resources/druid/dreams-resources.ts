import { ResourceTemplate } from "@/core/entities/rules/resource-template";
import { E } from "@/core/entities/rules/expr/expr";

export const DREAMS_RESOURCES: Record<string, ResourceTemplate> = {
  balm_of_the_summer_court: {
    id: "balm_of_the_summer_court",
    category: "subclass_features",
    max: E.classLevel("druid"),

    origin: { book: "XGE" },
    grantors: [
      {
        system: "feature",
        featureId: "balm_of_the_summer_court",
        obtainedVia: {
          via: "subclass",
          classId: "druid",
          subclassId: "dreams",
        },
      },
    ],

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: ["healing", "support"],
  },
  hidden_paths: {
    id: "hidden_paths",
    category: "subclass_features",
    max: E.max(E.n(1), E.mod("WIS")),

    origin: { book: "XGE" },
    grantors: [
      {
        system: "feature",
        featureId: "hidden_paths",
        obtainedVia: {
          via: "subclass",
          classId: "druid",
          subclassId: "dreams",
        },
      },
    ],

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: ["movement", "support"],
  },
  walker_in_dreams: {
    id: "walker_in_dreams",
    category: "subclass_features",
    max: E.n(1),

    origin: { book: "XGE" },
    grantors: [
      {
        system: "feature",
        featureId: "walker_in_dreams",
        obtainedVia: {
          via: "subclass",
          classId: "druid",
          subclassId: "dreams",
        },
      },
    ],

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: ["spellcasting", "utility"],
  },
};

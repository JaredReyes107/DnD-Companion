import { E } from "@/core/entities/rules/expr/expr";
import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const GRAVE_RESOURCES: Record<string, ResourceTemplate> = {
  eyes_of_the_grave: {
    id: "eyes_of_the_grave",
    category: "subclass_features",
    max: E.max(E.n(1), E.mod("WIS")),

    origin: { book: "XGE" },
    grantors: [
      {
        system: "feature",
        featureId: "eyes_of_the_grave",
        obtainedVia: {
          via: "subclass",
          classId: "cleric",
          subclassId: "grave",
        },
      },
    ],

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: [],
  },
  sentinel_at_deaths_door: {
    id: "sentinel_at_deaths_door",
    category: "subclass_features",
    max: E.max(E.n(1), E.mod("WIS")),

    origin: { book: "XGE" },
    grantors: [
      {
        system: "feature",
        featureId: "sentinel_at_deaths_door",
        obtainedVia: {
          via: "subclass",
          classId: "cleric",
          subclassId: "grave",
        },
      },
    ],

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: [],
  },
};

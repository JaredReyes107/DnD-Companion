import { E } from "@/core/entities/rules/expr/expr";
import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const TWILIGHT_RESOURCES: Record<string, ResourceTemplate> = {
  eyes_of_night: {
    id: "eyes_of_night",
    category: "subclass_features",
    max: E.n(1),

    origin: { book: "TCE" },
    grantors: [
      {
        system: "feature",
        featureId: "eyes_of_night",
        obtainedVia: {
          via: "subclass",
          classId: "cleric",
          subclassId: "twilight",
        },
      },
    ],

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: [],
  },
  steps_of_the_night: {
    id: "steps_of_the_night",
    category: "subclass_features",
    max: E.pb(),

    origin: { book: "TCE" },
    grantors: [
      {
        system: "feature",
        featureId: "steps_of_the_night",
        obtainedVia: {
          via: "subclass",
          classId: "cleric",
          subclassId: "twilight",
        },
      },
    ],

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: [],
  },
};

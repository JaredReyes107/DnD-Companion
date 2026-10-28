import { E } from "@/core/entities/rules/expr/expr";
import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const SWARMKEEPER_RESOURCES: Record<string, ResourceTemplate> = {
  gathered_swarm: {
    id: "gathered_swarm",
    category: "subclass_features",
    max: E.n(1),

    origin: { book: "TCE" },
    grantors: [
      {
        system: "feature",
        featureId: "gathered_swarm",
        obtainedVia: {
          via: "subclass",
          classId: "ranger",
          subclassId: "swarmkeeper",
        },
      },
    ],

    recharge: [{ trigger: { type: "roundStart" }, amount: "full" }],
    tags: ["combat"],
  },
  writhing_tide: {
    id: "writhing_tide",
    category: "subclass_features",
    max: E.pb(),

    origin: { book: "TCE" },
    grantors: [
      {
        system: "feature",
        featureId: "writhing_tide",
        obtainedVia: {
          via: "subclass",
          classId: "ranger",
          subclassId: "swarmkeeper",
        },
      },
    ],

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: ["movement", "utility"],
  },
  swarming_dispersal: {
    id: "swarming_dispersal",
    category: "subclass_features",
    max: E.pb(),

    origin: { book: "TCE" },
    grantors: [
      {
        system: "feature",
        featureId: "swarming_dispersal",
        obtainedVia: {
          via: "subclass",
          classId: "ranger",
          subclassId: "swarmkeeper",
        },
      },
    ],

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: ["defense", "movement"],
  },
};

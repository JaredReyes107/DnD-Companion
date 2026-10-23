import { E } from "@/core/entities/rules/expr/expr";
import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const SWARMKEEPER_RESOURCES: Record<string, ResourceTemplate> = {
  gathered_swarm: {
    id: "gathered_swarm",
    sourceId: "swarmkeeper",
    category: "subclass_features",
    max: E.n(1),
    recharge: "perRound",
    tags: ["combat"],
  },

  writhing_tide: {
    id: "writhing_tide",
    sourceId: "swarmkeeper",
    category: "subclass_features",
    max: E.pb(),
    recharge: "longRest",
    tags: ["movement", "utility"],
  },

  swarming_dispersal: {
    id: "swarming_dispersal",
    sourceId: "swarmkeeper",
    category: "subclass_features",
    max: E.pb(),
    recharge: "longRest",
    tags: ["defense", "movement"],
  },
};

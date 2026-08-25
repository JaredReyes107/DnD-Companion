import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const SWARMKEEPER_RESOURCES: Record<string, ResourceTemplate> = {
  gathered_swarm: {
    id: "gathered_swarm",
    sourceId: "swarmkeeper",
    category: "subclass_features",
    scalingType: "fixed:1",
    recharge: "perRound",
    tags: ["combat"],
  },

  writhing_tide: {
    id: "writhing_tide",
    sourceId: "swarmkeeper",
    category: "subclass_features",
    scalingType: "PB",
    recharge: "longRest",
    tags: ["movement", "utility"],
  },

  swarming_dispersal: {
    id: "swarming_dispersal",
    sourceId: "swarmkeeper",
    category: "subclass_features",
    scalingType: "PB",
    recharge: "longRest",
    tags: ["defense", "movement"],
  },
};

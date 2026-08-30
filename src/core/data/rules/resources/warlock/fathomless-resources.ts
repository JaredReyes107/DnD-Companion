import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const FATHOMLESS_RESOURCES: Record<string, ResourceTemplate> = {
  tentacle_of_the_deeps: {
    id: "tentacle_of_the_deeps",
    sourceId: "fathomless",
    category: "subclass_features",
    scalingType: "PB",
    recharge: "longRest",
    tags: ["combat", "damage"],
  },

  grasping_tentacles: {
    id: "grasping_tentacles",
    sourceId: "fathomless",
    category: "subclass_features",
    scalingType: "fixed:1",
    recharge: "longRest",
    tags: ["spells", "control"],
  },

  fathomless_plunge: {
    id: "fathomless_plunge",
    sourceId: "fathomless",
    category: "subclass_features",
    scalingType: "fixed:1",
    recharge: "shortRest",
    tags: ["movement"],
  },
};

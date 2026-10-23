import { E } from "@/core/entities/rules/expr/expr";
import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const TWILIGHT_RESOURCES: Record<string, ResourceTemplate> = {
  eyes_of_night: {
    id: "eyes_of_night",
    sourceId: "twilight",
    category: "subclass_features",
    max: E.n(1),
    recharge: "longRest",
    tags: [],
  },
  steps_of_the_night: {
    id: "steps_of_the_night",
    sourceId: "twilight",
    category: "subclass_features",
    max: E.pb(),
    recharge: "longRest",
    tags: [],
  },
};

import { E } from "@/core/entities/rules/expr/expr";
import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const ELOQUENCE_RESOURCES: Record<string, ResourceTemplate> = {
  universal_speech: {
    id: "universal_speech",
    sourceId: "eloquence",
    category: "subclass_features",
    max: E.n(1),
    recharge: "longRest",
    tags: [],
  },
  infectious_inspiration: {
    id: "infectious_inspiration",
    sourceId: "eloquence",
    category: "subclass_features",
    max: E.max(E.n(1), E.mod("CHA")),
    recharge: "longRest",
    tags: [],
  },
};

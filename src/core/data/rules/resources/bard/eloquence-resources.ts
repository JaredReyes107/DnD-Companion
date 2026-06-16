import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const ELOQUENCE_RESOURCES: Record<string, ResourceTemplate> = {
  universal_speech: {
    id: "universal_speech",
    label: "",
    sourceId: "eloquence",
    category: "subclass_features",
    scalingType: "fixed:1",
    recharge: "longRest",
    tags: [],
  },
  infectious_inspiration: {
    id: "infectious_inspiration",
    label: "",
    sourceId: "eloquence",
    category: "subclass_features",
    scalingType: "CHA",
    recharge: "longRest",
    tags: [],
  },
};

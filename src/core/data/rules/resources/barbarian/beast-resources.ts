import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const BEAST_RESOURCES: Record<string, ResourceTemplate> = {
  infectious_fury: {
    id: "infectious_fury",
    label: "Infectious Fury",
    sourceId: "beast",
    category: "subclass_features",
    scalingType: "PB",
    recharge: "longRest",
    tags: ["combat"],
  },
  call_the_hunt: {
    id: "call_the_hunt",
    label: "Call the Hunt",
    sourceId: "beast",
    category: "subclass_features",
    scalingType: "PB",
    recharge: "longRest",
    tags: ["combat", "support"],
  },
};

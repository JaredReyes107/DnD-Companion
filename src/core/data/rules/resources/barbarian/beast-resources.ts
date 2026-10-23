import { E } from "@/core/entities/rules/expr/expr";
import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const BEAST_RESOURCES: Record<string, ResourceTemplate> = {
  infectious_fury: {
    id: "infectious_fury",
    sourceId: "beast",
    category: "subclass_features",
    max: E.pb(),
    recharge: "longRest",
    tags: ["combat"],
  },
  call_the_hunt: {
    id: "call_the_hunt",
    sourceId: "beast",
    category: "subclass_features",
    max: E.pb(),
    recharge: "longRest",
    tags: ["combat", "support"],
  },
};

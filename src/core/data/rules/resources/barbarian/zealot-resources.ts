import { E } from "@/core/entities/rules/expr/expr";
import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const ZEALOT_RESOURCES: Record<string, ResourceTemplate> = {
  divine_fury: {
    id: "divine_fury",
    sourceId: "zealot",
    category: "subclass_features",
    max: E.n(1),
    recharge: "perTurn",
    tags: ["combat"],
  },
  fanatical_focus: {
    id: "fanatical_focus",
    sourceId: "zealot",
    category: "subclass_features",
    max: E.n(1),
    recharge: "custom",
    tags: ["defense"],
  },
  zealous_presence: {
    id: "zealous_presence",
    sourceId: "zealot",
    category: "subclass_features",
    max: E.n(1),
    recharge: "longRest",
    tags: ["combat", "support"],
  },
};

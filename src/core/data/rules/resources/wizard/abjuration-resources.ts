import { ResourceTemplate } from "@/core/entities/rules/resource-template";
import { E } from "@/core/entities/rules/expr/expr";

export const ABJURATION_RESOURCES: Record<string, ResourceTemplate> = {
  arcane_ward_create: {
    id: "arcane_ward_create",
    sourceId: "abjuration",
    category: "subclass_features",
    max: E.n(1),
    recharge: "longRest",
    tags: ["defense"],
  },

  arcane_ward_hp: {
    id: "arcane_ward_hp",
    sourceId: "abjuration",
    category: "subclass_features",
    max: E.add(E.mul(E.classLevel("wizard"), E.n(2)), E.mod("INT")),
    recharge: "none",
    tags: ["defense"],
  },
};

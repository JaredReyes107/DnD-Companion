import { E } from "@/core/entities/rules/expr/expr";
import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const BATTLE_SMITH_RESOURCES: Record<string, ResourceTemplate> = {
  arcane_jolt: {
    id: "arcane_jolt",
    sourceId: "battle_smith",
    category: "subclass_features",
    max: E.max(E.n(1), E.mod("INT")),
    recharge: "longRest",
    tags: ["combat", "damage", "healing"],
  },
};

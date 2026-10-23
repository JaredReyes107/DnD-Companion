import { E } from "@/core/entities/rules/expr/expr";
import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const GLORY_RESOURCES: Record<string, ResourceTemplate> = {
  glorious_defense: {
    id: "glorious_defense",
    sourceId: "glory",
    category: "subclass_features",
    max: E.max(E.n(1), E.mod("CHA")),
    recharge: "longRest",
    tags: [],
  },
  living_legend: {
    id: "living_legend",
    sourceId: "glory",
    category: "subclass_features",
    max: E.n(1),
    recharge: "longRest",
    tags: [],
  },
  living_legend_precise_attack: {
    id: "living_legend_precise_attack",
    sourceId: "glory",
    category: "subclass_features",
    max: E.n(1),
    recharge: "perTurn",
    tags: [],
  },
};

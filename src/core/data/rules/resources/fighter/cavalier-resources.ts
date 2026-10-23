import { E } from "@/core/entities/rules/expr/expr";
import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const CAVALIER_RESOURCES: Record<string, ResourceTemplate> = {
  unwavering_mark_retaliate: {
    id: "unwavering_mark_retaliate",
    sourceId: "cavalier",
    category: "subclass_features",
    max: E.max(E.n(1), E.mod("CHA")),
    recharge: "longRest",
    tags: ["combat", "tank"],
    // Gates the retaliation attack only — marking a creature on hit is free.
  },
  warding_maneuver: {
    id: "warding_maneuver",
    sourceId: "cavalier",
    category: "subclass_features",
    max: E.max(E.n(1), E.mod("CON")),
    recharge: "longRest",
    tags: ["defense", "damage-reduction", "reaction"],
  },
  vigilant_defender: {
    id: "vigilant_defender",
    sourceId: "cavalier",
    category: "subclass_features",
    max: E.n(1),
    recharge: "perTurn",
    tags: ["combat", "reaction"],
  },
};

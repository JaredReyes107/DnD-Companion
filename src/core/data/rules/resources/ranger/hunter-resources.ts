import { E } from "@/core/entities/rules/expr/expr";
import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const HUNTER_RESOURCES: Record<string, ResourceTemplate> = {
  colossus_slayer: {
    id: "colossus_slayer",
    sourceId: "hunter",
    category: "subclass_features",
    max: E.n(1),
    // Any turn
    recharge: "perTurn",
    tags: [],
  },
  horde_breaker: {
    id: "horde_breaker",
    sourceId: "hunter",
    category: "subclass_features",
    max: E.n(1),
    // Own turn
    recharge: "perRound",
    tags: [],
  },
};

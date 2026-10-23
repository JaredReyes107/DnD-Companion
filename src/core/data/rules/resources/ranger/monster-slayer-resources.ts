import { E } from "@/core/entities/rules/expr/expr";
import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const MONSTER_SLAYER_RESOURCES: Record<string, ResourceTemplate> = {
  hunters_sense: {
    id: "hunters_sense",
    sourceId: "monster_slayer",
    category: "subclass_features",
    max: E.max(E.n(1), E.mod("WIS")),
    recharge: "longRest",
    tags: [],
  },
  magic_users_nemesis: {
    id: "magic_users_nemesis",
    sourceId: "monster_slayer",
    category: "subclass_features",
    max: E.n(1),
    recharge: "shortRest",
    tags: [],
  },
};

import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const MONSTER_SLAYER_RESOURCES: Record<string, ResourceTemplate> = {
  hunters_sense: {
    id: "hunters_sense",
    sourceId: "monster_slayer",
    category: "subclass_features",
    scalingType: "WIS",
    recharge: "longRest",
    tags: [],
  },
  magic_users_nemesis: {
    id: "magic_users_nemesis",
    sourceId: "monster_slayer",
    category: "subclass_features",
    scalingType: "fixed:1",
    recharge: "shortRest",
    tags: [],
  },
};

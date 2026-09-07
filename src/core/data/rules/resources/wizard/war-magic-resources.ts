import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const WAR_MAGIC_RESOURCES: Record<string, ResourceTemplate> = {
  power_surge: {
    id: "power_surge",
    sourceId: "war_magic",
    category: "subclass_features",
    scalingType: "INT",
    // TODO: Resets to 1 on longRest, not max
    // TODO: Gains 1 if = 0 on shortRest
    recharge: "longRest",
    tags: ["combat", "damage"],
  },
  power_surge_turn_uses: {
    id: "power_surge",
    sourceId: "war_magic",
    category: "subclass_features",
    scalingType: "INT",
    recharge: "perTurn",
    tags: ["combat", "damage"],
  },
};

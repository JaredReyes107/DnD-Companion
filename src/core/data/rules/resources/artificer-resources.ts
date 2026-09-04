import { ResourceTemplate } from "@/core/entities/rules/resource-template";
import { ALCHEMIST_RESOURCES } from "./artificer/alchemist-resources";
import { ARMORER_RESOURCES } from "./artificer/armorer-resources";
import { ARTILLERIST_RESOURCES } from "./artificer/artillerist-resources";
import { BATTLE_SMITH_RESOURCES } from "./artificer/battle-smith-resources";

const SUBCLASS_RESOURCES: Record<string, ResourceTemplate> = {
  ...ALCHEMIST_RESOURCES,
  ...ARMORER_RESOURCES,
  ...ARTILLERIST_RESOURCES,
  ...BATTLE_SMITH_RESOURCES,
};

export const ARTIFICER_RESOURCES: Record<string, ResourceTemplate> = {
  ...SUBCLASS_RESOURCES,

  magical_tinkering: {
    id: "magical_tinkering",
    sourceId: "artificer",
    category: "class_features",
    scalingType: "INT",
    recharge: "none",
    tags: ["utility"],
  },

  infused_items: {
    id: "infused_items",
    sourceId: "artificer",
    category: "class_features",
    scalingType: "infused-items",
    recharge: "none",
    tags: ["utility"],
  },

  flash_of_genius: {
    id: "flash_of_genius",
    sourceId: "artificer",
    category: "class_features",
    scalingType: "INT",
    recharge: "longRest",
    tags: ["utility"],
  },

  spell_storing_item_limit: {
    id: "spell_storing_item_limit",
    sourceId: "artificer",
    category: "class_features",
    scalingType: "fixed:1",
    recharge: "longRest",
    tags: ["spells"],
  },
};

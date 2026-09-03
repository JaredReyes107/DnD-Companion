import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const ARTIFICER_RESOURCES: Record<string, ResourceTemplate> = {
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

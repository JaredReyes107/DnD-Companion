import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const ARCANE_TRICKSTER_RESOURCES: Record<string, ResourceTemplate> = {
  spell_thief: {
    id: "spell_thief",
    sourceId: "arcane_trickster",
    category: "subclass_features",
    scalingType: "fixed:1",
    recharge: "longRest",
    tags: [],
  },
};

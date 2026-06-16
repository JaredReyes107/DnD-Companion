import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const WHISPERS_RESOURCES: Record<string, ResourceTemplate> = {
  words_of_terror: {
    id: "words_of_terror",
    label: "",
    sourceId: "whispers",
    category: "subclass_features",
    scalingType: "fixed:1",
    recharge: "shortRest",
    tags: ["combat"],
  },
  mantle_of_whispers_capture_shadow: {
    id: "mantle_of_whispers_capture_shadow",
    label: "",
    sourceId: "whispers",
    category: "subclass_features",
    scalingType: "fixed:1",
    recharge: "shortRest",
    tags: [],
  },
  mantle_of_whispers_disguise: {
    id: "mantle_of_whispers_disguise",
    label: "",
    sourceId: "whispers",
    category: "subclass_features",
    scalingType: "fixed:1",
    recharge: "shortRest",
    tags: [],
  },
  shadow_lore: {
    id: "shadow_lore",
    label: "",
    sourceId: "whisper",
    category: "subclass_features",
    scalingType: "fixed:1",
    recharge: "longRest",
    tags: ["combat"],
  },
};

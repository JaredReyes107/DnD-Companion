import { ResourceTemplate } from "@/game/types/templates/resource-template";

export const RESOURCES_WARLOCK: Record<string, ResourceTemplate> = {
  pact_slots: {
    id: "pact_slots",
    label: "Pact Slots",
    sourceId: "spellcasting", //TODO: Change depending on the source of the Spellcasting feature
    category: "pact_slots",
    scalingType: "spellcasting",
    recharge: "shortRest",
    tags: ["spellcasting"],
  },
  mystic_arcanum_6: {
    id: "mystic_arcanum_6",
    label: "Lv. 6",
    sourceId: "spellcasting", //TODO: Change depending on the source of the Spellcasting feature
    category: "pact_slots",
    scalingType: "spellcasting",
    recharge: "longRest",
    tags: ["spellcasting"],
  },
  mystic_arcanum_7: {
    id: "mystic_arcanum_7",
    label: "Lv. 7",
    sourceId: "spellcasting", //TODO: Change depending on the source of the Spellcasting feature
    category: "pact_slots",
    scalingType: "spellcasting",
    recharge: "longRest",
    tags: ["spellcasting"],
  },
  mystic_arcanum_8: {
    id: "mystic_arcanum_8",
    label: "Lv. 8",
    sourceId: "spellcasting", //TODO: Change depending on the source of the Spellcasting feature
    category: "pact_slots",
    scalingType: "spellcasting",
    recharge: "longRest",
    tags: ["spellcasting"],
  },
  mystic_arcanum_9: {
    id: "mystic_arcanum_9",
    label: "Lv. 9",
    sourceId: "spellcasting", //TODO: Change depending on the source of the Spellcasting feature
    category: "pact_slots",
    scalingType: "spellcasting",
    recharge: "longRest",
    tags: ["spellcasting"],
  },
};

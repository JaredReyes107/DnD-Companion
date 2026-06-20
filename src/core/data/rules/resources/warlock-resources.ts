import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const RESOURCES_WARLOCK: Record<string, ResourceTemplate> = {
  pact_slots: {
    id: "pact_slots",
    sourceId: "spellcasting", //TODO: Change depending on the source of the Spellcasting feature
    category: "pact_slots",
    scalingType: "spellcasting",
    recharge: "shortRest",
    tags: ["spellcasting"],
  },
  mystic_arcanum_6: {
    id: "mystic_arcanum_6",
    sourceId: "spellcasting", //TODO: Change depending on the source of the Spellcasting feature
    category: "pact_slots",
    scalingType: "spellcasting",
    recharge: "longRest",
    tags: ["spellcasting"],
  },
  mystic_arcanum_7: {
    id: "mystic_arcanum_7",
    sourceId: "spellcasting", //TODO: Change depending on the source of the Spellcasting feature
    category: "pact_slots",
    scalingType: "spellcasting",
    recharge: "longRest",
    tags: ["spellcasting"],
  },
  mystic_arcanum_8: {
    id: "mystic_arcanum_8",
    sourceId: "spellcasting", //TODO: Change depending on the source of the Spellcasting feature
    category: "pact_slots",
    scalingType: "spellcasting",
    recharge: "longRest",
    tags: ["spellcasting"],
  },
  mystic_arcanum_9: {
    id: "mystic_arcanum_9",
    sourceId: "spellcasting", //TODO: Change depending on the source of the Spellcasting feature
    category: "pact_slots",
    scalingType: "spellcasting",
    recharge: "longRest",
    tags: ["spellcasting"],
  },
};

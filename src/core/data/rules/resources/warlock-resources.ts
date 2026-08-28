import { ResourceTemplate } from "@/core/entities/rules/resource-template";
import { ELDRITCH_INVOCATIONS_RESOURCES } from "./warlock/eldritch-invocations-resources";

const SUBCLASSES_RESOURCES: Record<string, ResourceTemplate> = {};

const PACT_BOON_RESOURCES: Record<string, ResourceTemplate> = {
  pact_of_the_talisman_aid: {
    id: "pact_of_the_talisman_aid",
    sourceId: "pact_of_the_talisman",
    category: "class_features",
    scalingType: "PB",
    recharge: "longRest",
    tags: ["skill", "bonus"],
  },
};

export const WARLOCK_RESOURCES: Record<string, ResourceTemplate> = {
  ...SUBCLASSES_RESOURCES,
  ...ELDRITCH_INVOCATIONS_RESOURCES,
  ...PACT_BOON_RESOURCES,

  pact_slots: {
    id: "pact_slots",
    sourceId: "pact_magic",
    category: "pact_slots",
    scalingType: "spellcasting",
    recharge: "shortRest",
    tags: ["spellcasting"],
  },
  mystic_arcanum_6: {
    id: "mystic_arcanum_6",
    sourceId: "mystic_arcanum",
    category: "pact_slots",
    scalingType: "spellcasting",
    recharge: "longRest",
    tags: ["spellcasting"],
  },
  mystic_arcanum_7: {
    id: "mystic_arcanum_7",
    sourceId: "mystic_arcanum",
    category: "pact_slots",
    scalingType: "spellcasting",
    recharge: "longRest",
    tags: ["spellcasting"],
  },
  mystic_arcanum_8: {
    id: "mystic_arcanum_8",
    sourceId: "mystic_arcanum",
    category: "pact_slots",
    scalingType: "spellcasting",
    recharge: "longRest",
    tags: ["spellcasting"],
  },
  mystic_arcanum_9: {
    id: "mystic_arcanum_9",
    sourceId: "mystic_arcanum",
    category: "pact_slots",
    scalingType: "spellcasting",
    recharge: "longRest",
    tags: ["spellcasting"],
  },
  eldritch_master: {
    id: "eldritch_master",
    sourceId: "eldritch_master",
    category: "class_features",
    scalingType: "fixed:1",
    recharge: "longRest",
  },
};

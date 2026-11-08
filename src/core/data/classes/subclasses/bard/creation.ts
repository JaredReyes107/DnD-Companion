import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const CREATION: SubclassTemplate = {
  id: "creation",
  classId: "bard",
  source: "Tasha's Cauldron of Everything",

  featuresByLevel: {
    3: [
      {
        id: "bard.creation.mote_of_potential",
        source: "subclass" as const,
        level: 3,
        tags: [],
        // TODO: Inspiration hook
      },
      {
        id: "bard.creation.performance_of_creation",
        source: "subclass" as const,
        level: 3,
        grants: [
          { type: "action", id: "performance_of_creation" },
          { type: "resource", id: "performance_of_creation" },
        ],
        tags: [],
        // TODO: Fallback resource (Spell Slot lv. > 1)
      },
    ],

    6: [
      {
        id: "bard.creation.animating_performance",
        source: "subclass" as const,
        level: 6,
        grants: [
          { type: "action", id: "animating_performance" },
          { type: "resource", id: "animating_performance" },
        ],
        tags: [],
        // TODO: Fallback resource (Spell Slot lv. > 2)
        // TODO: Summon support (BA to act, on your initiative, etc)
      },
    ],

    14: [
      {
        id: "bard.creation.creative_crescendo",
        source: "subclass" as const,
        level: 14,
        tags: [],
      },
    ],
  },
};

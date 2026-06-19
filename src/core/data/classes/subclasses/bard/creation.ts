import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const CREATION: SubclassTemplate = {
  id: "creation",
  classId: "bard",
  source: "Tasha's Cauldron of Everything",

  featuresByLevel: {
    3: [
      {
        id: "mote_of_potential",
        source: "subclass" as const,
        level: 3,
        tags: [],
        // TODO: Inspiration hook
      },
      {
        id: "performance_of_creation",
        source: "subclass" as const,
        level: 3,
        resources: ["performance_of_creation"],
        actions: ["performance_of_creation"],
        tags: [],
        // TODO: Fallback resource (Spell Slot lv. > 1)
      },
    ],

    6: [
      {
        id: "animating_performance",
        source: "subclass" as const,
        level: 6,
        resources: ["animating_performance"],
        actions: ["animating_performance"],
        tags: [],
        // TODO: Fallback resource (Spell Slot lv. > 2)
        // TODO: Summon support (BA to act, on your initiative, etc)
      },
    ],

    14: [
      {
        id: "creative_crescendo",
        source: "subclass" as const,
        level: 14,
        tags: [],
      },
    ],
  },
};

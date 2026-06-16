import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const CREATION: SubclassTemplate = {
  id: "creation",
  classId: "bard",
  name: "College of Creation",
  source: "Tasha's Cauldron of Everything",

  featuresByLevel: {
    3: [
      {
        id: "mote_of_potential",
        label: "",
        source: "subclass" as const,
        level: 3,
        description: "",
        tags: [],
        // TODO: Inspiration hook
      },
      {
        id: "performance_of_creation",
        label: "",
        source: "subclass" as const,
        level: 3,
        description: "",
        resources:  ["performance_of_creation"],
        actions: ["performance_of_creation"],
        tags: [],
        // TODO: Fallback resource (Spell Slot lv. > 1)
      },
    ],

    6: [
      {
        id: "animating_performance",
        label: "Animating Performance",
        source: "subclass" as const,
        level: 6,
        description: "",
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
        label: "Creative Crescendo",
        source: "subclass" as const,
        level: 14,
        description: "",
        tags: [],
      },
    ],
  },
};

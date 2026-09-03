import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const ENCHANTMENT: SubclassTemplate = {
  id: "enchantment",
  classId: "wizard",
  source: "Player's Handbook",

  featuresByLevel: {
    2: [
      {
        id: "enchantment_savant",
        source: "subclass" as const,
        level: 2,
        tags: ["proficiency", "passive"],
      },
      {
        id: "hypnotic_gaze",
        source: "subclass" as const,
        level: 2,
        grants: [
          { type: "resource", id: "hypnotic_gaze" },
          { type: "action", id: "hypnotic_gaze_initiate" },
          { type: "action", id: "hypnotic_gaze_maintain" },
        ],
        tags: ["control"],
      },
    ],

    6: [
      {
        id: "instinctive_charm",
        source: "subclass" as const,
        level: 6,
        grants: [{ type: "action", id: "instinctive_charm" }],
        tags: ["defense", "reaction", "control"],
      },
    ],

    10: [
      {
        id: "split_enchantment",
        source: "subclass" as const,
        level: 10,
        tags: [],
      },
    ],

    14: [
      {
        id: "alter_memories",
        source: "subclass" as const,
        level: 14,
        grants: [{ type: "action", id: "alter_memories" }],
        tags: ["control", "utility"],
      },
    ],
  },
};

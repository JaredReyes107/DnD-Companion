import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const ENCHANTMENT: SubclassTemplate = {
  id: "enchantment",
  classId: "wizard",
  source: "Player's Handbook",
  progression: {
    2: [
      "wizard.enchantment.enchantment_savant",
      "wizard.enchantment.hypnotic_gaze",
    ],
    6: ["wizard.enchantment.instinctive_charm"],
    10: ["wizard.enchantment.split_enchantment"],
    14: ["wizard.enchantment.alter_memories"],
  },

  featuresByLevel: {
    2: [
      {
        id: "wizard.enchantment.enchantment_savant",
        source: "subclass" as const,
        level: 2,
        tags: ["proficiency", "passive"],
      },
      {
        id: "wizard.enchantment.hypnotic_gaze",
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
        id: "wizard.enchantment.instinctive_charm",
        source: "subclass" as const,
        level: 6,
        grants: [{ type: "action", id: "instinctive_charm" }],
        tags: ["defense", "reaction", "control"],
      },
    ],

    10: [
      {
        id: "wizard.enchantment.split_enchantment",
        source: "subclass" as const,
        level: 10,
        tags: [],
      },
    ],

    14: [
      {
        id: "wizard.enchantment.alter_memories",
        source: "subclass" as const,
        level: 14,
        grants: [{ type: "action", id: "alter_memories_erase" }],
        tags: ["control", "utility"],
      },
    ],
  },
};

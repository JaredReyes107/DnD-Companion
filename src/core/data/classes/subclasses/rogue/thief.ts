import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const THIEF: SubclassTemplate = {
  id: "thief",
  classId: "rogue",
  source: "Player's Handbook",
  progression: {
    3: ["rogue.thief.fast_hands", "rogue.thief.second_story_work"],
    9: ["rogue.thief.supreme_sneak"],
    13: ["rogue.thief.use_magic_device"],
    17: ["rogue.thief.thief_reflexes"],
  },

  featuresByLevel: {
    3: [
      {
        id: "rogue.thief.fast_hands",
        source: "subclass" as const,
        level: 3,
        grants: [{ type: "action", id: "fast_hands" }],
        tags: ["utility"],
      },
      {
        id: "rogue.thief.second_story_work",
        source: "subclass" as const,
        level: 3,
        tags: ["movement"],
      },
    ],

    9: [
      {
        id: "rogue.thief.supreme_sneak",
        source: "subclass" as const,
        level: 9,
        grants: [{ type: "action", id: "supreme_sneak" }],
        tags: ["stealth"],
      },
    ],

    13: [
      {
        id: "rogue.thief.use_magic_device",
        source: "subclass" as const,
        level: 13,
        tags: ["utility"],
        //TODO: Any magical item action can also be a bonus action
      },
    ],

    17: [
      {
        id: "rogue.thief.thief_reflexes",
        source: "subclass" as const,
        level: 17,
        grants: [{ type: "action", id: "thief_reflexes" }],
        tags: ["combat", "initiative"],
        // TODO: Extra turn on 1° round.
      },
    ],
  },
};

import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const THIEF: SubclassTemplate = {
  id: "thief",
  classId: "rogue",
  source: "Player's Handbook",

  featuresByLevel: {
    3: [
      {
        id: "fast_hands",
        source: "subclass" as const,
        level: 3,
        grants: [{ type: "action", id: "fast_hands" }],
        tags: ["utility"],
      },
      {
        id: "second_story_work",
        source: "subclass" as const,
        level: 3,
        tags: ["movement"],
      },
    ],

    9: [
      {
        id: "supreme_sneak",
        source: "subclass" as const,
        level: 9,
        grants: [{ type: "action", id: "supreme_sneak" }],
        tags: ["stealth"],
      },
    ],

    13: [
      {
        id: "use_magic_device",
        source: "subclass" as const,
        level: 13,
        tags: ["utility"],
        //TODO: Any magical item action can also be a bonus action
      },
    ],

    17: [
      {
        id: "thief_reflexes",
        source: "subclass" as const,
        level: 17,
        grants: [{ type: "action", id: "thief_reflexes" }],
        tags: ["combat", "initiative"],
        // TODO: Extra turn on 1° round.
      },
    ],
  },
};

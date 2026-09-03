import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const BLADESINGING: SubclassTemplate = {
  id: "bladesinging",
  classId: "wizard",
  source: "Tasha's Cauldron of Everything",

  featuresByLevel: {
    2: [
      {
        id: "training_in_war_and_song",
        source: "subclass" as const,
        level: 2,
        tags: ["proficiency"],
        // TODO: light armor + one one-handed melee weapon (choice) + Performance proficiency
      },
      {
        id: "bladesong",
        source: "subclass" as const,
        level: 2,
        grants: [
          { type: "action", id: "bladesong" },
          { type: "resource", id: "bladesong" },
        ],
        tags: ["combat", "buff", "concentration"],
      },
    ],

    6: [
      {
        id: "bladesinging_extra_attack",
        source: "subclass" as const,
        level: 6,
        tags: ["combat"],
        // TODO: Override. Regular Attack action
      },
    ],

    10: [
      {
        id: "song_of_defense",
        source: "subclass" as const,
        level: 10,
        grants: [{ type: "action", id: "song_of_defense" }],
        tags: ["defense", "reaction"],
      },
    ],

    14: [
      {
        id: "song_of_victory",
        source: "subclass" as const,
        level: 14,
        tags: ["combat", "damage"],
        // TODO: Override. Append to bladesong
      },
    ],
  },
};

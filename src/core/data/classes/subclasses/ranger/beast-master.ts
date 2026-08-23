import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const BEAST_MASTER: SubclassTemplate = {
  id: "beast_master",
  classId: "ranger",
  source: "Player's Handbook",

  featuresByLevel: {
    3: [
      {
        id: "rangers_companion",
        source: "subclass" as const,
        level: 3,
        grants: [{ type: "action", id: "command_beast" }],
        tags: ["summoning", "companion"],
      },
    ],

    7: [
      {
        id: "exceptional_training",
        source: "subclass" as const,
        level: 7,
        grants: [{ type: "action", id: "exceptional_training" }],
        tags: ["companion", "action-economy"],
      },
    ],

    11: [
      {
        id: "bestial_fury",
        source: "subclass" as const,
        level: 11,
        tags: ["companion", "combat"],
      },
    ],

    15: [
      {
        id: "share_spells",
        source: "subclass" as const,
        level: 15,
        tags: ["companion", "spellcasting"],
      },
    ],
  },
};

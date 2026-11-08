import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const SWASHBUCKLER: SubclassTemplate = {
  id: "swashbuckler",
  classId: "rogue",
  source: "Xanathar's Guide to Everything",
  progression: {
    3: [
      "rogue.swashbuckler.fancy_footwork",
      "rogue.swashbuckler.rakish_audacity",
    ],
    9: ["rogue.swashbuckler.panache"],
    13: ["rogue.swashbuckler.elegant_maneuver"],
    17: ["rogue.swashbuckler.master_duelist"],
  },

  featuresByLevel: {
    3: [
      {
        id: "rogue.swashbuckler.fancy_footwork",
        source: "subclass" as const,
        level: 3,
        grants: [{ type: "action", id: "fancy_footwork" }],
        tags: ["defense"],
      },
      {
        id: "rogue.swashbuckler.rakish_audacity",
        source: "subclass" as const,
        level: 3,
        //TODO: Override. Append new description to Sneak Attack
        tags: ["combat", "initiative"],
      },
    ],

    9: [
      {
        id: "rogue.swashbuckler.panache",
        source: "subclass" as const,
        level: 9,
        grants: [{ type: "action", id: "panache" }],
        tags: ["control", "combat", "roleplay"],
      },
    ],

    13: [
      {
        id: "rogue.swashbuckler.elegant_maneuver",
        source: "subclass" as const,
        level: 13,
        grants: [{ type: "action", id: "elegant_maneuver" }],
        tags: ["utility", "bonus-action"],
      },
    ],

    17: [
      {
        id: "rogue.swashbuckler.master_duelist",
        source: "subclass" as const,
        level: 17,
        grants: [
          { type: "action", id: "master_duelist" },
          { type: "resource", id: "master_duelist" },
        ],
        tags: ["combat", "reroll"],
      },
    ],
  },
};

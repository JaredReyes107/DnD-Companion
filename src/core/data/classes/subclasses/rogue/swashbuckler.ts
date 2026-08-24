import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const SWASHBUCKLER: SubclassTemplate = {
  id: "swashbuckler",
  classId: "rogue",
  source: "Xanathar's Guide to Everything",

  featuresByLevel: {
    3: [
      {
        id: "fancy_footwork",
        source: "subclass" as const,
        level: 3,
        grants: [{ type: "action", id: "fancy_footwork" }],
        tags: ["defense"],
      },
      {
        id: "rakish_audacity",
        source: "subclass" as const,
        level: 3,
        //TODO: Override. Append new description to Sneak Attack
        tags: ["combat", "initiative"],
      },
    ],

    9: [
      {
        id: "panache",
        source: "subclass" as const,
        level: 9,
        grants: [{ type: "action", id: "panache" }],
        tags: ["control", "combat", "roleplay"],
      },
    ],

    13: [
      {
        id: "elegant_maneuver",
        source: "subclass" as const,
        level: 13,
        grants: [{ type: "action", id: "elegant_maneuver" }],
        tags: ["utility", "bonus-action"],
      },
    ],

    17: [
      {
        id: "master_duelist",
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

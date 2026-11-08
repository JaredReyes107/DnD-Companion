import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const STORM_SORCERY: SubclassTemplate = {
  id: "storm_sorcery",
  classId: "sorcerer",
  source: "Xanathar's Guide to Everything",

  featuresByLevel: {
    1: [
      {
        id: "sorcerer.storm_sorcery.wind_speaker",
        source: "subclass" as const,
        level: 1,
        tags: ["language"],
      },
      {
        id: "sorcerer.storm_sorcery.tempestuous_magic",
        source: "subclass" as const,
        level: 1,
        grants: [{ type: "action", id: "tempestuous_magic" }],
        tags: ["movement", "bonus-action"],
      },
    ],

    6: [
      {
        id: "sorcerer.storm_sorcery.heart_of_the_storm",
        source: "subclass" as const,
        level: 6,
        grants: [{ type: "action", id: "heart_of_the_storm" }],
        tags: ["combat", "damage", "resistance"],
      },
      {
        id: "sorcerer.storm_sorcery.storm_guide",
        source: "subclass" as const,
        level: 6,
        grants: [
          { type: "action", id: "storm_guide_stop_rain" },
          { type: "action", id: "storm_guide_wind_direction" },
        ],
        tags: ["utility", "environment"],
      },
    ],

    14: [
      {
        id: "sorcerer.storm_sorcery.storms_fury",
        source: "subclass" as const,
        level: 14,
        grants: [{ type: "action", id: "storms_fury" }],
        tags: ["combat", "damage", "reaction"],
      },
    ],

    18: [
      {
        id: "sorcerer.storm_sorcery.wind_soul",
        source: "subclass" as const,
        level: 18,
        grants: [
          { type: "action", id: "wind_soul_share_flight" },
          { type: "resource", id: "wind_soul_share_flight" },
        ],
        tags: ["movement", "buff"],
      },
    ],
  },
};

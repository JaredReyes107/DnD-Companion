import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const STORM_HERALD: SubclassTemplate = {
  id: "storm_herald",
  classId: "barbarian",
  source: "Xanathar's Guide to Everything",

  progression: {
    3: ["barbarian.storm_herald.storm_aura"],
    6: ["barbarian.storm_herald.storm_soul"],
    10: ["barbarian.storm_herald.shielding_storm"],
    14: ["barbarian.storm_herald.raging_storm"],
  },

  featuresByLevel: {
    3: [
      {
        id: "barbarian.storm_herald.storm_aura",
        source: "subclass",
        level: 3,
        grants: [{ type: "choice", id: "storm_aura_environment" }],
        tags: ["combat", "build-choice"],
      },
    ],
    6: [
      {
        id: "barbarian.storm_herald.storm_soul",
        source: "subclass",
        level: 6,
        tags: ["passive", "defense"],
        // TODO: Override. Resistance, swim speed and water breathing.
      },
    ],
    10: [
      {
        id: "barbarian.storm_herald.shielding_storm",
        source: "subclass",
        level: 10,
        tags: ["passive", "defense"],
        // TODO: Override. Description only.
      },
    ],
    14: [
      {
        id: "barbarian.storm_herald.raging_storm",
        source: "subclass",
        level: 14,
        tags: ["combat"],
        // Granted per environment through the Storm Aura option.
      },
    ],
  },
};

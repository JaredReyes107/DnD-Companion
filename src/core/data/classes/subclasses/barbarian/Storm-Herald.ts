import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const STORM_HERALD: SubclassTemplate = {
  id: "storm_herald",
  classId: "barbarian",
  source: "Xanathar's Guide to Everything",

  featuresByLevel: {
    3: [
      {
        id: "storm_aura",
        source: "subclass",
        level: 3,
        grants: [{ type: "choice", id: "storm_aura_environment" }],
        tags: ["combat", "build-choice"],
      },
    ],
    6: [
      {
        id: "storm_soul",
        source: "subclass",
        level: 6,
        tags: ["passive", "defense"],
        // TODO: Override. Resistance, swim speed and water breathing.
      },
    ],
    10: [
      {
        id: "shielding_storm",
        source: "subclass",
        level: 10,
        tags: ["passive", "defense"],
        // TODO: Override. Description only.
      },
    ],
    14: [
      {
        id: "raging_storm",
        source: "subclass",
        level: 14,
        tags: ["combat"],
        // Granted per environment through the Storm Aura option.
      },
    ],
  },
};

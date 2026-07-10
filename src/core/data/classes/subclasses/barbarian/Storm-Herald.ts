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
        tags: ["passive", "combat", "build-choice"],
        // TODO: rage hook + aura system
        // TODO: build-choice (environment selection)
        // TODO: scaling per level
      },
    ],

    6: [
      {
        id: "storm_soul",
        source: "subclass",
        level: 6,
        tags: ["passive", "defense", "build-choice"],
        // TODO: build-choice passive modifier injection
        // TODO: resistance system
      },
    ],

    10: [
      {
        id: "shielding_storm",
        source: "subclass",
        level: 10,
        tags: ["passive", "defense"],
        // TODO: aura hook + conditional resistance sharing
      },
    ],

    14: [
      {
        id: "raging_storm",
        source: "subclass",
        level: 14,
        tags: ["combat", "build-choice"],
      },
    ],
  },
};

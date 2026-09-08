import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const ZEALOT: SubclassTemplate = {
  id: "zealot",
  classId: "barbarian",
  source: "Xanathar's Guide to Everything",

  featuresByLevel: {
    3: [
      {
        id: "divine_fury",
        source: "subclass",
        level: 3,
        tags: ["combat"],
        // TODO: rage hook + on-hit damage bonus
        // TODO: build-choice (damage type selection)
        // TODO: scaling (1d6 + half level)
      },
      {
        id: "warrior_of_the_gods",
        source: "subclass",
        level: 3,
        tags: ["passive"],
        // NOTE: purely narrative, no mechanical tracking needed
      },
    ],

    6: [
      {
        id: "fanatical_focus",
        source: "subclass",
        level: 6,
        grants: [
          { type: "action", id: "fanatical_focus" },
          { type: "resource", id: "fanatical_focus" },
        ],
        tags: ["defense"],
        //TODO: Override. Rage now grants +1 fanatical_focus
      },
    ],

    10: [
      {
        id: "zealous_presence",
        source: "subclass",
        level: 10,
        grants: [
          { type: "action", id: "zealous_presence" },
          { type: "resource", id: "zealous_presence" },
        ],
        tags: ["support", "combat"],
        // TODO: action + advantage application to multiple targets
      },
    ],

    14: [
      {
        id: "rage_beyond_death",
        source: "subclass",
        level: 14,
        tags: ["passive", "combat", "last-stand"],
        // TODO: rage hook + death save override
      },
    ],
  },
};

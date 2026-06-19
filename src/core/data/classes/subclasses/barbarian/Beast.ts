import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const BEAST: SubclassTemplate = {
  id: "beast",
  classId: "barbarian",
  source: "Tasha's Cauldron of Everything",

  featuresByLevel: {
    3: [
      {
        id: "form_of_the_beast",
        source: "subclass",
        level: 3,
        tags: ["combat", "build-choice"],
        // TODO: rage hook + natural weapon system
        // TODO: build-choice (bite / claws / tail per rage)
      },
    ],

    6: [
      {
        id: "bestial_soul",
        source: "subclass",
        level: 6,
        tags: ["passive", "combat", "build-choice"],
        // TODO: movement hook
        // TODO: damage type override (magical)
      },
    ],

    10: [
      {
        id: "infectious_fury",
        source: "subclass",
        level: 10,
        resources: ["infectious_fury"],
        actions: ["infectious_fury"],
        tags: ["combat", "debuff"],
        // TODO: on-hit saving throw hook
        // TODO: condition / reaction redirect system
      },
    ],

    14: [
      {
        id: "call_the_hunt",
        source: "subclass",
        level: 14,
        resources: ["call_the_hunt"],
        tags: ["support", "combat"],
        // TODO: rage hook + buff application to multiple targets
      },
    ],
  },
};

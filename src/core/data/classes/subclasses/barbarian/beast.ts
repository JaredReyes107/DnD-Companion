import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const BEAST: SubclassTemplate = {
  id: "beast",
  classId: "barbarian",
  source: "Tasha's Cauldron of Everything",

  progression: {
    3: ["barbarian.beast.form_of_the_beast"],
    6: ["barbarian.beast.bestial_soul"],
    10: ["barbarian.beast.infectious_fury"],
    14: ["barbarian.beast.call_the_hunt"],
  },

  featuresByLevel: {
    3: [
      {
        id: "barbarian.beast.form_of_the_beast",
        source: "subclass",
        level: 3,
        grants: [
          { type: "action", id: "beast_form_bite" },
          { type: "action", id: "beast_form_claws" },
          { type: "action", id: "beast_form_tail" },
        ],
        tags: ["combat"],
      },
    ],

    6: [
      {
        id: "barbarian.beast.bestial_soul",
        source: "subclass",
        level: 6,
        grants: [{ type: "choice", id: "bestial_soul_movement" }],
        tags: ["passive", "combat"],
      },
    ],

    10: [
      {
        id: "barbarian.beast.infectious_fury",
        source: "subclass",
        level: 10,
        grants: [
          { type: "action", id: "infectious_fury" },
          { type: "resource", id: "infectious_fury" },
        ],
        tags: ["combat", "debuff"],
      },
    ],

    14: [
      {
        id: "barbarian.beast.call_the_hunt",
        source: "subclass",
        level: 14,
        grants: [
          { type: "action", id: "call_the_hunt" },
          { type: "resource", id: "call_the_hunt" },
        ],
        tags: ["support", "combat"],
      },
    ],
  },
};

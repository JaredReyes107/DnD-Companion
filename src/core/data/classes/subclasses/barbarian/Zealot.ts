import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const ZEALOT: SubclassTemplate = {
  id: "zealot",
  classId: "barbarian",
  source: "Xanathar's Guide to Everything",

  progression: {
    3: ["barbarian.zealot.divine_fury", "barbarian.zealot.warrior_of_the_gods"],
    6: ["barbarian.zealot.fanatical_focus"],
    10: ["barbarian.zealot.zealous_presence"],
    14: ["barbarian.zealot.rage_beyond_death"],
  },

  featuresByLevel: {
    3: [
      {
        id: "barbarian.zealot.divine_fury",
        source: "subclass",
        level: 3,
        grants: [
          { type: "action", id: "divine_fury" },
          { type: "resource", id: "divine_fury" },
        ],
        tags: ["combat"],
      },
      {
        id: "barbarian.zealot.warrior_of_the_gods",
        source: "subclass",
        level: 3,
        tags: ["passive"],
      },
    ],
    6: [
      {
        id: "barbarian.zealot.fanatical_focus",
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
        id: "barbarian.zealot.zealous_presence",
        source: "subclass",
        level: 10,
        grants: [
          { type: "action", id: "zealous_presence" },
          { type: "resource", id: "zealous_presence" },
        ],
        tags: ["support", "combat"],
      },
    ],
    14: [
      {
        id: "barbarian.zealot.rage_beyond_death",
        source: "subclass",
        level: 14,
        tags: ["passive", "combat", "last-stand"],
      },
    ], // see gaps
  },
};

import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const TOTEM_WARRIOR: SubclassTemplate = {
  id: "totem_warrior",
  classId: "barbarian",
  source: "Players Handbook",

  featuresByLevel: {
    3: [
      {
        id: "barbarian.totem_warrior.spirit_seeker",
        source: "subclass",
        level: 3,
        tags: ["utility", "spellcasting"],
        // TODO: ritual spell system
      },
      {
        id: "barbarian.totem_warrior.totem_spirit",
        source: "subclass",
        level: 3,
        tags: ["passive", "combat"],
        grants: [{ type: "choice", id: "totem_spirit" }],
      },
    ],

    6: [
      {
        id: "barbarian.totem_warrior.aspect_of_the_beast",
        source: "subclass",
        level: 6,
        grants: [{ type: "choice", id: "aspect_of_the_beast" }],
        tags: ["passive", "exploration"],
      },
    ],

    10: [
      {
        id: "barbarian.totem_warrior.spirit_walker",
        source: "subclass",
        level: 10,
        tags: ["utility", "spellcasting"],
        // TODO: ritual spell system
      },
    ],

    14: [
      {
        id: "barbarian.totem_warrior.totemic_attunement",
        source: "subclass",
        level: 14,
        grants: [{ type: "choice", id: "totemic_attunement" }],
        tags: ["passive", "combat"],
      },
    ],
  },
};

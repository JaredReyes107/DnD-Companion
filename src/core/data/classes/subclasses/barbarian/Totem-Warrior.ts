import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const TOTEM_WARRIOR: SubclassTemplate = {
  id: "totem_warrior",
  classId: "barbarian",
  name: "Totem Warrior",
  source: "Players Handbook",

  featuresByLevel: {
    3: [
      {
        id: "spirit_seeker",
        source: "subclass",
        level: 3,
        tags: ["utility", "spellcasting"],
        // TODO: ritual spell system
      },
      {
        id: "totem_spirit",
        source: "subclass",
        level: 3,
        tags: ["passive", "combat", "build-choice"],
        // TODO: rage hook (conditional modifiers per totem choice)
      },
    ],

    6: [
      {
        id: "aspect_of_the_beast",
        source: "subclass",
        level: 6,
        tags: ["passive", "exploration", "build-choice"],
        // TODO: build-choice system
      },
    ],

    10: [
      {
        id: "spirit_walker",
        source: "subclass",
        level: 10,
        tags: ["utility", "spellcasting"],
        // TODO: ritual spell system
      },
    ],

    14: [
      {
        id: "totemic_attunement",
        source: "subclass",
        level: 14,
        tags: ["passive", "combat", "build-choice"],
        // TODO: rage hook (conditional per totem choice)
      },
    ],
  },
};

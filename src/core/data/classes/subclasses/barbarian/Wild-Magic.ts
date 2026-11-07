import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const WILD_MAGIC: SubclassTemplate = {
  id: "wild_magic_barbarian",
  classId: "barbarian",
  source: "Tasha's Cauldron of Everything",

  featuresByLevel: {
    3: [
      {
        id: "magic_awareness",
        source: "subclass",
        level: 3,
        grants: [
          { type: "action", id: "magic_awareness" },
          { type: "resource", id: "magic_awareness" },
        ],
        tags: ["utility"],
      },
      {
        id: "wild_surge",
        source: "subclass",
        level: 3,
        tags: ["combat"],
      }, // the d8 roll is physical; the player taps the result
    ],

    6: [
      {
        id: "bolstering_magic",
        source: "subclass",
        level: 6,
        grants: [
          { type: "action", id: "bolstering_magic" },
          { type: "resource", id: "bolstering_magic" },
        ],
        tags: ["support", "utility"],
      },
    ],
    10: [
      {
        id: "unstable_backlash",
        source: "subclass",
        level: 10,
        grants: [{ type: "action", id: "unstable_backlash" }],
        tags: ["reaction", "combat"],
      },
    ],
    14: [
      {
        id: "controlled_surge",
        source: "subclass",
        level: 14,
        tags: ["passive"],
      },
    ],
  },
};

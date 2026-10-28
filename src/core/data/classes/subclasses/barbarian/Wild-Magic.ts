import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const WILD_MAGIC: SubclassTemplate = {
  id: "wild_magic",
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
        grants: [
          ...[1, 2, 3, 4, 5, 6, 7, 8].map((n) => ({
            type: "action" as const,
            id: `wild_surge_${n}`,
          })),
          { type: "action", id: "wild_surge_teleport" },
          { type: "action", id: "wild_surge_spirit" },
          { type: "action", id: "wild_surge_light_bolt" },
        ],
        tags: ["combat"],
      }, // the d8 roll is physical; the player taps the result
    ],

    6: [
      {
        id: "bolstering_magic",
        source: "subclass",
        level: 6,
        grants: [
          { type: "action", id: "bolstering_magic_bonus" },
          { type: "action", id: "bolstering_magic_slot" },
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

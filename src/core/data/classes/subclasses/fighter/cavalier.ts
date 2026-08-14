import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const CAVALIER: SubclassTemplate = {
  id: "cavalier",
  classId: "fighter",

  featuresByLevel: {
    3: [
      {
        id: "bonus_proficiency_cavalier",
        source: "subclass" as const,
        level: 3,
        tags: ["skill", "proficiency", "language"],
      },
      {
        id: "born_to_the_saddle",
        source: "subclass" as const,
        level: 3,
        tags: ["mount", "movement"],
      },
      {
        id: "unwavering_mark",
        source: "subclass",
        level: 3,
        grants: [
          { type: "action", id: "unwavering_mark" },
          { type: "action", id: "unwavering_mark_attack" },
          { type: "resource", id: "unwavering_mark_attack" },
        ],
        tags: ["combat", "tank", "debuff"],
      },
    ],

    7: [
      {
        id: "warding_maneuver",
        source: "subclass" as const,
        level: 7,
        grants: [
          { type: "action", id: "warding_maneuver" },
          { type: "resource", id: "warding_maneuver" },
        ],
        tags: ["reaction", "defense", "damage-reduction"],
      },
    ],

    10: [
      {
        id: "hold_the_line",
        source: "subclass" as const,
        level: 10,
        grants: [{ type: "action", id: "hold_the_line" }],
        tags: ["reaction", "combat", "control"],
      },
    ],

    15: [
      {
        id: "ferocious_charger",
        source: "subclass" as const,
        level: 15,
        grants: [{ type: "action", id: "ferocious_charger" }],
        tags: ["combat", "control"],
      },
    ],

    18: [
      {
        id: "vigilant_defender",
        source: "subclass" as const,
        level: 18,
        grants: [{ type: "action", id: "vigilant_defender" }],
        tags: ["reaction"],
      },
    ],
  },
};

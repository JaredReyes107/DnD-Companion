import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const CAVALIER: SubclassTemplate = {
  id: "cavalier",
  classId: "fighter",
  progression: {
    3: [
      "fighter.cavalier.bonus_proficiency_cavalier",
      "fighter.cavalier.born_to_the_saddle",
      "fighter.cavalier.unwavering_mark",
    ],
    7: ["fighter.cavalier.warding_maneuver"],
    10: ["fighter.cavalier.hold_the_line"],
    15: ["fighter.cavalier.ferocious_charger"],
    18: ["fighter.cavalier.vigilant_defender"],
  },

  featuresByLevel: {
    3: [
      {
        id: "fighter.cavalier.bonus_proficiency_cavalier",
        source: "subclass" as const,
        level: 3,
        tags: ["skill", "proficiency", "language"],
      },
      {
        id: "fighter.cavalier.born_to_the_saddle",
        source: "subclass" as const,
        level: 3,
        tags: ["mount", "movement"],
      },
      {
        id: "fighter.cavalier.unwavering_mark",
        source: "subclass",
        level: 3,
        grants: [
          { type: "action", id: "unwavering_mark" },
          { type: "action", id: "unwavering_mark_retaliate" },
        ],
        tags: ["combat", "tank", "debuff"],
      },
    ],

    7: [
      {
        id: "fighter.cavalier.warding_maneuver",
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
        id: "fighter.cavalier.hold_the_line",
        source: "subclass" as const,
        level: 10,
        grants: [{ type: "action", id: "hold_the_line" }],
        tags: ["reaction", "combat", "control"],
      },
    ],

    15: [
      {
        id: "fighter.cavalier.ferocious_charger",
        source: "subclass" as const,
        level: 15,
        grants: [{ type: "action", id: "ferocious_charger" }],
        tags: ["combat", "control"],
      },
    ],

    18: [
      {
        id: "fighter.cavalier.vigilant_defender",
        source: "subclass" as const,
        level: 18,
        grants: [{ type: "action", id: "vigilant_defender" }],
        tags: ["reaction"],
      },
    ],
  },
};

import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const BERSERKER: SubclassTemplate = {
  id: "berserker",
  classId: "barbarian",
  source: "Players Handbook",

  featuresByLevel: {
    3: [
      {
        id: "frenzy",
        source: "subclass",
        level: 3,
        grants: [
          { type: "action", id: "frenzy_start" },
          { type: "action", id: "frenzy_attack" },
        ],
        tags: ["combat"],
        // TODO: Override. Rage
        // TODO: Status. Tiered condition: exhaustion, at end of rage
      },
    ],

    6: [
      {
        id: "mindless_rage",
        source: "subclass",
        level: 6,
        tags: ["passive", "defense"],
        // TODO: Override. Rage ends statuses: Charmed + Frightened
      },
    ],

    10: [
      {
        id: "intimidating_presence",
        source: "subclass",
        level: 10,
        grants: [{ type: "action", id: "intimidating_presence" }],
        tags: ["action", "debuff"],
      },
    ],

    14: [
      {
        id: "retaliation",
        source: "subclass",
        level: 14,
        grants: [{ type: "action", id: "retaliation" }],
        tags: ["reaction", "combat"],
        // TODO: reaction hook (on damage received)
      },
    ],
  },
};

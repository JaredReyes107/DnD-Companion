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
        tags: ["combat"],
        // TODO: rage hook (modifier during rage)
        // TODO: exhaustion system
      },
    ],

    6: [
      {
        id: "mindless_rage",
        source: "subclass",
        level: 6,
        tags: ["passive", "defense"],
        // TODO: condition immunity hook (during rage)
      },
    ],

    10: [
      {
        id: "intimidating_presence",
        source: "subclass",
        level: 10,
        actions: ["intimidating_presence"],
        tags: ["action", "debuff"],
      },
    ],

    14: [
      {
        id: "retaliation",
        source: "subclass",
        level: 14,
        actions: ["retaliation"],
        tags: ["reaction", "combat"],
        // TODO: reaction hook (on damage received)
      },
    ],
  },
};

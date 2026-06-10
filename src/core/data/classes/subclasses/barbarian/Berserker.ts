import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const BERSERKER: SubclassTemplate = {
  id: "berserker",
  classId: "barbarian",
  name: "Berserker",
  source: "Players Handbook",

  featuresByLevel: {
    3: [
      {
        id: "frenzy",
        label: "Frenzy",
        source: "subclass",
        level: 3,
        description:
          "When you rage, you can go into a frenzy. For the duration of your rage you can make a single melee weapon attack as a bonus action on each of your turns. When your rage ends, you suffer one level of exhaustion.",
        tags: ["combat"],
        // TODO: rage hook (modifier during rage)
        // TODO: exhaustion system
      },
    ],

    6: [
      {
        id: "mindless_rage",
        label: "Mindless Rage",
        source: "subclass",
        level: 6,
        description:
          "You can't be charmed or frightened while raging. If you are charmed or frightened when you enter a rage, the effect is suspended for the duration of the rage.",
        tags: ["passive", "defense"],
        // TODO: condition immunity hook (during rage)
      },
    ],

    10: [
      {
        id: "intimidating_presence",
        label: "Intimidating Presence",
        source: "subclass",
        level: 10,
        description:
          "You can use your action to frighten someone. When you do so, choose one creature that you can see within 30 feet. It must make a WIS saving throw or become frightened of you until the end of your next turn.",
        actions: ["intimidating_presence"],
        tags: ["action", "debuff"],
      },
    ],

    14: [
      {
        id: "retaliation",
        label: "Retaliation",
        source: "subclass",
        level: 14,
        description:
          "When you take damage from a creature that is within 5 feet of you, you can use your reaction to make a melee weapon attack against that creature.",
        tags: ["reaction", "combat"],
        // TODO: reaction hook (on damage received)
      },
    ],
  },
};

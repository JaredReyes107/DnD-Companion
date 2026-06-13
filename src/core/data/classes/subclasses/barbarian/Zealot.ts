import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const ZEALOT: SubclassTemplate = {
  id: "zealot",
  classId: "barbarian",
  name: "Zealot",
  source: "Xanathar's Guide to Everything",

  featuresByLevel: {
    3: [
      {
        id: "divine_fury",
        label: "Divine Fury",
        source: "subclass",
        level: 3,
        description:
          "While raging, the first creature you hit on each turn takes extra damage equal to 1d6 + half your barbarian level. The damage type is necrotic or radiant, chosen when you take this subclass.",
        tags: ["combat"],
        // TODO: rage hook + on-hit damage bonus
        // TODO: build-choice (damage type selection)
        // TODO: scaling (1d6 + half level)
      },
      {
        id: "warrior_of_the_gods",
        label: "Warrior of the Gods",
        source: "subclass",
        level: 3,
        description:
          "Your soul is marked for endless battle. If a spell such as Raise Dead is cast on you, the caster doesn't need material components.",
        tags: ["passive"],
        // NOTE: purely narrative, no mechanical tracking needed
      },
    ],

    6: [
      {
        id: "fanatical_focus",
        label: "Fanatical Focus",
        source: "subclass",
        level: 6,
        description:
          "If you fail a saving throw while raging, you can reroll it and must use the new roll. You can use this feature only once per rage.",
        actions: ["fanatical_focus"],
        resources: ["fanatical_focus"],
        tags: ["defense"],
        // TODO: rage hook + saving throw reroll (once per rage tracker)
      },
    ],

    10: [
      {
        id: "zealous_presence",
        label: "Zealous Presence",
        source: "subclass",
        level: 10,
        description:
          "As a bonus action, you unleash a battle cry. Up to 10 creatures of your choice within 60 feet gain advantage on attack rolls and saving throws until the start of your next turn. Once used, you must finish a long rest before using it again.",
        actions: ["zealous_presence"],
        resources: ["zealous_presence"],
        tags: ["support", "combat"],
        // TODO: action + advantage application to multiple targets
      },
    ],

    14: [
      {
        id: "rage_beyond_death",
        label: "Rage Beyond Death",
        source: "subclass",
        level: 14,
        description:
          "While raging, having 0 HP doesn't knock you unconscious. You still make death saving throws, and you die if you accumulate three failures. You don't die from this feature's damage if your rage ends.",
        tags: ["passive", "combat", "last-stand"],
        // TODO: rage hook + death save override
      },
    ],
  },
};
import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const WILD_MAGIC: SubclassTemplate = {
  id: "wild_magic",
  classId: "barbarian",
  name: "Path of Wild Magic",
  source: "Tasha's Cauldron of Everything",

  featuresByLevel: {
    3: [
      {
        id: "magic_awareness",
        label: "Magic Awareness",
        source: "subclass",
        level: 3,
        description:
          "As an action, you can sense the presence of spells and magic items within 60 feet that aren't behind total cover. You can use this a number of times equal to your proficiency bonus per long rest.",
        resources: ["magic_awareness"],
        actions: ["magic_awareness"],
        tags: ["utility"],
        // TODO: detection system (out of combat)
      },
      {
        id: "wild_surge",
        label: "Wild Surge",
        source: "subclass",
        level: 3,
        description:
          "When you enter a rage, roll on the Wild Magic table to produce a random magical effect. The effect lasts until your rage ends unless stated otherwise.",
        tags: ["combat"],
        // TODO: wild magic table — random effect system
        // TODO: rage hook
      },
    ],

    6: [
      {
        id: "bolstering_magic",
        label: "Bolstering Magic",
        source: "subclass",
        level: 6,
        description:
          "As an action, you can touch a creature and bestow one of the following benefits: it rolls a d3 and adds the result to attack rolls and ability checks for 10 minutes, or it regains one expended spell slot of 3rd level or lower. You can use this a number of times equal to your proficiency bonus per long rest.",
        resources: ["bolstering_magic"],
        actions: ["bolstering_magic"],
        tags: ["support", "utility"],
        // TODO: buff application + spell slot recovery hook
      },
    ],

    10: [
      {
        id: "unstable_backlash",
        label: "Unstable Backlash",
        source: "subclass",
        level: 10,
        description:
          "When you take damage or fail a saving throw while raging, you can use your reaction to roll on the Wild Magic table and immediately apply the result, replacing your current wild surge effect.",
        actions: ["unstable_backlash"],
        tags: ["reaction", "combat"],
        // TODO: reaction hook + wild magic table reroll
      },
    ],

    14: [
      {
        id: "controlled_surge",
        label: "Controlled Surge",
        source: "subclass",
        level: 14,
        description:
          "When you roll on the Wild Magic table, you can roll twice and choose either result. If you roll the same result twice, you can pick any result from the table.",
        tags: ["passive"],
        // TODO: extends wild_surge — roll modifier system
      },
    ],
  },
};
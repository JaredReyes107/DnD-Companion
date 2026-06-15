import { ClassTemplate } from "@/core/entities/rules/class-template";

export const BARD: ClassTemplate = {
  id: "bard",
  name: "Bard",

  hitDie: 8,

  primaryAbilities: ["CHA"],
  savingThrows: ["DEX", "CHA"],

  spellcastingTemplate: {
    id: "bard_spellcasting",
    ability: "CHA",
    kind: "standard",
    progression: "full",
  },

  featuresByLevel: {
    1: [
      {
        id: "bardic_inspiration",
        label: "Bardic Inspiration",
        source: "class",
        level: 1,
        description: "You can inspire others through stirring words or music.",
        resources: ["bardic_inspiration"],
        actions: ["bardic_inspiration"],
        tags: ["resource", "support"],
      },
      {
        id: "spellcasting_bard",
        label: "Spellcasting",
        source: "class",
        level: 1,
        description: "You can cast bard spells.",
      },
    ],
    2: [
      {
        id: "jack_of_all_trades",
        label: "Jack of All Trades",
        source: "class",
        level: 2,
        description:
          "Add half your proficiency bonus to any ability check you aren't proficient in.",
        tags: ["passive", "ability-checks"],
      },
      {
        id: "song_of_rest",
        label: "Song of Rest",
        source: "class",
        level: 2,
        description:
          "Your music helps revitalize wounded allies during a short rest.",
        //TODO: Append the behaviour to the TakeShortRest function
      },
    ],
    3: [
      {
        id: "bard_college",
        label: "Bard College",
        source: "class",
        level: 3,
        description: "Choose a bard college.",
        tags: ["subclass"],
      },
      {
        id: "expertise",
        label: "Expertise",
        source: "class",
        level: 3,
        description: "",
        tags: [],
        // TODO: resources, actions, combatRole
      },
    ],
    4: [
      {
        id: "ability_score_improvement",
        label: "Ability Score Improvement",
        source: "class",
        level: 4,
        description: "",
        tags: [],
        // TODO: resources, actions, combatRole
      },
      {
        id: "bardic_versatility",
        label: "Bardic Versatility",
        source: "class",
        level: 4,
        description: "",
        tags: [],
        // TODO: resources, actions, combatRole
      },
    ],
    5: [
      {
        id: "font_of_inspiration",
        label: "Font of Inspiration",
        source: "class",
        level: 5,
        description:
          "You now also regain all uses of Bardic Inspiration in a Short Rest.",
        //TODO: Modify the recharge property of the appropiate ResourceInstance
      },
    ],
    6: [
      {
        id: "countercharm",
        label: "Countercharm",
        source: "class",
        level: 6,
        description:
          "You can use musical notes or words of power to disrupt mind-influencing effects.",
        actions: ["countercharm"],
        tags: ["action", "defense"],
      },
      {
        id: "bard_college_feature",
        label: "Bard College feature",
        source: "class",
        level: 6,
        description: "",
        tags: ["subclass"],
        // TODO: resources, actions, combatRole
      },
    ],
    8: [
      {
        id: "ability_score_improvement",
        label: "Ability Score Improvement",
        source: "class",
        level: 8,
        description: "",
        tags: [],
        // TODO: resources, actions, combatRole
      },
    ],
    10: [
      {
        id: "expertise",
        label: "Expertise",
        source: "class",
        level: 10,
        description: "",
        tags: [],
        // TODO: resources, actions, combatRole
      },
      {
        id: "magical_secrets",
        label: "Magical Secrets",
        source: "class",
        level: 10,
        description: "",
        tags: [],
        // TODO: resources, actions, combatRole
      },
    ],
    12: [
      {
        id: "ability_score_improvement",
        label: "Ability Score Improvement",
        source: "class",
        level: 12,
        description: "",
        tags: [],
        // TODO: resources, actions, combatRole
      },
    ],
    14: [
      {
        id: "magical_secrets",
        label: "Magical Secrets",
        source: "class",
        level: 14,
        description: "",
        tags: [],
        // TODO: resources, actions, combatRole
      },
      {
        id: "bard_college_feature",
        label: "Bard College feature",
        source: "class",
        level: 14,
        description: "",
        tags: ["subclass"],
        // TODO: resources, actions, combatRole
      },
    ],
    16: [
      {
        id: "ability_score_improvement",
        label: "Ability Score Improvement",
        source: "class",
        level: 16,
        description: "",
        tags: [],
        // TODO: resources, actions, combatRole
      },
    ],
    18: [
      {
        id: "magical_secrets",
        label: "Magical Secrets",
        source: "class",
        level: 18,
        description: "",
        tags: [],
        // TODO: resources, actions, combatRole
      },
    ],
    19: [
      {
        id: "ability_score_improvement",
        label: "Ability Score Improvement",
        source: "class",
        level: 19,
        description: "",
        tags: [],
        // TODO: resources, actions, combatRole
      },
    ],
    20: [
      {
        id: "superior-inspiration",
        label: "Superior Inspiration",
        source: "class",
        level: 20,
        description:
          "When you roll initiative and have no Bardic Inspiration uses left, you regain one use.",
        // TODO: initiative hook
        tags: ["resource", "combat"],
      },
    ],
  },
};

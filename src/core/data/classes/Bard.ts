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

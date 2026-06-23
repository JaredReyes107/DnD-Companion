import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const LIGHT: SubclassTemplate = {
  id: "light",
  classId: "cleric",

  featuresByLevel: {
    1: [
      {
        id: "light_domain_spells",
        source: "subclass" as const,
        level: 1,
        tags: ["spells"],
        // TODO: Add to spell list
      },
      {
        id: "bonus_cantrip",
        source: "subclass" as const,
        level: 1,
        tags: ["spells"],
        // TODO: Add to spell list
      },
      {
        id: "warding_flare",
        source: "subclass" as const,
        level: 1,
        resources: ["warding_flare"],
        actions: ["warding_flare"],
        tags: ["reaction", "defense"],
      },
    ],

    2: [
      {
        id: "channel_divinity_radiance_of_the_dawn",
        source: "subclass" as const,
        level: 2,
        actions: ["channel_divinity_radiance_of_the_dawn"],
        tags: ["action"],
        // TODO: resources, actions
      },
    ],

    6: [
      {
        id: "improved_flare",
        source: "subclass" as const,
        level: 6,
        tags: ["combat", "defense"],
        // TODO: Override warding_flare
      },
    ],

    8: [
      {
        id: "potent_spellcasting",
        source: "subclass" as const,
        level: 8,
        tags: [],
        // TODO: Damage hook
      },
    ],

    17: [
      {
        id: "corona_of_light",
        source: "subclass" as const,
        level: 17,
        actions: ["corona_of_light"],
        tags: [],
      },
    ],
  },
};

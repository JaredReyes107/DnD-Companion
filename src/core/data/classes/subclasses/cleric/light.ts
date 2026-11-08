import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const LIGHT: SubclassTemplate = {
  id: "light",
  classId: "cleric",
  progression: {
    1: [
      "cleric.light.light_domain_spells",
      "cleric.light.bonus_cantrip",
      "cleric.light.warding_flare",
    ],
    2: ["cleric.light.channel_divinity_radiance_of_the_dawn"],
    6: ["cleric.light.improved_flare"],
    8: ["potent_spellcasting"],
    17: ["cleric.light.corona_of_light"],
  },

  featuresByLevel: {
    1: [
      {
        id: "cleric.light.light_domain_spells",
        source: "subclass" as const,
        level: 1,
        tags: ["spells"],
        // TODO: Add to spell list
      },
      {
        id: "cleric.light.bonus_cantrip",
        source: "subclass" as const,
        level: 1,
        tags: ["spells"],
        // TODO: Add to spell list
      },
      {
        id: "cleric.light.warding_flare",
        source: "subclass" as const,
        level: 1,
        grants: [
          { type: "action", id: "warding_flare" },
          { type: "resource", id: "warding_flare" },
        ],
        tags: ["reaction", "defense"],
      },
    ],

    2: [
      {
        id: "cleric.light.channel_divinity_radiance_of_the_dawn",
        source: "subclass" as const,
        level: 2,
        grants: [
          { type: "action", id: "channel_divinity_radiance_of_the_dawn" },
        ],
        tags: ["action"],
        // TODO: resources, actions
      },
    ],

    6: [
      {
        id: "cleric.light.improved_flare",
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
        id: "cleric.light.corona_of_light",
        source: "subclass" as const,
        level: 17,
        grants: [{ type: "action", id: "corona_of_light" }],
        tags: [],
      },
    ],
  },
};

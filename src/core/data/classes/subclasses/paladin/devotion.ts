import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const DEVOTION: SubclassTemplate = {
  id: "devotion",
  classId: "paladin",
  source: "Player's Handbook",

  featuresByLevel: {
    3: [
      {
        id: "tenets_of_devotion",
        source: "subclass" as const,
        level: 3,
        tags: ["flavour"],
      },
      {
        id: "oath_of_devotion_spells",
        source: "subclass" as const,
        level: 3,
        tags: ["spells"],
      },
      {
        id: "channel_divinity",
        source: "subclass" as const,
        level: 3,
        grants: [
          { type: "action", id: "channel_divinity_sacred_weapon" },
          { type: "action", id: "channel_divinity_turn_the_unholy" },
        ],
        tags: ["combat", "buff"],
      },
    ],

    7: [
      {
        id: "aura_of_devotion",
        source: "subclass" as const,
        level: 7,
        tags: ["aura", "inmunity", "charmed"],
      },
    ],

    15: [
      {
        id: "purity_of_spirit",
        source: "subclass" as const,
        level: 15,
        tags: ["defense"],
        //TODO: Apply permanent modifier/effect of the actual 'Protection from Evil and Good' spell
      },
    ],

    20: [
      {
        id: "holy_nimbus",
        source: "subclass" as const,
        level: 20,
        grants: [
          { type: "resource", id: "holy_nimbus" },
          { type: "action", id: "holy_nimbus" },
        ],
        tags: ["combat", "damage", "aura"],
      },
    ],
  },
};

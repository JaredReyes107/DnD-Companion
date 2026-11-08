import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const REDEMPTION: SubclassTemplate = {
  id: "redemption",
  classId: "paladin",
  progression: {
    3: [
      "paladin.redemption.tenets_of_redemption",
      "paladin.redemption.oath_spells_redemption",
      "paladin.redemption.channel_divinity_redemption",
    ],
    7: ["paladin.redemption.aura_of_the_guardian"],
    15: ["paladin.redemption.protective_spirit"],
    20: ["paladin.redemption.emissary_of_redemption"],
  },

  featuresByLevel: {
    3: [
      {
        id: "paladin.redemption.tenets_of_redemption",
        source: "subclass" as const,
        level: 3,
        tags: ["flavour"],
      },
      {
        id: "paladin.redemption.oath_spells_redemption",
        source: "subclass" as const,
        level: 3,
        tags: ["spells"],
      },
      {
        id: "paladin.redemption.channel_divinity_redemption",
        source: "subclass" as const,
        level: 3,
        grants: [
          { type: "action", id: "channel_divinity_emissary_of_peace" },
          { type: "action", id: "channel_divinity_rebuke_the_violent" },
        ],
        tags: [],
      },
    ],

    7: [
      {
        id: "paladin.redemption.aura_of_the_guardian",
        source: "subclass" as const,
        level: 7,
        /// TODO: Aura modifier. Purely descriptive
        tags: [],
      },
    ],

    15: [
      {
        id: "paladin.redemption.protective_spirit",
        source: "subclass" as const,
        level: 15,
        // TODO: Passive conditional modifier.
        // Heal 1d6 + 1/2 paladin lv. at end turn, if <50% HP and not incapacitated
        tags: ["healing", "self-sustain"],
      },
    ],

    20: [
      {
        id: "paladin.redemption.emissary_of_redemption",
        source: "subclass" as const,
        level: 20,
        grants: [],
        //TODO: Modifier. Only ends after attacking, casting a spell over a creature or dealing damage to it (except this)
        // Grants resistance to all damage dealt (not types. All damage) and deal half received dmg as radiant dmg to attacker
        // Hook: Reaplies after long rest.
        tags: [],
      },
    ],
  },
};

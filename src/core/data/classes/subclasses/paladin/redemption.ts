import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const REDEMPTION: SubclassTemplate = {
  id: "redemption",
  classId: "paladin",

  featuresByLevel: {
    3: [
      {
        id: "tenets_of_redemption",
        source: "subclass" as const,
        level: 3,
        tags: ["flavour"],
      },
      {
        id: "oath_spells_redemption",
        source: "subclass" as const,
        level: 3,
        tags: ["spells"],
      },
      {
        id: "channel_divinity_redemption",
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
        id: "aura_of_the_guardian",
        source: "subclass" as const,
        level: 7,
        /// TODO: Aura modifier. Purely descriptive
        tags: [],
      },
    ],

    15: [
      {
        id: "protective_spirit",
        source: "subclass" as const,
        level: 15,
        // TODO: Passive conditional modifier.
        // Heal 1d6 + 1/2 paladin lv. at end turn, if <50% HP and not incapacitated
        tags: ["healing", "self-sustain"],
      },
    ],

    20: [
      {
        id: "emissary_of_redemption",
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

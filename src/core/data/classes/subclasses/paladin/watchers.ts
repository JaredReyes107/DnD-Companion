import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const WATCHERS: SubclassTemplate = {
  id: "watchers",
  classId: "paladin",

  featuresByLevel: {
    3: [
      {
        id: "tenets_of_watchers",
        source: "subclass" as const,
        level: 3,
        tags: ["flavour"],
      },
      {
        id: "oath_spells_watchers",
        source: "subclass" as const,
        level: 3,
        tags: ["spells"],
      },
      {
        id: "channel_divinity_watchers",
        source: "subclass" as const,
        level: 3,
        grants: [
          { type: "action", id: "channel_divinity_watchers_will" },
          { type: "action", id: "channel_divinity_abjure_the_extraplanar" },
        ],
        tags: ["combat", "support", "control"],
      },
    ],

    7: [
      {
        id: "aura_of_the_sentinel",
        source: "subclass" as const,
        level: 7,
        // TODO: Grants Passive modifier for self, while not uncapacitated: PB to initiative
        tags: ["aura", "support", "initiative"],
      },
    ],

    15: [
      {
        id: "vigilant_rebuke",
        source: "subclass" as const,
        level: 15,
        grants: [{ type: "action", id: "vigilant_rebuke" }],
        tags: ["combat", "support", "reaction"],
      },
    ],

    20: [
      {
        id: "mortal_bulwark",
        source: "subclass" as const,
        level: 20,
        grants: [
          { type: "action", id: "mortal_bulwark" },
          { type: "resource", id: "mortal_bulwark" },
        ],
        tags: ["combat", "transformation", "damage", "movement"],
      },
    ],
  },
};

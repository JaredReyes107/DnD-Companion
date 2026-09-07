import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const RUNE_KNIGHT: SubclassTemplate = {
  id: "rune_knight",
  classId: "fighter",

  featuresByLevel: {
    3: [
      {
        id: "bonus_proficiencies_rune_knight",
        source: "subclass",
        level: 3,
        tags: ["tools", "proficiency", "language"],
      },
      {
        id: "rune_carver",
        source: "subclass",
        level: 3,
        grants: [{ type: "choice", id: "rune_knight_runes" }],
        tags: ["build-choice", "utility"],
      },
      {
        id: "giants_might",
        source: "subclass",
        level: 3,
        grants: [
          { type: "action", id: "giants_might" },
          { type: "resource", id: "giants_might" },
        ],
        tags: ["combat", "buff", "damage", "bonus-action"],
      },
    ],

    7: [
      {
        id: "runic_shield",
        source: "subclass",
        level: 7,
        grants: [
          { type: "action", id: "runic_shield" },
          { type: "resource", id: "runic_shield" },
        ],
        tags: ["reaction", "defense", "reroll"],
      },
    ],

    10: [
      {
        id: "great_stature",
        source: "subclass",
        level: 10,
        tags: ["passive", "combat"],
        // TODO: Improve Giant's Might (Damage -> 1d8) / Replace modifier
      },
    ],

    15: [
      {
        id: "master_of_runes",
        source: "subclass",
        level: 15,
        tags: ["passive", "resource"],
        // TODO: Scales every rune. Change to short rest. Override System
      },
    ],

    18: [
      {
        id: "runic_juggernaut",
        source: "subclass",
        level: 18,
        // TODO: Improve Giant's Might (Damage -> 1d8, Size -> Huge) / Replace modifier
        tags: ["damage"],
      },
    ],
  },
};

import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const RUNE_KNIGHT: SubclassTemplate = {
  id: "rune_knight",
  classId: "fighter",
  progression: {
    3: [
      "fighter.rune_knight.bonus_proficiencies_rune_knight",
      "fighter.rune_knight.rune_carver",
      "fighter.rune_knight.giants_might",
    ],
    7: ["fighter.rune_knight.runic_shield"],
    10: ["fighter.rune_knight.great_stature"],
    15: ["fighter.rune_knight.master_of_runes"],
    18: ["fighter.rune_knight.runic_juggernaut"],
  },

  featuresByLevel: {
    3: [
      {
        id: "fighter.rune_knight.bonus_proficiencies_rune_knight",
        source: "subclass",
        level: 3,
        tags: ["tools", "proficiency", "language"],
        grants: [
          { type: "proficiency", nodeId: "tool.smithsTools" },
          {
            type: "language",
            nodeId: "language.giant",
            modes: ["speak", "readWrite", "understand"],
          },
        ],
      },
      {
        id: "fighter.rune_knight.rune_carver",
        source: "subclass",
        level: 3,
        grants: [{ type: "choice", id: "rune_knight_runes" }],
        tags: ["build-choice", "utility"],
      },
      {
        id: "fighter.rune_knight.giants_might",
        source: "subclass",
        level: 3,
        grants: [
          { type: "action", id: "giants_might" },
          { type: "resource", id: "giants_might" },
        ],
        tags: ["combat", "buff", "bonus-action"],
      },
    ],

    7: [
      {
        id: "fighter.rune_knight.runic_shield",
        source: "subclass",
        level: 7,
        grants: [
          { type: "action", id: "runic_shield" },
          { type: "resource", id: "runic_shield" },
        ],
        tags: ["reaction", "defense"],
      },
    ],

    10: [
      {
        id: "fighter.rune_knight.great_stature",
        source: "subclass",
        level: 10,
        tags: ["passive", "combat"],
        // Extra damage upgrade 1d6 -> 1d8: not modeled
      },
    ],

    15: [
      {
        id: "fighter.rune_knight.master_of_runes",
        source: "subclass",
        level: 15,
        tags: ["passive", "resource"],
      },
    ],

    18: [
      {
        id: "fighter.rune_knight.runic_juggernaut",
        source: "subclass",
        level: 18,
        tags: ["damage"],
        // Extra damage upgrade 1d8 -> 1d10: not modeled.
        // Reach +5 ft: not modeled.
        // Size -> Huge: not modeled.
      },
    ],
  },
};

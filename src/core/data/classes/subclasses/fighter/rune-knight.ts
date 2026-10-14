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
        grants: [
          { type: "proficiency", nodeId: "tool.smithsTools" },
          {
            type: "language",
            nodeId: "language.giant",
            modes: ["speak", "readWrite"],
          },
        ],
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
          // Advantage on all STR checks and STR saves while active.
          // These instances carry a condition so they are only evaluated
          // when the Giants Might resource has been spent (i.e. action used).
          // The action itself applies them as runtime advantage instances
          // with expiry; these passive entries just ensure the templates exist.
          // NOTE: Giants Might advantage is runtime-only (applied by action),
          // not a static passive — no advantage grant here. The action applies
          // runtimeAdvantageInstances with endOfTurn expiry (1 min = 10 rounds).
        ],
        tags: ["combat", "buff", "bonus-action"],
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
        tags: ["reaction", "defense"],
        // Active: force attacker to reroll — not a stat modifier, bookkeeping only
      },
    ],

    10: [
      {
        id: "great_stature",
        source: "subclass",
        level: 10,
        tags: ["passive", "combat"],
        // Height increase: not modeled. Extra damage upgrade (1d6→1d8): not modeled
        // (damage rolls out of scope).
      },
    ],

    15: [
      {
        id: "master_of_runes",
        source: "subclass",
        level: 15,
        tags: ["passive", "resource"],
        // Each rune: 2 uses per short or long rest (replaces 1/short).
        // Scaling handled by resource-scaling registry; recharge upgrade
        // from longRest to shortRest tracked on the resource templates
        // at level 15. TODO: override recharge type at level 15.
      },
    ],

    18: [
      {
        id: "runic_juggernaut",
        source: "subclass",
        level: 18,
        tags: ["damage"],
        // Extra damage upgrade 1d8→1d10: not modeled (damage rolls out of scope).
        // Reach +5 ft: not modeled (positioning/senses out of scope).
      },
    ],
  },
};

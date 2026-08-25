import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const FEY_WANDERER: SubclassTemplate = {
  id: "fey_wanderer",
  classId: "ranger",
  source: "Tasha's Cauldron of Everything",

  featuresByLevel: {
    3: [
      {
        id: "dreadful_strikes",
        source: "subclass" as const,
        level: 3,
        grants: [
          { type: "resource", id: "dreadful_strikes" },
          { type: "action", id: "dreadful_strikes" },
        ],
        tags: ["combat", "damage"],
      },
      {
        id: "fey_wanderer_magic",
        source: "subclass" as const,
        level: 3,
        tags: ["spells", "roleplay"],
      },
      {
        id: "otherworldly_glamour",
        source: "subclass" as const,
        level: 3,
        grants: [],
        tags: ["skill", "proficiency", "bonus"],
        // TODO: Modifier. Bonus to CHA checks equal to WIS mod (min +1)
      },
    ],

    7: [
      {
        id: "beguiling_twist",
        source: "subclass" as const,
        level: 7,
        grants: [{ type: "action", id: "beguiling_twist" }],
        tags: ["combat", "control", "reaction"],
        // TODO: Modifier. Description only. Advantage on ST for charmed/frightened
      },
    ],

    11: [
      {
        id: "fey_reinforcements",
        source: "subclass" as const,
        level: 11,
        grants: [
          { type: "action", id: "fey_reinforcements" },
          { type: "resource", id: "fey_reinforcements" },
        ],
        tags: ["spells", "summoning"],
        //TODO: Grant spell as a 'spell known'
      },
    ],

    15: [
      {
        id: "misty_wanderer",
        source: "subclass" as const,
        level: 15,
        grants: [
          { type: "action", id: "misty_wanderer" },
          { type: "resource", id: "misty_wanderer" },
        ],
        tags: ["spells", "movement"],
      },
    ],
  },
};

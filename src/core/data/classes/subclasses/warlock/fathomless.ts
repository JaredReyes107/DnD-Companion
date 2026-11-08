import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const FATHOMLESS: SubclassTemplate = {
  id: "fathomless",
  classId: "warlock",
  source: "Tasha's Cauldron of Everything",
  progression: {
    1: [
      "warlock.fathomless.expanded_spell_list_fathomless",
      "warlock.fathomless.gift_of_the_sea",
      "warlock.fathomless.tentacle_of_the_deeps",
    ],
    6: ["warlock.fathomless.oceanic_soul", "warlock.fathomless.guardian_coil"],
    10: ["warlock.fathomless.grasping_tentacles"],
    14: ["warlock.fathomless.fathomless_plunge"],
  },

  featuresByLevel: {
    1: [
      {
        id: "warlock.fathomless.expanded_spell_list_fathomless",
        source: "subclass" as const,
        level: 1,
        tags: ["spells"],
      },
      {
        id: "warlock.fathomless.gift_of_the_sea",
        source: "subclass" as const,
        level: 1,
        tags: ["movement"],
        // TODO: Modifier. Swim speed 40ft + water breathing. Permanent
      },
      {
        id: "warlock.fathomless.tentacle_of_the_deeps",
        source: "subclass" as const,
        level: 1,
        grants: [
          { type: "action", id: "tentacle_of_the_deeps_summon" },
          { type: "action", id: "tentacle_of_the_deeps_move_attack" },
          { type: "resource", id: "tentacle_of_the_deeps" },
        ],
        tags: ["combat", "damage", "utility"],
      },
    ],

    6: [
      {
        id: "warlock.fathomless.oceanic_soul",
        source: "subclass" as const,
        level: 6,
        tags: ["resistance", "communication"],
        //TODO: Modifier. Cold Resistance
      },
      {
        id: "warlock.fathomless.guardian_coil",
        source: "subclass" as const,
        level: 6,
        grants: [{ type: "action", id: "guardian_coil" }],
        tags: ["defense", "reaction"],
        //TODO: Used for both self and others
      },
    ],

    10: [
      {
        id: "warlock.fathomless.grasping_tentacles",
        source: "subclass" as const,
        level: 10,
        grants: [
          { type: "action", id: "grasping_tentacles" },
          { type: "resource", id: "grasping_tentacles" },
        ],
        tags: ["spells", "control", "defense", "concentration"],
        // TODO: Spell Modifier: No concentration check on damage
      },
    ],

    14: [
      {
        id: "warlock.fathomless.fathomless_plunge",
        source: "subclass" as const,
        level: 14,
        grants: [
          { type: "action", id: "fathomless_plunge" },
          { type: "resource", id: "fathomless_plunge" },
        ],
        tags: ["movement", "utility"],
      },
    ],
  },
};

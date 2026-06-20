import { ClassTemplate } from "@/core/entities/rules/class-template";

export const BARBARIAN: ClassTemplate = {
  id: "barbarian",
  name: "Barbarian",

  hitDie: 12,

  primaryAbilities: ["STR"],
  savingThrows: ["STR", "DEX"],

  featuresByLevel: {
    1: [
      {
        id: "rage",
        source: "class",
        level: 1,
        //TODO: Add property with Id's "actions: [],"
        resources: ["rage"],
        combatRole: "active",
        tags: ["combat"],
      },
      {
        id: "unarmored_defense",
        source: "class",
        level: 1,
        combatRole: "passive",
        tags: ["combat", "ac"],
      },
    ],
    2: [
      {
        id: "reckless_attack",
        source: "class",
        level: 2,
        //TODO: Add property with Id's "actions: [],"
        resources: ["rage"],
        combatRole: "active",
        tags: ["combat", "advantage"],
      },
      {
        id: "danger_sense",
        source: "class",
        level: 2,
        combatRole: "passive",
        tags: ["combat", "advantage"],
      },
    ],
    3: [
      {
        id: "primal_path",
        source: "class",
        level: 3,
        tags: ["subclass"],
      },
    ],
    5: [
      {
        id: "extra_attack",
        source: "class",
        level: 5,
        //TODO: ¿Replace behaviour of attack? "actions: [],"
        tags: ["combat", "extra-attack"],
      },
      {
        id: "fast_movement",
        source: "class",
        level: 5,
        resources: ["rage"],
        tags: ["movement"],
      },
    ],
    6: [
      {
        id: "feral_instinct",
        source: "class",
        level: 7,
        tags: ["initiative", "advantage"],
      },
    ],
    9: [
      {
        id: "brutal_critical",
        source: "class",
        level: 9,
        tags: ["critical", "damage"],
      },
    ],
    11: [
      {
        id: "relentless_rage",
        source: "class",
        level: 11,
        //TODO: Add property with Id's "actions: [],"
        tags: ["last-stand"],
      },
    ],
    15: [
      {
        id: "persistent_rage",
        source: "class",
        level: 15,
        //TODO: Replace beheaviour of: "rage", "actions: [],"
        tags: ["combat"],
      },
    ],
    18: [
      {
        id: "indomitable_might",
        source: "class",
        level: 18,
        tags: ["combat", "ability-check"],
      },
    ],
    20: [
      {
        id: "primal_champion",
        source: "class",
        level: 20,
        tags: ["ability-score"],
      },
    ],
  },
};

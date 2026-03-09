/* eslint-disable prettier/prettier */
import { ClassTemplate } from "@/game/data/templates/class-template";

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
        label: "Rage",
        source: "class",
        level: 1,
        description: "In battle, you fight with primal ferocity.",
        //TODO: Add property with Id's "actions: [],"
        resources: ["rage"],
        combatRole: "active",
        tags: ["combat"],
      },
      {
        id: "unarmored_defense",
        label: "Unarmored Defenese",
        source: "class",
        level: 1,
        description: "Placeholder.",
        combatRole: "passive",
        tags: ["combat", "ac"],
      },
    ],
    2: [
      {
        id: "reckless_attack",
        label: "Reckless Attack",
        source: "class",
        level: 2,
        description: "Placeholder.",
        //TODO: Add property with Id's "actions: [],"
        resources: ["rage"],
        combatRole: "active",
        tags: ["combat", "advantage"],
      },
      {
        id: "danger_sense",
        label: "Danger Sense",
        source: "class",
        level: 2,
        description: "Placeholder.",
        combatRole: "passive",
        tags: ["combat", "advantage"],
      },
    ],
    3: [
      {
        id: "primal_path",
        label: "Primal Path",
        source: "class",
        level: 3,
        description: "Placeholder.",
        tags: ["subclass"],
      },
    ],
    5: [
      {
        id: "extra_attack",
        label: "Extra Attack",
        source: "class",
        level: 5,
        description: "Placeholder.",
        //TODO: ¿Replace behaviour of attack? "actions: [],"
        tags: ["combat", "extra-attack"],
      },
      {
        id: "fast_movement",
        label: "Fast Movement",
        source: "class",
        level: 5,
        description: "Placeholder.",
        resources: ["rage"],
        tags: ["movement"],
      },
    ],
    6: [
      {
        id: "feral_instinct",
        label: "Feral Instinct",
        source: "class",
        level: 7,
        description: "Placeholder.",
        tags: ["initiative", "advantage"],
      },
    ],
    9: [
      {
        id: "brutal_critical",
        label: "Brutal Critical",
        source: "class",
        level: 9,
        description: "Placeholder.",
        tags: ["critical", "damage"],
      },
    ],
    11: [
      {
        id: "relentless_rage",
        label: "Relentless Rage",
        source: "class",
        level: 11,
        description: "Placeholder.",
        //TODO: Add property with Id's "actions: [],"
        tags: ["last-stand"],
      },
    ],
    15: [
      {
        id: "persistent_rage",
        label: "Persistent Rage",
        source: "class",
        level: 15,
        description: "Placeholder.",
        //TODO: Replace beheaviour of: "rage", "actions: [],"
        tags: ["combat"],
      },
    ],
    18: [
      {
        id: "indomitable_might",
        label: "Indomitable Might",
        source: "class",
        level: 18,
        description: "Placeholder.",
        tags: ["combat", "ability-check"],
      },
    ],
    20: [
      {
        id: "primal_champion",
        label: "Primal Champion",
        source: "class",
        level: 20,
        description: "Placeholder.",
        tags: ["ability-score"],
      },
    ],
  },
};

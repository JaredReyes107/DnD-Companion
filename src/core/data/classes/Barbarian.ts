import { ClassTemplate } from "@/core/entities/rules/class-template";
import { abilityScoreImprovement } from "../rules/features/feats";

// NOTES:
/*
  1. Hide root.tools
  2. Move abilityScoreImprovement into "Common features"-like file, future use for feats too
  3. Choices/Pools for regular skill proficiencies
  4. Class template only grants: doesn't hard define advantage instances (e.g. danger sense) -> Move to registries
     This to allow future homebrew sharing to other classes/subclasses
  5. "Partial" Advantages. Different color, inspect description. Not complete model
*/

export const BARBARIAN: ClassTemplate = {
  id: "barbarian",

  hitDie: 12,

  primaryAbilities: ["STR"],
  savingThrows: ["STR", "DEX"],

  featuresByLevel: {
    1: [
      {
        id: "proficiencies_barbarian",
        source: "class",
        level: 1,
        grants: [
          { type: "proficiency", nodeId: "armor.light" },
          { type: "proficiency", nodeId: "armor.medium" },
          { type: "proficiency", nodeId: "armor.shield" },
          { type: "proficiency", nodeId: "weapon.simple" },
          { type: "proficiency", nodeId: "weapon.martial" },
          { type: "proficiency", nodeId: "savingThrow.STR" },
          { type: "proficiency", nodeId: "savingThrow.CON" },
          { type: "choice", id: "barbarian_skills" },
        ],
        tags: ["proficiency"],
      },
      {
        id: "rage",
        source: "class",
        level: 1,
        grants: [
          { type: "action", id: "rage" },
          { type: "action", id: "end_rage" },
          { type: "resource", id: "rage" },
        ],
        tags: ["combat"],
      },
      {
        id: "unarmored_defense",
        source: "class",
        level: 1,
        grants: [{ type: "modifier", id: "barbarian_unarmored_defense" }],
        tags: ["combat", "ac"],
      },
    ],
    2: [
      {
        id: "reckless_attack",
        source: "class",
        grants: [{ type: "action", id: "reckless_attack" }],
        level: 2,
      },
      {
        id: "danger_sense",
        source: "class",
        level: 2,
        grants: [{ type: "advantage", id: "danger_sense_dex_saves" }],
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
    4: [abilityScoreImprovement(4)],
    5: [
      {
        id: "extra_attack",
        source: "class",
        level: 5,
        //TODO: Override.
        tags: ["combat", "extra-attack"],
      },
      {
        id: "fast_movement",
        source: "class",
        level: 5,
        grants: [{ type: "modifier", id: "barbarian_fast_movement" }],
        tags: ["movement"],
      },
    ],
    7: [
      {
        id: "feral_instinct",
        source: "class",
        level: 7,
        grants: [{ type: "advantage", id: "feral_instinct_initiative" }],
        tags: ["initiative", "advantage"],
      },
    ],
    8: [abilityScoreImprovement(8)],
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
        // TODO: Resource/Counter. Track DC increases
        grants: [{ type: "action", id: "relentless_rage" }],
        tags: ["last-stand"],
      },
    ],
    15: [
      {
        id: "persistent_rage",
        source: "class",
        level: 15,
        //TODO: Override. Description append/change behaviour based on log
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
        grants: [
          { type: "modifier", id: "barbarian_primal_champion_str" },
          { type: "modifier", id: "barbarian_primal_champion_con" },
        ],
        tags: ["ability-score"],
      },
    ],
  },
};

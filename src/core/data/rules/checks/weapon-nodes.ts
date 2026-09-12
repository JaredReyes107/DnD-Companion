import { CheckNode } from "@/core/entities/rules/check/check-node";

export const WEAPON_NODES: Record<string, CheckNode> = {
  "weapon.simple": {
    id: "weapon.simple",
    category: "weaponCheck",
    parentIds: [],
  },
  "weapon.martial": {
    id: "weapon.martial",
    category: "weaponCheck",
    parentIds: [],
  },
  "weapon.melee": {
    id: "weapon.melee",
    category: "weaponCheck",
    parentIds: [],
  },
  "weapon.ranged": {
    id: "weapon.ranged",
    category: "weaponCheck",
    parentIds: [],
  },

  // Two independent axes meeting at these intermediate nodes is why
  // weapons need multi-parent support and the rest of the tree doesn't.
  "weapon.simpleMelee": {
    id: "weapon.simpleMelee",
    category: "weaponCheck",
    parentIds: ["weapon.simple", "weapon.melee"],
  },
  "weapon.simpleRanged": {
    id: "weapon.simpleRanged",
    category: "weaponCheck",
    parentIds: ["weapon.simple", "weapon.ranged"],
  },
  "weapon.martialMelee": {
    id: "weapon.martialMelee",
    category: "weaponCheck",
    parentIds: ["weapon.martial", "weapon.melee"],
  },
  "weapon.martialRanged": {
    id: "weapon.martialRanged",
    category: "weaponCheck",
    parentIds: ["weapon.martial", "weapon.ranged"],
  },

  // Individual weapons — homebrew adds leaves the same way, e.g.
  // "weapon.scythe": { parentIds: ["weapon.martialMelee"] }, or a whole
  // new "weapon.firearm" node parented under ["weapon.ranged"] to skip
  // the simple/martial axis entirely. No schema change either way.
  "weapon.longsword": {
    id: "weapon.longsword",
    category: "weaponCheck",
    parentIds: ["weapon.martialMelee"],
  },
  "weapon.shortbow": {
    id: "weapon.shortbow",
    category: "weaponCheck",
    parentIds: ["weapon.simpleRanged"],
  },
};

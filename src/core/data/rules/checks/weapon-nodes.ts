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

  //#region Simple Weapons
  "weapon.club": {
    id: "weapon.club",
    category: "weaponCheck",
    parentIds: ["weapon.simpleMelee"],
  },
  "weapon.dagger": {
    id: "weapon.dagger",
    category: "weaponCheck",
    parentIds: ["weapon.simpleMelee"],
  },
  "weapon.greatclub": {
    id: "weapon.greatclub",
    category: "weaponCheck",
    parentIds: ["weapon.simpleMelee"],
  },
  "weapon.handaxe": {
    id: "weapon.handaxe",
    category: "weaponCheck",
    parentIds: ["weapon.simpleMelee"],
  },
  "weapon.javelin": {
    id: "weapon.javelin",
    category: "weaponCheck",
    parentIds: ["weapon.simpleMelee"],
  },
  "weapon.lightHammer": {
    id: "weapon.lightHammer",
    category: "weaponCheck",
    parentIds: ["weapon.simpleMelee"],
  },
  "weapon.mace": {
    id: "weapon.mace",
    category: "weaponCheck",
    parentIds: ["weapon.simpleMelee"],
  },
  "weapon.quarterstaff": {
    id: "weapon.quarterstaff",
    category: "weaponCheck",
    parentIds: ["weapon.simpleMelee"],
  },
  "weapon.sickle": {
    id: "weapon.sickle",
    category: "weaponCheck",
    parentIds: ["weapon.simpleMelee"],
  },
  "weapon.spear": {
    id: "weapon.spear",
    category: "weaponCheck",
    parentIds: ["weapon.simpleMelee"],
  },
  "weapon.lightCrossbow": {
    id: "weapon.lightCrossbow",
    category: "weaponCheck",
    parentIds: ["weapon.simpleRanged"],
  },
  "weapon.dart": {
    id: "weapon.dart",
    category: "weaponCheck",
    parentIds: ["weapon.simpleRanged"],
  },
  "weapon.shortbow": {
    id: "weapon.shortbow",
    category: "weaponCheck",
    parentIds: ["weapon.simpleRanged"],
  },
  "weapon.sling": {
    id: "weapon.sling",
    category: "weaponCheck",
    parentIds: ["weapon.simpleRanged"],
  },
  //#endregion
  //#region Martial Weapons
  "weapon.battleaxe": {
    id: "weapon.battleaxe",
    category: "weaponCheck",
    parentIds: ["weapon.martialMelee"],
  },
  "weapon.flail": {
    id: "weapon.flail",
    category: "weaponCheck",
    parentIds: ["weapon.martialMelee"],
  },
  "weapon.glaive": {
    id: "weapon.glaive",
    category: "weaponCheck",
    parentIds: ["weapon.martialMelee"],
  },
  "weapon.greataxe": {
    id: "weapon.greataxe",
    category: "weaponCheck",
    parentIds: ["weapon.martialMelee"],
  },
  "weapon.greatsword": {
    id: "weapon.greatsword",
    category: "weaponCheck",
    parentIds: ["weapon.martialMelee"],
  },
  "weapon.halberd": {
    id: "weapon.halberd",
    category: "weaponCheck",
    parentIds: ["weapon.martialMelee"],
  },
  "weapon.lance": {
    id: "weapon.lance",
    category: "weaponCheck",
    parentIds: ["weapon.martialMelee"],
  },
  "weapon.longsword": {
    id: "weapon.longsword",
    category: "weaponCheck",
    parentIds: ["weapon.martialMelee"],
  },
  "weapon.maul": {
    id: "weapon.maul",
    category: "weaponCheck",
    parentIds: ["weapon.martialMelee"],
  },
  "weapon.morningstar": {
    id: "weapon.morningstar",
    category: "weaponCheck",
    parentIds: ["weapon.martialMelee"],
  },
  "weapon.pike": {
    id: "weapon.pike",
    category: "weaponCheck",
    parentIds: ["weapon.martialMelee"],
  },
  "weapon.rapier": {
    id: "weapon.rapier",
    category: "weaponCheck",
    parentIds: ["weapon.martialMelee"],
  },
  "weapon.scimitar": {
    id: "weapon.scimitar",
    category: "weaponCheck",
    parentIds: ["weapon.martialMelee"],
  },
  "weapon.shortsword": {
    id: "weapon.shortsword",
    category: "weaponCheck",
    parentIds: ["weapon.martialMelee"],
  },
  "weapon.trident": {
    id: "weapon.trident",
    category: "weaponCheck",
    parentIds: ["weapon.martialMelee"],
  },
  "weapon.warPick": {
    id: "weapon.warPick",
    category: "weaponCheck",
    parentIds: ["weapon.martialMelee"],
  },
  "weapon.warhammer": {
    id: "weapon.warhammer",
    category: "weaponCheck",
    parentIds: ["weapon.martialMelee"],
  },
  "weapon.whip": {
    id: "weapon.whip",
    category: "weaponCheck",
    parentIds: ["weapon.martialMelee"],
  },
  "weapon.blowgun": {
    id: "weapon.blowgun",
    category: "weaponCheck",
    parentIds: ["weapon.martialRanged"],
  },
  "weapon.handCrossbow": {
    id: "weapon.handCrossbow",
    category: "weaponCheck",
    parentIds: ["weapon.martialRanged"],
  },
  "weapon.heavyCrossbow": {
    id: "weapon.heavyCrossbow",
    category: "weaponCheck",
    parentIds: ["weapon.martialRanged"],
  },
  "weapon.longbow": {
    id: "weapon.longbow",
    category: "weaponCheck",
    parentIds: ["weapon.martialRanged"],
  },
  "weapon.net": {
    id: "weapon.net",
    category: "weaponCheck",
    parentIds: ["weapon.martialRanged"],
  },
  //#endregion
};

export const WEAPON_PROFICIENCY_UI_ROOTS = ["weapon.simple", "weapon.martial"];

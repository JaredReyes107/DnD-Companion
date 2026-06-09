import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

/**
 * Eldritch Knight — Fighter subclass (Player's Handbook)
 */
export const ELDRITCH_KNIGHT: SubclassTemplate = {
  id: "eldritch_knight",
  classId: "fighter",
  name: "Eldritch Knight",
  source: "Players Handbook",

  spellcastingTemplate: {
    id: "eldritch_knight_spellcasting",
    ability: "INT",
    kind: "standard",
    progression: "third",
  },

  featuresByLevel: {
    3: [
      {
        id: "weapon_bond",
        label: "Weapon Bond",
        source: "subclass",
        level: 3,
        description: `You can perform a ritual over the course of 1 hour to bond with a weapon. The ritual can be perfomed as part of a short or long rest.
          You can't be disarmed of a bonded weapon unless you are incapacitated. As long as the weapon is on the same plane as you, you can summon it to your hand as a bonus action.
          You can have up to two bonded weapons, but can only summon one at a time with your bonus action. If you attempt to bond with a third, you must break the bond with one of the other weapons.`,
        actions: ["summon_bonded_weapon"],
        tags: ["action"],
      },
    ],

    7: [
      {
        id: "war_magic",
        label: "War Magic",
        source: "subclass",
        level: 7,
        description:
          "WHen you use your action to cast a cantrip, you can make one weapon attack as a bonus action.",
        actions: ["war_magic"],
        tags: ["combat"],
      },
    ],

    10: [
      {
        id: "eldritch_strike",
        label: "Eldrithc Strike",
        source: "subclass",
        level: 10,
        description:
          "When you hit a creature with a weapon attack, that creature hast disadvantage on the next saving throw it makes against a spell you cast before the end of your next turn.",
        tags: ["passive"],
      },
    ],

    15: [
      {
        id: "arcane_charge",
        label: "Arcane Charge",
        source: "subclass",
        level: 15,
        description:
          "You teleport up to 30 ft. to an unocuppied space you can see when you use Action Surge. You can teleport before or after the additional action",
        // TODO: Modify Action Surge Beahviour or tooltip
        tags: ["combat"],
      },
    ],

    18: [
      {
        id: "improved_war_magic",
        label: "Improved War Magic",
        source: "subclass",
        level: 18,
        description:
          "When you use your action to cast a spell, you can make a weapon attack as a bonus action",
        //TODO: Replace the original War Magic Action or just remove the condition of canntrip (spell lv = 0)
        tags: ["action", "combat"],
      },
    ],
  },
};

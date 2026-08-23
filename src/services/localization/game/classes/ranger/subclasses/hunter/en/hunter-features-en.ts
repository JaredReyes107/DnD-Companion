import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const hunter_features_en: GameLocalizationCategory = {
  hunters_prey: {
    name: "Hunter's Prey",
    description:
      "You gain one of the following features of your choice: Colossus Slayer, Giant Killer or Horde Breaker.",
  },
  defensive_tactics: {
    name: "Defensive Tactics",
    description:
      "You gain one of the following features of your choice: Escape the Horde, Multiattack Defense, Steel Will.",
  },
  multiattack: {
    name: "Multiattack",
    description:
      "You gain one of the following features of your choice: Volley or Whirlwind Attack",
  },
  superior_hunters_defense: {
    name: "Superior Hunter's Defense",
    description:
      "You gain one of the following features of your choice: Evasion, Stand Against the Tide or Uncanny Dodge",
  },

  // Lv. 3 Pool
  colossus_slayer: {
    name: "Colossus Slayer",
    description:
      "Your tenacity can wear down the most potent foes. When you hit a creature with a weapon attack, the creature takes an extra 1d8 damage if it's below its hit point maximum. You can deal this extra damage only once per turn.",
  },
  giant_killer: {
    name: "Giant Killer",
    description:
      "When a Large or larger creature within 5 feet of you hits or misses you with an attack, you can use your reaction to attack that creature immediately after its attack, provided that you can see the creature.",
  },
  horde_breaker: {
    name: "Horde Breaker",
    description:
      "Once on each of your turns when you make a weapon attack, you can make another attack with the same weapon against a different creature that is within 5 feet of the original target and within range of your weapon.",
  },

  // Lv. 7 Pool
  escape_the_horde: {
    name: "Escape the Horde",
    description: "Opportunity attacks against you are made with disadvantage.",
  },
  multiattack_defense: {
    name: "Multiattack Defense",
    description:
      "When a creature hits you with an attack, you gain a +4 bonus to AC against all subsequent attacks made by that creature for the rest of the turn.",
  },
  steel_will: {
    name: "Steel Will",
    description:
      "You have advantage on saving throws against being frightened.",
  },

  // Lv. 11 Pool
  volley: {
    name: "Volley",
    description:
      "You can use your action to make a ranged attack against any number of creatures within 10 feet of a point you can see within your weapon's range. You must have ammunition for each target, as normal, and you make a separate attack roll for each target.",
  },
  whirlwind_attack: {
    name: "Whirlwind Attack",
    description:
      "You can use your action to make a melee attack against any number of creatures within 5 feet of you, with a separate attack roll for each target.",
  },

  // Lv. 15 Pool
  evasion_hunter: {
    name: "Evasion",
    description:
      "You can nimbly dodge out of the way of certain area effects, such as a red dragon's fiery breath or a lightning bolt spell. When you are subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you instead take no damage if you succeed on the saving throw, and only half damage if you fail.",
  },
  stand_against_the_tide: {
    name: "Stand Against the Tide",
    description:
      "When a hostile creature misses you with a melee attack, you can use your reaction to force that creature to repeat the same attack against another creature (other than itself) of your choice.",
  },
  uncanny_dodge: {
    name: "Uncanny Dodge",
    description:
      "When an attacker that you can see hits you with an attack, you can use your reaction to halve the attack's damage against you.",
  },
};

import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const hunter_actions_en: GameLocalizationCategory = {
  colossus_slayer: {
    name: "Colossus Slayer",
    description: `You deal 1d8 extra damage when you hit a creature with a weapon attack if it's below it's hit point maximum.`,
  },
  giant_killer: {
    name: "Giant Killer",
    description: `When a Large or larger creature within 5 feet of you that you can see, you can use your reaction to attack that creature immediately after its attack.`,
  },
  horde_breaker: {
    name: "Horde Breaker",
    description: `When you make a weapon attack, you can make another attack with the same weapon against a different creature that is within 5 feet of the original target and within range of your weapon.`,
  },
  volley: {
    name: "Volley",
    description: `You make a ranged attack against any number of creatures within 10 feet of a point you can see within your weapon’s range. You must have ammunition for each target, as normal, and you make a separate attack roll for each target`,
  },
  whirlwind_attack: {
    name: "Whirlwind Attack",
    description: `You make melee attacks against any number of creatures within 5 feet of you, with a separate attack roll for each target.`,
  },
  stand_against_the_tide: {
    name: "Stand Against the Tide",
    description: `When a hostile creature misses you with a melee attack, you can use your reaction to force that creature to repeat the same attack against another creature (other than itself) of your choice.`,
  },
  uncanny_dodge_hunter: {
    name: "Uncanny Dodge",
    description: `When an attacker that you can see hits you with an attack, you can use your reaction to halve the attack’s damage against you.`,
  },
};

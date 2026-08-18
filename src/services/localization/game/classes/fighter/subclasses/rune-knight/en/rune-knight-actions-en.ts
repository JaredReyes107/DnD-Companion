import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const rune_knight_actions_en: GameLocalizationCategory = {
  giants_might: {
    name: "Giant's Might",
    description: `If you are smaller than Large, you become Large, along with anything you are wearing. If you lack the room to become Large, your size doesn't change. You have advantage on Strength checks and Strength saving throws. Aditionally, once on each of your turns, one of your attacks with a weapon or an unarmed strike can deal an extra 1d6 damage to a target on a hit.`,
  },
  runic_shield: {
    name: "Runic Shield",
    description: `When another creature you can see within 60 feet of you is hit by an attack roll, you can use your reaction to force the attacker to reroll the d20 and use the new roll.`,
  },

  // Rune actions
  cloud_rune: {
    name: "Cloud Rune",
    description: `When you or a creature you can see within 30 feet of you is hit by an attack roll, you can use your reaction to invoke the rune and choose a different creature within 30 feet of you, other than the attacker. The chosen creature becomes the target of the attack, using the same roll. This magic can transfer the attack's effects regardless of the attack's range.`,
  },
  fire_rune: {
    name: "Fire Rune",
    description: `When you hit a creature with an attack using a weapon, you can invoke the rune to summon fiery shackles: the target takes an extra 2d6 fire damage, and it must succeed on a Strength saving throw or be restrained for 1 minute. While restrained by the shackles, the target takes 2d6 fire damage at the start of each of its turns. The target can repeat the saving throw at the end of each of its turns, banishing the shackles on a success.`,
  },
  frost_rune: {
    name: "Frost Rune",
    description: `For 10 minutes, you gain a +2 bonus to all ability checks and saving throws that use Strength or Constitution.`,
  },
  stone_rune: {
    name: "Stone Rune",
    description: `When a creature you can see ends its turn within 30 feet of you, you can use your reaction to invoke the rune and force the creature to make a Wisdom saving throw. Unless the save succeeds, the creature is charmed by you for 1 minute. While charmed in this way, the creature has a speed of 0 and is incapacitated, descending into a dreamy stupor. The creature repeats the saving throw at the end of each of its turns, ending the effect on a success.`,
  },
  hill_rune: {
    name: "Hill Rune",
    description: `You gain resistance to bludgeoning, piercing, and slashing damage for 1 minute.`,
  },
  storm_rune: {
    name: "Storm Rune",
    description: `You enter a prophetic state for 1 minute or until you're incapacitated. Until the state ends, when you or another creature you can see within 60 feet of you makes an attack roll, a saving throw, or an ability check, you can use your reaction to cause the roll to have advantage or disadvantage.`,
  },

  storm_rune_foresight: {
    name: "Storm Rune: Foresight",
    description: `When you or another creature you can see within 60 feet of you makes an attack roll, a saving throw, or an ability check, you can use your reaction to cause the roll to have advantage or disadvantage.`,
  },
};

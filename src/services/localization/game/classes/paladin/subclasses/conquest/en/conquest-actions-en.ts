import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const conquest_actions_en: GameLocalizationCategory = {
  channel_divinity_conquering_presence: {
    name: "Channel Divinity: Conquering Presence",
    description: `You force each creature of your choice that you can see within 30 feet of you to make a Wisdom saving throw. On a failed save, a creature becomes frightened of you for 1 minute. The frightened creature can repeat this saving throw at the end of each of its turns, ending the effect on itself on a success.`,
  },
  channel_divinity_guided_strike: {
    name: "Channel Divinity: Guided Strike",
    description: `You gain a +10 bonus to an attack roll you make. You make this choice after you see the roll, but before the DM says whether the attack hits or misses.`,
  },
  scornful_rebuke: {
    name: "Scornful Rebuke",
    description: `Whenever a creature hits you with an attack, that creature takes psychic damage equal to your Charisma modifier (minimum of 1) if you’re not incapacitated.`,
  },
  invincible_conqueror: {
    name: "Invincible Conqueror",
    description: `You become an avatar of conquest, gaining the following benefits for 1 minute:
        - You have resistance to all damage.
        - When you take the Attack action on your turn, you can make one additional attack as part of that action.
        - Your melee weapon attacks score a critical hit on a roll of 19 or 20 on the d20.`,
  },
};

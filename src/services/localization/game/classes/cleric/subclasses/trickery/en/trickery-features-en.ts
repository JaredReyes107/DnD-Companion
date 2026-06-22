import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const trickery_features_en: GameLocalizationCategory = {
  trickery_domain_spells: {
    name: "Domain Spells",
    description: `Domain spells are always prepared and they don't count againts the number of spells you can prepare each day.
      If you have a domain spell that's not from the cleric spell list, that spell becomes a cleric spell for you`,
  },
  blessing_of_the_trickster: {
    name: "Blessing of the Trickster",
    description: "You can use your action to touch a willing creature other than yourself to give it advantage on Dexterity (Stealth) checks. This blessing lasts for 1 hour or until you use this feature again.",
  },
  channel_divinity_invoke_duplicity: {
    name: "Channel Divinity: Invoke Duplicity",
    description: "You can use your Channel Divinity to create an illusory duplicate of yourself. As an action, you create a perfect illusion of yourself that lasts for 1 minute, or until you lose your concentration (as if you were concentration on a spell). The illusion appears in an unoccupied space that you can see within 30 feet of you. As a bonus action on your turn, you can move the illusion up to 30 feet to a space you can see, but it must remain within 120 feet of you. For the duration, you can cast spells as though you were in the illusion's space, but you must use your own senses. Additionally, when both you and your illusion are within 5 feet of a creature that can see the illusion, you have advantage on attack rolls against that creature, given how distracting the illusion is to the target.",
  },
  channel_divinity_cloak_of_shadows: {
    name: "Channel Divinity: Cloak of Shadows",
    description: "You can use your Channel Divinity to vanish. As an action, you become invisible until the end of your next turn. You become visible if you attack or cast a spell.",
  },
  divine_strike: {
    name: "Divine Strike",
    description: "You gain the ability to infuse your weapon strikes with poison—a gift from your deity. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 poison damage to the target. When you reach 14th level, the extra damage increases to 2d8.",
  },
  improved_duplicity: {
    name: "Improved Duplicity",
    description: "You can create up to four duplicates of yourself, instead of one, when you use Invoke Duplicity. As a bonus action on your turn, you can move any number of them up to 30 feet, to a maximum range of 120 feet.",
  },
};

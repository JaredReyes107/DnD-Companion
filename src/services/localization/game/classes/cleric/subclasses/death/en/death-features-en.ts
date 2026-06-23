import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const death_features_en: GameLocalizationCategory = {
  bonus_proficiencies: {
    name: "Bonus Proficiencies",
    description: "You proficiency with martial weapons.",
  },
  reaper: {
    name: "Reaper",
    description:
      "You learn one necromancy cantrip of his or her choice from any spell list. When the cleric casts a necromancy cantrip that normally targets only one creature, the spell can instead target two creatures within range and within 5 feet of each other.",
  },
  channel_divinity_touch_of_death: {
    name: "Channel Divinity: Touch of Death",
    description:
      "You can use Channel Divinity to destroy another creature's life force by touch. When the cleric hits a creature with a melee attack, the cleric can use Channel Divinity to deal extra necrotic damage to the target. The damage equals 5 + twice his or her cleric level.",
  },
  inescapable_destruction: {
    name: "Inescapable Destruction",
    description:
      "The cleric's ability to channel negative energy becomes more potent. Necrotic damage dealt by the your spells and Channel Divinity options ignores resistance to necrotic damage.",
  },
  divine_strike: {
    name: "Divine Strike",
    description:
      "You gain the ability to infuse his or her weapon strikes with necrotic energy. Once on each of the cleric's turns when he or she hits a creature with a weapon attack, the cleric can cause the attack to deal an extra 1d8 necrotic damage to the target. When the cleric reaches 14th level, the extra damage increases to 2d8.",
  },
  improved_reaper: {
    name: "Improved Reaper",
    description:
      "When you cast a Necromancy spell of 1st through 5th-level that targets only one creature, the spell can instead target two creatures within range and within 5 feet of each other. If the spell consumes its material components, the cleric must provide them for each target.",
  },
};

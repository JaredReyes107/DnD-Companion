import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const life_features_en: GameLocalizationCategory = {
  life_domain_spells: {
    name: "Domain Spells",
    description: `Domain spells are always prepared and they don't count againts the number of spells you can prepare each day.
      If you have a domain spell that's not from the cleric spell list, that spell becomes a cleric spell for you`,
  },
  bonus_proficiencies: {
    name: "Bonus Proficiency",
    description: "Also at 1st level, you gain proficiency with heavy armor.",
  },
  disciple_of_life: {
    name: "Disciple of Life",
    description: "Starting at 1st level, your healing spells are more effective. Whenever you use a spell of 1st level or higher to restore hit points to a creature, the creature regains additional hit points equal to 2 + the spell's level.",
  },
  channel_divinity_preserve_life: {
    name: "Channel Divinity: Preserve Life",
    description: "Starting at 2nd level, you can use your Channel Divinity to heal the badly injured. As an action, you present your holy symbol and evoke healing energy that can restore a number of hit points equal to five times your cleric level. Choose any creatures within 30 feet of you, and divide those hit points among them. This feature can restore a creature to no more than half of its hit point maximum. You can't use this feature on an undead or a construct.",
  },
  blessed_healer: {
    name: "Blessed Healer",
    description: "Beginning at 6th level, the healing spells you cast on others heal you as well. When you cast a spell of 1st level or higher that restores hit points to a creature other than you, you regain hit points equal to 2 + the spell's level.",
  },
  blessed_strikes: {
    name: "Blessed Strikes",
    description: "8th-level cleric {@variantrule optional class features, which replaces the Divine Strike feature} You are blessed with divine might in battle. When a creature takes damage from one of your cantrips or weapon attacks, you can also deal 1d8 radiant damage to that creature. Once you deal this damage, you can't use this feature again until the start of your next turn.",
  },
  divine_strike: {
    name: "Divine Strike",
    description: "At 8th level, you gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 radiant damage to the target. When you reach 14th level, the extra damage increases to 2d8.",
  },
  supreme_healing: {
    name: "Supreme Healing",
    description: "Starting at 17th level, when you would normally roll one or more dice to restore hit points with a spell, you instead use the highest number possible for each die. For example, instead of restoring 2d6 hit points to a creature, you restore 12.",
  },
};

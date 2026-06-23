import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const war_features_en: GameLocalizationCategory = {
  war_domain_spells: {
    name: "Domain Spells",
    description: `Domain spells are always prepared and they don't count againts the number of spells you can prepare each day.
      If you have a domain spell that's not from the cleric spell list, that spell becomes a cleric spell for you`,
  },
  bonus_proficiencies: {
    name: "Bonus Proficiencies",
    description: "You gain proficiency with martial weapons and heavy armor.",
  },
  war_priest: {
    name: "War Priest",
    description:
      "Your god delivers bolts of inspiration to you while you are engaged in battle. When you use the Attack action, you can make one weapon attack as a bonus action. You can use this feature a number of times equal to your Wisdom modifier (a minimum of once). You regain all expended uses when you finish a long rest.",
  },
  channel_divinity_guided_strike: {
    name: "Channel Divinity: Guided Strike",
    description:
      "You can use your Channel Divinity to strike with supernatural accuracy. When you make an attack roll, you can use your Channel Divinity to gain a +10 bonus to the roll. You make this choice after you see the roll, but before the DM says whether the attack hits or misses.",
  },
  channel_divinity_war_gods_blessing: {
    name: "Channel Divinity: War God's Blessing",
    description:
      "When a creature within 30 feet of you makes an attack roll, you can use your reaction to grant that creature a +10 bonus to the roll, using your Channel Divinity. You make this choice after you see the roll, but before the DM says whether the attack hits or misses.",
  },
  divine_strike: {
    name: "Divine Strike",
    description:
      "You gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 damage of the same type dealt by the weapon to the target. When you reach 14th level, the extra damage increases to 2d8.",
  },
  avatar_of_battle: {
    name: "Avatar of Battle",
    description:
      "You gain resistance to bludgeoning, piercing, and slashing damage from nonmagical attacks.",
  },
};

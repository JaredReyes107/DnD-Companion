import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const order_features_en: GameLocalizationCategory = {
  order_domain_spells: {
    name: "Domain Spells",
    description: `Domain spells are always prepared and they don't count againts the number of spells you can prepare each day.
      If you have a domain spell that's not from the cleric spell list, that spell becomes a cleric spell for you`,
  },
  bonus_proficiencies: {
    name: "Bonus Proficiencies",
    description: "When you choose this domain at 1st level, you gain proficiency with heavy armor. You also gain proficiency in the Intimidation or Persuasion skill (your choice).",
  },
  voice_of_authority: {
    name: "Voice of Authority",
    description: "Starting at 1st level, you can invoke the power of law to drive an ally to attack. If you cast a spell with a spell slot of 1st level or higher and target an ally with the spell, that ally can use their reaction immediately after the spell to make one weapon attack against a creature of your choice that you can see. If the spell targets more than one ally, you choose the ally who can make the attack.",
  },
  channel_divinity_orders_demand: {
    name: "Channel Divinity: Order's Demand",
    description: "Starting at 2nd level, you can use your Channel Divinity to exert an intimidating presence over others. As an action, you present your holy symbol, and each creature of your choice that can see or hear you within 30 feet of you must succeed on a Wisdom saving throw or be charmed by you until the end of your next turn or until the charmed creature takes any damage. You can also cause any of the charmed creatures to drop what they are holding when they fail the saving throw.",
  },
  embodiment_of_the_law: {
    name: "Embodiment of the Law",
    description: "At 6th level, you become remarkably adept at channeling magical energy to compel others. If you cast a spell of the enchantment school using a spell slot of 1st level or higher, you can change the spell's casting time to 1 bonus action for this casting, provided the spell's casting time is normally 1 action. You can use this feature a number of times equal to your Wisdom modifier (minimum of once), and you regain all expended uses of it when you finish a long rest.",
  },
  blessed_strikes: {
    name: "Blessed Strikes",
    description: "8th-level cleric {@variantrule optional class features, which replaces the Divine Strike feature} You are blessed with divine might in battle. When a creature takes damage from one of your cantrips or weapon attacks, you can also deal 1d8 radiant damage to that creature. Once you deal this damage, you can't use this feature again until the start of your next turn.",
  },
  divine_strike: {
    name: "Divine Strike",
    description: "At 8th level, you gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 psychic damage to the target. When you reach 14th level, the extra damage increases to 2d8.",
  },
  orders_wrath: {
    name: "Order's Wrath",
    description: "Starting at 17th level, enemies you designate for destruction wilt under the combined efforts of you and your allies. If you deal your Divine Strike damage to a creature on your turn, you can curse that creature until the start of your next turn. The next time one of your allies hits the cursed creature with an attack, the target also takes 2d8 psychic damage, and the curse ends. You can curse a creature in this way only once per turn.",
  },
};

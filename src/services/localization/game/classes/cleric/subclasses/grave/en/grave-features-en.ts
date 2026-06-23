import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const grave_features_en: GameLocalizationCategory = {
  grave_domain_spells: {
    name: "Domain Spells",
    description: `Domain spells are always prepared and they don't count againts the number of spells you can prepare each day.
      If you have a domain spell that's not from the cleric spell list, that spell becomes a cleric spell for you`,
  },
  circle_of_mortality: {
    name: "Circle of Mortality",
    description:
      "At 1st level, you gain the ability to manipulate the line between life and death. When you would normally roll one or more dice to restore hit points with a spell to a creature at 0 hit points, you instead use the highest number possible for each die. In addition, you learn the spare the dying cantrip, which doesn't count against the number of cleric cantrips you know. For you, it has a range of 30 feet, and you can cast it as a bonus action.",
  },
  eyes_of_the_grave: {
    name: "Eyes of the Grave",
    description:
      "At 1st level, you gain the ability to occasionally sense the presence of the undead, whose existence is an insult to the natural cycle of life. As an action, you can open your awareness to magically detect undead. Until the end of your next turn, you know the location of any undead within 60 feet of you that isn't behind Cover and that isn't protected from divination magic. This sense doesn't tell you anything about a creature's capabilities or identity. You can use this feature a number of times equal to your Wisdom modifier (minimum of once). You regain all expended uses when you finish a long rest.",
  },
  channel_divinity_path_to_the_grave: {
    name: "Channel Divinity: Path to the Grave",
    description:
      "Starting at 2nd level, you can use your Channel Divinity to mark another creature's life force for termination. As an action, you choose one creature you can see within 30 feet of you, cursing it until the end of your next turn. The next time you or an ally of yours hits the cursed creature with an attack, the creature has vulnerability to all of that attack's damage, and then the curse ends.",
  },
  sentinel_at_deaths_door: {
    name: "Sentinel at Death's Door",
    description:
      "At 6th level, you gain the ability to impede death's progress. As a reaction when you or a creature you can see within 30 feet of you suffers a critical hit, you can turn that hit into a normal hit. Any effects triggered by a critical hit are canceled. You can use this feature a number of times equal to your Wisdom modifier (minimum of once). You regain all expended uses when you finish a long rest.",
  },
  blessed_strikes: {
    name: "Blessed Strikes",
    description:
      "8th-level cleric {@variantrule optional class features, which replaces the Potent Spellcasting feature} You are blessed with divine might in battle. When a creature takes damage from one of your cantrips or weapon attacks, you can also deal 1d8 radiant damage to that creature. Once you deal this damage, you can't use this feature again until the start of your next turn.",
  },
  potent_spellcasting: {
    name: "Potent Spellcasting",
    description:
      "Starting at 8th level, you add your Wisdom modifier to the damage you deal with any cleric cantrip.",
  },
  keeper_of_souls: {
    name: "Keeper of Souls",
    description:
      "Starting at 17th level, you can seize a trace of vitality from a parting soul and use it to heal the living. When an enemy you can see dies within 60 feet of you, you or one creature of your choice that is within 60 feet of you regains hit points equal to the enemy's number of Hit Dice. You can use this feature only if you aren't incapacitated. Once you use it, you can't do so again until the start of your next turn.",
  },
};

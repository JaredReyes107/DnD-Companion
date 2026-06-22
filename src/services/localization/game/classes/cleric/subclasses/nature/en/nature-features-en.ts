import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const nature_features_en: GameLocalizationCategory = {
  nature_domain_spells: {
    name: "Domain Spells",
    description: `Domain spells are always prepared and they don't count againts the number of spells you can prepare each day.
      If you have a domain spell that's not from the cleric spell list, that spell becomes a cleric spell for you`,
  },
  acolyte_of_nature: {
    name: "Acolyte of Nature",
    description: "You learn one druid cantrip of your choice. This cantrip doesn't count against the number of cleric cantrips you know. You also gain proficiency in one of the following skills of your choice: Animal Handling, Nature, or Survival.",
  },
  bonus_proficiencies: {
    name: "Bonus Proficiency",
    description: "You gain proficiency with heavy armor.",
  },
  channel_divinity_charm_animals_and_plants: {
    name: "Channel Divinity: Charm Animals and Plants",
    description: "You can use your Channel Divinity to charm animals and plants. As an action, you present your holy symbol and invoke the name of your deity. Each beast or plant creature that can see you within 30 feet of you must make a Wisdom saving throw. If the creature fails its saving throw, it is charmed by you for 1 minute or until it takes damage. While it is charmed by you, it is friendly to you and other creatures you designate.",
  },
  dampen_elements: {
    name: "Dampen Elements",
    description: "Starting at 6th level, when you or a creature within 30 feet of you takes acid, cold, fire, lightning, or thunder damage, you can use your reaction to grant resistance to the creature against that instance of the damage.",
  },
  divine_strike: {
    name: "Divine Strike",
    description: "You gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 cold, fire, or lightning damage (your choice) to the target. When you reach 14th level, the extra damage increases to 2d8.",
  },
  master_of_nature: {
    name: "Master of Nature",
    description: "You gain the ability to command animals and plant creatures. While creatures are charmed by your Charm Animals and Plants feature, you can take a bonus action on your turn to verbally command what each of those creatures will do on its next turn.",
  },
};

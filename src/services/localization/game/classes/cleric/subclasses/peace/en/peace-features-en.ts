import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const peace_features_en: GameLocalizationCategory = {
  peace_domain_spells: {
    name: "Domain Spells",
    description: `Domain spells are always prepared and they don't count againts the number of spells you can prepare each day.
      If you have a domain spell that's not from the cleric spell list, that spell becomes a cleric spell for you`,
  },
  emboldening_bond: {
    name: "Emboldening Bond",
    description: "1st-level Peace Domain feature You can forge an empowering bond among people who are at peace with one another. As an action, you choose a number of willing creatures within 30 feet of you (this can include yourself) equal to your proficiency bonus. You create a magical bond among them for 10 minutes or until you use this feature again. While any bonded creature is within 30 feet of another, the creature can roll a d4 and add the number rolled to an attack roll, an ability check, or a saving throw it makes. Each creature can add the d4 no more than once per turn. You can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
  },
  implement_of_peace: {
    name: "Implement of Peace",
    description: "1st-level Peace Domain feature You gain proficiency in the Insight, Performance, or Persuasion skill (your choice).",
  },
  channel_divinity_balm_of_peace: {
    name: "Channel Divinity: Balm of Peace",
    description: "2nd-level Peace Domain feature You can use your Channel Divinity to make your very presence a soothing balm. As an action, you can move up to your speed, without provoking opportunity attacks, and when you move within 5 feet of any other creature during this action, you can restore a number of hit points to that creature equal to 2d6 + your Wisdom modifier (minimum of 1 hit point). A creature can receive this healing only once whenever you take this action.",
  },
  protective_bond: {
    name: "Protective Bond",
    description: "6th-level Peace Domain feature The bond you forge between people helps them protect each other. When a creature affected by your Emboldening Bond feature is about to take damage, a second bonded creature within 30 feet of the first can use its reaction to teleport to an unoccupied space within 5 feet of the first creature. The second creature then takes all the damage instead.",
  },
  potent_spellcasting: {
    name: "Potent Spellcasting",
    description: "8th-level Peace Domain feature You add your Wisdom modifier to the damage you deal with any cleric cantrip.",
  },
  expansive_bond: {
    name: "Expansive Bond",
    description: "17th-level Peace Domain feature The benefits of your Emboldening Bond and Protective Bond features now work when the creatures are within 60 feet of each other. Moreover, when a creature uses Protective Bond to take someone else's damage, the creature has resistance to that damage.",
  },
};

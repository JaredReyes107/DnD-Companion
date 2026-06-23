import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const peace_actions_en: GameLocalizationCategory = {
  emboldening_bond: {
    name: "Emboldening Bond",
    description:
      "You choose a number of willing creatures within 30 feet of you (this can include yourself) equal to your proficiency bonus. You create a magical bond among them for 10 minutes or until you use this feature again. While any bonded creature is within 30 feet of another, the creature can roll a d4 and add the number rolled to an attack roll, an ability check, or a saving throw it makes. Each creature can add the d4 no more than once per turn. You can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
  },
  channel_divinity_balm_of_peace: {
    name: "Channel Divinity: Balm of Peace",
    description:
      "You move up to your speed, without provoking opportunity attacks, and when you move within 5 feet of any other creature during this action, you can restore a number of hit points to that creature equal to 2d6 + your Wisdom modifier (minimum of 1 hit point). A creature can receive this healing only once whenever you take this action.",
  },
  protective_bond: {
    name: "Protective Bond",
    description:
      "When a creature affected by your Emboldening Bond feature is about to take damage, a second bonded creature within 30 feet of the first can use its reaction to teleport to an unoccupied space within 5 feet of the first creature. The second creature then takes all the damage instead.",
  },
};

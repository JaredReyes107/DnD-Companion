import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const tempest_actions_en: GameLocalizationCategory = {
  wrath_of_the_storm: {
    name: "Wrath of the Storm",
    description:
      "When a creature within 5 feet of you that you can see hits you with an attack, you can use your reaction to cause the creature to make a Dexterity saving throw. The creature takes 2d8 lightning or thunder damage (your choice) on a failed saving throw, and half as much damage on a successful one. You can use this feature a number of times equal to your Wisdom modifier (a minimum of once). You regain all expended uses when you finish a long rest.",
  },
  channel_divinity_destructive_wrath: {
    name: "Destructive Wrath",
    description:
      "When you roll lightning or thunder damage, you can use your Channel Divinity to deal maximum damage, instead of rolling.",
  },
};

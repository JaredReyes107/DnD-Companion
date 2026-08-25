import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const mastermind_actions_en: GameLocalizationCategory = {
  master_of_intrigue: {
    name: "Master of Intrigue",
    description: `You spend 1 minute hearing speak a creature. After that, you can mimic the speech patterns and accent of that creature, enabling you to pass yourself off as a native speaker of a particular land, provided that you know the language.`,
  },
  master_of_tactics: {
    name: "Master of Tactics",
    description: `You take the 'Help' action. If it's for an attack, the target of the attack can be within 30 feet of your rather than 5 feet and it must be able to see you or hear you.`,
  },
  insightful_manipulator: {
    name: "Insightful Manipulator",
    description: `You spend 1 minute observing or interacting with another creature outside combat, you can learn certain information about its capabilities compared to your own. The DM tells you if the creature is your equal, superior, or inferior in regard to two of the following characteristics of your choice:
        - Intelligence score
        - Wisdom score
        - Charisma score
        - Class levels (if any)
        At the DM's option, you might also realize you know a piece of the creature's history or one of its personality traits, if it has any.`,
  },
  misdirection: {
    name: "Misdirection",
    description: `When you are targeted by an attack while a creature within 5 feet of you is granting you cover against that attack, you can use your reaction to have the attack target that creature instead of you.`,
  },
};

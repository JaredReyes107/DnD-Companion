import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const enchantment_actions_en: GameLocalizationCategory = {
  hypnotic_gaze_initiate: {
    name: "Initiate Hypnotic Gaze",
    description: `A target that you choose within 5 feet of you must suceed on a Wisdom saving throw against your wizard spell save DC or be charmed by you until the end of your next turn. Additionally, the charmed creature's speed drops to 0 and the creature is incapacitated and visibly dazed. The effect also ends if you move more than 5 feet away from the creature, if the creature can neither see nor hear you or if it takes damage.
      Once the effect ends or if the creature succeeds on its initial saving throw agains this effect, you can't use this feature again on that creature until you finish a long rest.`,
  },
  hypnotic_gaze_mantain: {
    name: "Mantain Hypnotic Gaze",
    description: `You extend the duration of 'Hypnotic Gaze' of a creature affected by it until the end of your next turn.`,
  },
  instinctive_charm: {
    name: "Instinctive Charm",
    description: `You use your reaction against a creature not inmune to charm that you can see within 30 feet of you attacks you, before knowing whether it hits or not. The attacker then has to make a Wisdom saving throw against your wizard spell save DC.
      On a failed save, the attacker must target the closest creature to it instead that is neither you nor itself. If there are multiple valid targets, the attacker gets to choose.
      On a succesful save, you can't use this feature on the attacker again until you finish a long rest.`,
  },
  split_enchantment: {
    name: "Split Enchantment",
    description: `When you cast an enchantment spell of 1st level or higher that targets only 1 creature, you can choose to target a second creature.`,
  },
  alter_memories_forget: {
    name: "Alter Memories: Forget",
    description: `When you cast an enchantment spell to charm one or more creatures, you make it so it remains unawared of being charmed.`,
  },
  alter_memories_erase: {
    name: "Alter Memories: Erase",
    description: `When one of your enchantment spell expires, you can force the affected creature to make an Intelligence saving throw against you wizard spell save DC. If it fails, you make it forget up to a number of hours equal to 1 + your Charisma modifier (minimum of 1) of the time while it was charmed by that spell.`,
  },
};

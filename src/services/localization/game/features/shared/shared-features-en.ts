import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const shared_features_en: GameLocalizationCategory = {
  ability_score_improvement: {
    name: "Ability Score Improvement",
    description:
      "When you reach a level that grants you an Ability Score Improvement, increase one score of your choice by 2 or two scores by 1 each, or take a feat if your table uses the optional rule. You cannot increase an ability score above 20 using this feature.",
  },
  blessed_strikes: {
    name: "Blessed Strikes",
    description:
      "When a creature takes damage from one of your cantrips or weapon attacks, you can also deal 1d8 radiant damage to that creature. Once you deal this damage, you can't use this feature again until the start of your next turn.",
  },
  evasion: {
    name: "Evasion",
    description:
      "Your instinctive agility lets you dodge out of the way of certain area effects. When you are subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you instead take no damage if you succeed on the saving throw, and only half damage if you fail.",
  },
  extra_attack: {
    name: "Extra Attack",
    description:
      "You can attack twice, instead of once, whenever you take the Attack action on your turn.",
  },
  potent_spellcasting: {
    name: "Potent Spellcasting",
    description:
      "Starting at 8th level, you add your Wisdom modifier to the damage you deal with any cleric cantrip.",
  },
};

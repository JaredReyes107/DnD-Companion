import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const bladesinging_features_en: GameLocalizationCategory = {
  training_in_war_and_song_bladesinging: {
    name: "Training in War and Song",
    description:
      "You gain proficiency with light armor, and you gain proficiency with one type of one-handed melee weapon of your choice. You also gain proficiency in the Performance skill if you don't already have it.",
  },
  bladesong: {
    name: "Bladesong",
    description:
      "You can invoke a secret elven magic called the Bladesong, provided you aren't wearing medium or heavy armor or using a shield. It graces you with supernatural speed, agility, and focus. You can use a bonus action to start the Bladesong, which lasts for 1 minute. It ends early if you are incapacitated, if you don medium or heavy armor or a shield, or if you use two hands to make an attack with a weapon. You can also dismiss Bladesong at any time you choose (no action required). While your bladesong is active, you gain the following benefits: You gain a bonus to your AC equal to your Intelligence modifier (minimum of +1). Your walking speed increases by 10 feet. You have advantage on Dexterity (Acrobatics) checks. You gain a bonus to any Constitution saving throws you make to maintain concentration on a spell. The bonus equals your Intelligence modifier (minimum of +1). You can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses of it when you finish a long rest.",
  },
  extra_attack: {
    name: "Extra Attack",
    description:
      "You can attack twice, instead of once, whenever you take the Attack action on your turn. Moreover, you can cast one of your cantrips in place of one of those attacks.",
  },
  song_of_defense: {
    name: "Song of Defense",
    description:
      "You can direct your magic to absorb damage while your bladesong is active. When you take damage, you can use your reaction to expend one spell slot and reduce that damage to you by an amount equal to five times the spell's slot level.",
  },
  song_of_victory: {
    name: "Song of Victory",
    description:
      "You add your Intelligence modifier (minimum of +1) to the damage of your melee weapon attacks while your Bladesong is active.",
  },
};

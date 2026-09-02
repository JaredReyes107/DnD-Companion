import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const bladesinging_actions_en: GameLocalizationCategory = {
  bladesong: {
    name: "Bladesong",
    description: `For 1 minute, until you are incapacitated, don medium or heavy armor or a shield, or until you use two hands to make an attack with a weapon, you gain the following benefits:
        - You gain a bonus to your AC equal to your Intelligence modifier (minimum of +1)
        - Your walking speed increases by 10 feet.
        - You have advantage on Dexterity (Acrobatics) checks.
        - You gain a bonus to any Constitution saving throw you make to maintain your concentration on a spell. The bonus equals your Intelligence modifier (minimum of +1).`,
  },
  song_of_defense: {
    name: "Song of Defense",
    description: `When you take damage, you expend one spell slot and reduce the damage by an amount equal to five times the spell slot's level.`,
  },
};

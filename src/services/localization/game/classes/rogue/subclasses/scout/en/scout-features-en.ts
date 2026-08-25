import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const scout_features_en: GameLocalizationCategory = {
  skirmisher: {
    name: "Skirmisher",
    description:
      "You are difficult to pin down during a fight. You can move up to half your speed as a reaction when an enemy ends its turn within 5 feet of you. This movement doesn't provoke opportunity attacks.",
  },
  survivalist: {
    name: "Survivalist",
    description:
      "You gain proficiency in the Nature and Survival skills if you don't already have it. Your proficiency bonus is doubled for any ability check you make that uses either of those proficiencies.",
  },
  superior_mobility: {
    name: "Superior Mobility",
    description:
      "Your walking speed increases by 10 feet. If you have a climbing or swimming speed, this increase applies to that speed as well.",
  },
  ambush_master: {
    name: "Ambush Master",
    description:
      "You excel at leading ambushes and acting first in a fight. You have advantage on initiative rolls. In addition, the first creature you hit during the first round of a combat becomes easier for you and others to strike; attack rolls against that target have advantage until the start of your next turn.",
  },
  sudden_strike: {
    name: "Sudden Strike",
    description:
      "You can strike with deadly speed. If you take the Attack action on your turn, you can make one additional attack as a bonus action. This attack can benefit from your Sneak Attack even if you have already used it this turn, but you can't use your Sneak Attack against the same target more than once in a turn.",
  },
};

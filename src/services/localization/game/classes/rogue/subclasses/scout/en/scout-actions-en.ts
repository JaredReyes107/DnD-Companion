import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const scout_actions_en: GameLocalizationCategory = {
  skirmisher: {
    name: "Skirmisher",
    description: `You move up to half your speed as a reaction when an enemy ends its turn within 5 feet of you. This movement doesn’t provoke opportunity attacks.`,
  },
  ambush_master: {
    name: "Ambush Master",
    description: `The first creature you hit during the first round of a combat becomes easier for you and others to strike; attack rolls against that target have advantage until the start of your next turn.`,
  },
  sudden_strike: {
    name: "Sudden Strike",
    description: `When you take the Attack action on your turn, you can make one additional attack as a bonus action. This attack can benefit from your Sneak Attack even if you have already used it this turn, but you can't use your Sneak Attack against the same target more than once in a turn.`,
  },
};

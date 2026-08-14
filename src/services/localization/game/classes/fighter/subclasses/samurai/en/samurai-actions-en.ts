import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const samurai_actions_en: GameLocalizationCategory = {
  fighting_spirit: {
    name: "Fighting Spirit",
    description:
      "You give yourself advantage on weapon attack rolls until the end of the current turn. When you do so, you also gain 5 temporary hit points. The number of temporary hit points increases when you reach certain levels in this class, increasing to 10 at 10th level and 15 at 15th level.",
  },
  rapid_strike: {
    name: "Rapid Strike",
    description:
      "When you take the Attack action on your turn and have advantage on an attack roll against one of the targets, you can forgo the advantage for that roll to make an additional weapon attack against that target, as part of the same action. You can do so no more than once per turn.",
  },
  strength_before_death: {
    name: "Strength before Death",
    description:
      "When you take damage that reduces you to 0 hit points and doesn't kill you outright, you use your reaction to delay falling unconscious, and you can immediately take an extra turn, interrupting the current turn. While you have 0 hit points during that extra turn, taking damage causes death saving throw failures as normal, and three death saving throw failures can still kill you. When the extra turn ends, you fall unconscious if you still have 0 hit points.",
  },
};

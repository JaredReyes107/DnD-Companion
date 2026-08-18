import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const samurai_features_en: GameLocalizationCategory = {
  bonus_proficiency: {
    name: "Bonus Proficiency",
    description:
      "You gain proficiency in one of the following skills of your choice: History, Insight, Performance, or Persuasion. Alternatively, you learn one language of your choice.",
  },
  fighting_spirit: {
    name: "Fighting Spirit",
    description:
      "Your intensity in battle can shield you and help you strike true. As a bonus action on your turn, you can give yourself advantage on weapon attack rolls until the end of the current turn. When you do so, you also gain 5 temporary hit points. The number of temporary hit points increases when you reach certain levels in this class, increasing to 10 at 10th level and 15 at 15th level. You can use this feature three times, and you regain all expended uses of it when you finish a long rest.",
  },
  elegant_courtier: {
    name: "Elegant Courtier",
    description:
      "Your discipline and attention to detail allow you to excel in social situations. Whenever you make a Charisma (Persuasion) check, you gain a bonus to the check equal to your Wisdom modifier. Your self-control also causes you to gain proficiency in Wisdom saving throws. If you already have this proficiency, you instead gain proficiency in Intelligence or Charisma saving throws (your choice).",
  },
  tireless_spirit: {
    name: "Tireless Spirit",
    description:
      "When you roll initiative and have no uses of Fighting Spirit remaining, you regain one use.",
  },
  rapid_strike: {
    name: "Rapid Strike",
    description:
      "You learn to trade accuracy for swift strikes. If you take the Attack action on your turn and have advantage on an attack roll against one of the targets, you can forgo the advantage for that roll to make an additional weapon attack against that target, as part of the same action. You can do so no more than once per turn.",
  },
  strength_before_death: {
    name: "Strength before Death",
    description:
      "Your fighting spirit can delay the grasp of death. If you take damage that reduces you to 0 hit points and doesn't kill you outright, you can use your reaction to delay falling unconscious, and you can immediately take an extra turn, interrupting the current turn. While you have 0 hit points during that extra turn, taking damage causes death saving throw failures as normal, and three death saving throw failures can still kill you. When the extra turn ends, you fall unconscious if you still have 0 hit points. Once you use this feature, you can't use it again until you finish a long rest.",
  },
};

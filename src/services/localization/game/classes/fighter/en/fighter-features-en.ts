import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const fighter_features_en: GameLocalizationCategory = {
  fighting_style: {
    name: "Fighting Style",
    description:
      "You adopt a particular style of fighting as your specialty. Choose one of the following options. You can't take a Fighting Style option more than once, even if you later get to choose again.",
  },
  second_wind: {
    name: "Second Wind",
    description: `You have a limited well of stamina that you can draw on to protect yourself from harm. On your turn, you can use a bonus action to regain hit points equal to 1d10 + your fighter level.
      Once you use this feature, you must finish a short or long rest before you can use it again.`,
  },
  action_surge: {
    name: "Action Surge",
    description: `You can push yourself beyond your normal limits for a moment. On your turn, you can take one additional action.
      Once you use this feature, you must finish a short or long rest before you can use it again. Starting at 17th level, you can use it twice before a rest, but only once on the same turn.`,
  },
  extra_attack: {
    name: "Extra Attack",
    description:
      "You can attack twice, instead of once, whenever you take the Attack action on your turn. The number of attacks increases to three when you reach 11th level in this class and to four when you reach 20th level in this class.",
  },
  indomitable: {
    name: "Indomitable",
    description: `You can reroll a saving throw that you fail. If you do so, you must use the new roll, and you can't use this feature again until you finish a long rest.
      You can use this feature twice between long rests starting at 13th level and three times between long rests starting at 17th level.`,
  },
};

import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const fighter_actions_en: GameLocalizationCategory = {
  second_wind: {
    name: "Second Wind",
    description:
      "You can use a bonus action to regain hit points equal to 1d10 + your fighter level.",
  },
  action_surge: {
    name: "Action Surge",
    description: "On your turn, you can take one additional action.",
  },
  indomitable: {
    name: "Indomitable",
    description: "Reroll a saving throw you failed. You must use the new roll.",
  },
};

import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const fighter_resources_en: GameLocalizationCategory = {
  second_wind: {
    name: "Second Wind",
    description:
      "You can use a bonus action to regain hit points equal to 1d10 + your fighter level. Once you use this feature, you must finish a short or long rest before you can use it again.",
  },
  action_surge: {
    name: "Action Surge",
    description:
      "On your turn, you can take one additional action. You regain all uses on a short or long rest.",
  },
  indomitable: {
    name: "Indomitable",
    description: `Reroll a saving throw you failed. You must use the new roll. It recharges when you finish a long rest.`,
  },
};

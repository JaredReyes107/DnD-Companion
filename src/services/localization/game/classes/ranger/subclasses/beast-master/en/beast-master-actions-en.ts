import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const beast_master_actions_en: GameLocalizationCategory = {
  command_beast: {
    name: "Command Beast",
    description: `You verbally command the beast to take the Attack, Dash, Disengage, or Help action. If you don’t issue a command, the beast takes the Dodge action. Once you have the Extra Attack feature, you can make one weapon attack yourself when you command the beast to take the Attack action.`,
  },
  exceptional_training: {
    name: "Exceptional Training",
    description: `You command the beast to take the Dash, Disengage, or Help action on its turn. In addition, the beast’s attacks now count as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage.`,
  },
};

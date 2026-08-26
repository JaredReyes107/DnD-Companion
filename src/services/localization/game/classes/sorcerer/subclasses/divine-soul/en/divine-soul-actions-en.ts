import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const divine_soul_actions_en: GameLocalizationCategory = {
  favored_by_the_gods: {
    name: "Favored by the Gods",
    description: `You roll 2d4 and add it to the total of a failed saving throw or missed attack roll.`,
  },
  empowered_healing: {
    name: "Empowered Healing",
    description: `Whenever you or an ally within 5 feet of you rolls dice to determine the number of hit points a spell restores, you can spend 1 sorcery point to reroll any number of those dice once, provided you aren't incapacitated.`,
  },
  otherworldly_wings: {
    name: "Otherwordly Wings",
    description: `You summon spectral wings which grant you a flying speed of 30 feet. They last until you're incapacitated, you die or you dismiss them as a bonus action.`,
  },
  unearthly_recovery: {
    name: "Unearthly Recovery",
    description: `When you have fewer than half of your hit points remaining, you can regain a number of hit points equal to half your hit point maximum.`,
  },
};

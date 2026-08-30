import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const celestial_actions_en: GameLocalizationCategory = {
  healing_light: {
    name: "Healing Light",
    description: `You heal one creature you can see within 60 feet of you by spending any number of dice from the pool, up to a maximum number of dice equal to your Charisma modifier (minimum of one die) at a time. Roll the dice you spend, add them together, and restore a number of hit points equal to the total.`,
  },
  radiant_soul: {
    name: "Radiant Soul",
    description: `You add your Charisma modifier to one damage roll for one creature of a spell you casted that deals fie or radiant damage.`,
  },
  celestial_resilience: {
    name: "Celestial Resilience",
    description: `When you finish a short or long rest, you gain temporary hit points equal to your warlock level + your Charisma modifier. Additionally, up to 5 other creatures you can see when the rest ends gain a number of temporary hit points equal to half your warlock level + your Charisma modifier.`,
  },
  searing_vengeance: {
    name: "Searing Vengeance",
    description: `When you make a death saving throw at the start of your turn, you can choose instead to regain hit points equal to your maximum hit points and then stand up if you wish. Additionally, each creature of your choice within 30 feet of you takes 2d8 + your Charisma modifier radiant damage and is blinded until the end of the current turn.`,
  },
};

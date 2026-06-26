import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const wildfire_actions_en: GameLocalizationCategory = {
    summon_wildfire_spirit: {
    name: "Summon Wildfire Spirit",
    description: "You summon your wildfire spirit, rather than assuming a beast form. The spirit appears in an unoccupied space of your choice that you can see within 30 feet of you. Each creature within 10 feet of the spirit (other than you) when it appears must succeed on a Dexterity saving throw against your spell save DC or take 2d6 fire damage. The spirit is friendly to you and your companions and obeys your commands. See this creature's game statistics in the Wildfire Spirit stat block, which uses your proficiency bonus (PB) in several places. In combat, the spirit shares your initiative count, but it takes its turn immediately after yours. The spirit manifests for 1 hour, until it is reduced to 0 hit points, until you use this feature to summon the spirit again, or until you die.",
  },
  command_wildfire_spirit: {
    name: "Command Wildfire Spirit",
    description: "You command the spirit to take an action different from Dodge. That action can be one in its stat block or some other action. If you are incapacitated, the spirit can take any action of its choice, not just Dodge. ",
},
  cauterizing_flames: {
    name: "Cauterizing Flames",
    description: "When a Small or larger creature dies within 30 feet of you or your wildfire spirit, a harmless spectral flame springs forth in the dead creature's space and flickers there for 1 minute. When a creature you can see enters that space, you can use your reaction to extinguish the spectral flame there and either heal the creature or deal fire damage to it. The healing or damage equals 2d10 + your Wisdom modifier.",
  },
  blazing_revival: {
    name: "Blazing Revival",
    description: "If the spirit is within 120 feet of you when you are reduced to 0 hit points and thereby fall unconscious, you can cause the spirit to drop to 0 hit points. You then regain half your hit points and immediately rise to your feet.",
  },
};

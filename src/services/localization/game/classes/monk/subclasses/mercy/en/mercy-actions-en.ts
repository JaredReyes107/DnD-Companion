import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const mercy_actions_en: GameLocalizationCategory = {
  hand_of_healing: {
    name: "Hand of Healing",
    description: `You spend 1 ki point to touch a creature and restore a number of hit points equal to a roll of your Martial Arts die + your Wisdom modifier.
        When you use your Flurry of Blows, you can replace one of the unarmed strikes with a use of this feature without spending a ki point for the healing.`,
  },
  hand_of_harm: {
    name: "Hand of Harm",
    description: `You spend 1 ki point to deal extra necrotic damage equal to one roll of your Martial Arts die + your Wisdom modifier. You can use this feature only once per turn.`,
  },
  hand_of_ultimate_mercy: {
    name: "",
    description: `You touch the corpse of a creature that died within the past 24 hours and expend 5 ki points. The creature then returns to life, regaining a number of hit points equal to 4d10 + your Wisdom modifier. If the creature died while subject to any of the following conditions, it revives with them removed: blinded, deafened, paralyzed, poisoned, and stunned.`,
  },
};

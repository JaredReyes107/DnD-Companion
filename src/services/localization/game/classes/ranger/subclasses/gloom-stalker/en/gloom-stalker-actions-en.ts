import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const gloom_stalker_actions_en: GameLocalizationCategory = {
  dread_ambusher: {
    name: "Dread Ambusher",
    description: `You take make one additional weapon attack as part of the 'Attack' action if taken in your first turn of combat. If that attack hits, it deals an extra 1d8 damage.`,
  },
  stalkers_flurry: {
    name: "Stalker's Flurry",
    description: `When you miss with a weapon attack on your turn, you can make another weapon attack as part of the same action.`,
  },
  shadowy_dodge: {
    name: "Shadowy Dodge",
    description: `Whenever a creature makes an attack roll against you and doesn't have advantage on the roll, you can use your reaction to impose disadvantage on it. You must use this feature before you know the outcome of the attack roll.`,
  },
};

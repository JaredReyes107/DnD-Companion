import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const illusion_actions_en: GameLocalizationCategory = {
  malleable_illusions: {
    name: "Maleable Illusions",
    description: `When you cast an illusion spell that has a duration of 1 minute or longer, you can use your action to change the nature of that illusion (using the spell's normal parameters for the illusion), provided that you can see the illusion.`,
  },
  illusory_self: {
    name: "Illusory Self",
    description: `You make one attack roll against you automatically miss you.`,
  },
  illusory_reality: {
    name: "Illusory Reality",
    description: `When you cast an illusion spell of 1st level or higher, you can choose one inanimate, nonmagical object that is part of the illusion and make that object real. You can do this on your turn as a bonus action while the spell is ongoing. The object remains real for 1 minute. For example, you can create an illusion of a bridge over a chasm and then make it real long enough for your allies to cross.
        The object can't deal damage or otherwise directly harm anyone.`,
  },
};

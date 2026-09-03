import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const enchantment_resources_en: GameLocalizationCategory = {
  hypnotic_gaze: {
    name: "Hypnotic Gaze",
    description: `It allows you to charm a creature, incapacitating it as long as you keep the charm up. The charges are per creature, and are only expended if they succeed on their save or when the effect expires for them. You regain all uses for that creature after a long rest.`,
  },
  instinctive_charm: {
    name: "Instinctive Charm",
    description: `It allows you to redirect attacks against you to other creatures. The charges are per creature, and are only expended if they succeed on their save. You regain all uses for that creature after a long rest.`,
  },
};

import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const paladin_resources_en: GameLocalizationCategory = {
  divine_sense: {
    name: "Divine Sense",
    description: `Used to detect good and evil forces. You can use this feature a number of times equal to 1 + your Charisma modifier. When you finish a long rest, you regain all expended uses.`,
  },
  lay_on_hands: {
    name: "Lay on Hands",
    description: `Used to recover hit points or end a disease or posion affecting a creature. The amount of points you have equal to your paladin level x 5, and they replenish after a long rest.`,
  },
  cleansing_touch: {
    name: "Cleansing Touch",
    description: `Used to end the effect of a spell on a voluntary creature you touch. You can use this feature a number of times equal to your Charisma modifier (a minimum of once). You regain expended uses when you finish a long rest.`,
  },
};

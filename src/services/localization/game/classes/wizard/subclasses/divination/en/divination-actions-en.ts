import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const divination_actions_en: GameLocalizationCategory = {
  portent: {
    name: "Portent",
    description: `You replace any attack roll, saving throw or ability check that were to be made by yourself or a creature that you can see with one of your portent results. You must choose to do this before the roll is made.`,
  },
  expert_divination: {
    name: "Expert Divination",
    description: `When you cast a divination spell of 2nd level or higher, you regain one expended spell slot of a level lower than the spell you cast. The slot you regain can't be higher than 5th level.`,
  },
  the_third_eye: {
    name: "The Third Eye",
    description: `You increase your perception, gaining one of the next benefits of your choice until you are incapacitated or you take a short or long rest.
      - Darkvision: You gain darkvision out to a range of 60 feet.
      - Ethereal Sight: You can see into the Ethereal Plane within 60 feet of you.
      - Greate Comprehension: You can read any language.
      - See Invisibility: You can see invisible creatures and objects within 10 feet of you that are within line of sight.`,
  },
};

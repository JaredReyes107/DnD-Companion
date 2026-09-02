import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const divination_features_en: GameLocalizationCategory = {
  divination_savant: {
    name: "Divination Savant",
    description:
      "The gold and time you must spend to copy a divination spell into your spellbook is halved.",
  },
  portent: {
    name: "Portent",
    description:
      "Glimpses of the future begin to press in on your awareness. When you finish a long rest, roll two d20s and record the numbers rolled. You can replace any attack roll, saving throw, or ability check made by you or a creature that you can see with one of these foretelling rolls. You must choose to do so before the roll, and you can replace a roll in this way only once per turn. Each foretelling roll can be used only once. When you finish a long rest, you lose any unused foretelling rolls.",
  },
  expert_divination: {
    name: "Expert Divination",
    description:
      "Casting divination spells comes so easily to you that it expends only a fraction of your spellcasting efforts. When you cast a divination spell of 2nd level or higher using a spell slot, you regain one expended spell slot. The slot you regain must be of a level lower than the spell you cast and can't be higher than 5th level.",
  },
  the_third_eye: {
    name: "The Third Eye",
    description:
      "You can use your action to increase your powers of perception. When you do so, choose one of the following benefits, which lasts until you are incapacitated or you take a short or long rest. You can't use the feature again until you finish a rest. You gain darkvision out to a range of 60 feet. You can see into the Ethereal Plane within 60 feet of you. You can read any language. You can see invisible creatures and objects within 10 feet of you that are within line of sight.",
  },
  greater_portent: {
    name: "Greater Portent",
    description:
      "The visions in your dreams intensify and paint a more accurate picture in your mind of what is to come. You roll three d20s for your Portent feature, rather than two.",
  },
};

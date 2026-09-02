import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const conjuration_features_en: GameLocalizationCategory = {
  conjuration_savant: {
    name: "Conjuration Savant",
    description:
      "The gold and time you must spend to copy a conjuration spell into your spellbook is halved.",
  },
  minor_conjuration: {
    name: "Minor Conjuration",
    description:
      "When you select this school, you can use your action to conjure up an inanimate object in your hand or on the ground in an unoccupied space that you can see within 10 feet of you. This object can be no larger than 3 feet on a side and weigh no more than 10 pounds, and its form must be that of a nonmagical object that you have seen. The object is visibly magical, radiating dim light out to 5 feet. The object disappears after 1 hour, when you use this feature again, if it takes any damage, or if it deals any damage.",
  },
  benign_transposition: {
    name: "Benign Transposition",
    description:
      "You can use your action to teleport up to 30 feet to an unoccupied space that you can see. Alternatively, you can choose a space within range that is occupied by a Small or Medium creature. If that creature is willing, you both teleport, swapping places. Once you use this feature, you can't use it again until you finish a long rest or you cast a conjuration spell of 1st level or higher.",
  },
  focused_conjuration: {
    name: "Focused Conjuration",
    description:
      "While you are concentration on a conjuration spell, your concentration can't be broken as a result of taking damage.",
  },
  durable_summons: {
    name: "Durable Summons",
    description:
      "Any creature that you summon or create with a conjuration spell has 30 temporary hit points.",
  },
};

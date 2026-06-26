import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const shepherd_actions_en: GameLocalizationCategory = {
  spirit_totem_summon: {
    name: "Summon Spirit Totem",
    description:
      "You magically summon an incorporeal spirit to a point you can see within 60 feet of you. The spirit creates an aura in a 30-foot radius around that point. It counts as neither a creature nor an object, though it has the spectral appearance of the creature it represents. The spirit persists for 1 minute or until you're incapacitated.",
  },
  spirit_totem_move: {
    name: "Move Spirit Totem",
    description: "You move the spirit up to 60 feet to a point you can see.",
  },
  faithful_summons: {
    name: "Faithful Summons",
    description:
      "If you are reduced to 0 hit points or are incapacitated against your will, you can immediately gain the benefits of conjure animals as if it were cast using a 9th-level spell slot. It summons four beasts of your choice that are challenge rating 2 or lower. The conjured beasts appear within 20 feet of you. If they receive no commands from you, they protect you from harm and attack your foes. The spell lasts for 1 hour, requiring no concentration, or until you dismiss it (no action required).",
  },
};

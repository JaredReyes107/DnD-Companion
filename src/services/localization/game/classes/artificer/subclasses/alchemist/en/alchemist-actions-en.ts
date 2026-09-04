import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const alchemist_actions_en: GameLocalizationCategory = {
  experimental_elixir_fabricate: {
    name: "Fabricate Experimental Elixir",
    description: `You create an experimental elixir inside an empty flask using alchemist supplies after finishing a long rest. Roll 1d6 to determine its effect.`,
  },
  experimental_elixir_create: {
    name: "Create Experimental Elixir",
    description: `You create an experimental elixir inside an empty flask using alchemist supplies and spending 1 spell slot of any level. Roll 1d6 to determine its effect.`,
  },
  cast_lesser_restoration_free: {
    name: "Cast Lesser Restoration",
    description: `You use alchemist's supplies as the spellcasting focus to cast the spell 'Lesser Restoration' without expending a spell slot.`,
  },
  cast_greater_restoration_free: {
    name: "Cast Greater Restoration",
    description: `You use alchemist's supplies as the spellcasting focus to cast the spell 'Greater Restoration' without expending a spell slot.`,
  },
  cast_heal_free: {
    name: "Cast Heal",
    description: `You use alchemist's supplies as the spellcasting focus to cast the spell 'Heal' without expending a spell slot.`,
  },
};

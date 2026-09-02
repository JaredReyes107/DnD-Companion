import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const scribes_resources_en: GameLocalizationCategory = {
  awakened_spellbook_fast_ritual: {
    name: "Fast Ritual",
    description: `Used to cast a wizard spell as a ritual but using it's regular casting time. It recharges after a long rest.`,
  },
  manifest_mind: {
    name: "Manifest Mind",
    description: `Used to manifest the mind of your Awakened Spellbok, extending your senses and spellcasting. It recharges after a long rest or you regain 1 charge by spending a spell slot of any level.`,
  },
  manifest_mind_cast_through: {
    name: "Manifest Mind: Cast Through",
    description: `It allows you to cast a spell using your 'Manifested Mind' senses and position rather than your own. It recharges after a long rest.`,
  },
  master_scrivener: {
    name: "Master Scrivener",
    description: `The amount of special spell scrolls you can make after a long rest.`,
  },
};

import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

import { lore_features_en } from "../subclasses/lore/en/lore-features-en";
import { valor_features_en } from "../subclasses/valor/en/valor-features-en";

const bard_subclass_features: GameLocalizationCategory = {
  // PHB
  ...lore_features_en,
  ...valor_features_en,
};

export const features_bard_en: GameLocalizationCategory = {
  bardic_inspiration: {
    name: "Bardic Inspiration",
    description: "",
  },
  spellcasting: {
    name: "Spellcasting",
    description: "",
  },
  jack_of_all_trades: {
    name: "Jack of All Trades",
    description: "",
  },
  song_of_rest: {
    name: "Song of Rest (d6)",
    description: "",
  },
  magical_inspiration: {
    name: "Magical Inspiration",
    description: "",
  },
  bard_college: {
    name: "Bard College",
    description: "",
  },
  expertise: {
    name: "Expertise",
    description: "",
  },
  ability_score_improvement: {
    name: "Ability Score Improvement",
    description: "",
  },
  bardic_versatility: {
    name: "Bardic Versatility",
    description: "",
  },
  font_of_inspiration: {
    name: "Font of Inspiration",
    description: "",
  },
  countercharm: {
    name: "Countercharm",
    description: "",
  },
  bard_college_feature: {
    name: "Bard College feature",
    description: "",
  },
  magical_secrets: {
    name: "Magical Secrets",
    description: "",
  },
  superior_inspiration: {
    name: "Superior Inspiration",
    description: "",
  },

  ...bard_subclass_features,
};

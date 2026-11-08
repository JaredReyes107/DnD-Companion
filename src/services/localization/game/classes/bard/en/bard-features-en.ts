import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

import { lore_features_en } from "../subclasses/lore/en/lore-features-en";
import { valor_features_en } from "../subclasses/valor/en/valor-features-en";
import { glamour_features_en } from "../subclasses/glamour/en/glamour-features-en";
import { swords_features_en } from "../subclasses/swords/en/swords-features-en";
import { whispers_features_en } from "../subclasses/whispers/en/whispers-features-en";
import { creation_features_en } from "../subclasses/creation/en/creation-features-en";
import { eloquence_features_en } from "../subclasses/eloquence/en/eloquence-features-en";

const bard_subclass_features: GameLocalizationCategory = {
  // PHB
  ...lore_features_en,
  ...valor_features_en,

  // Xanathar's
  ...glamour_features_en,
  ...swords_features_en,
  ...whispers_features_en,

  // Tasha's
  ...creation_features_en,
  ...eloquence_features_en,
};

export const bard_features_en: GameLocalizationCategory = {
  "bard.bardic_inspiration": {
    name: "Bardic Inspiration",
    description: "",
  },
  "bard.spellcasting": {
    name: "Spellcasting",
    description: "",
  },
  "bard.jack_of_all_trades": {
    name: "Jack of All Trades",
    description: "",
  },
  "bard.song_of_rest": {
    name: "Song of Rest (d6)",
    description: "",
  },
  "bard.magical_inspiration": {
    name: "Magical Inspiration",
    description: "",
  },
  "bard.bard_college": {
    name: "Bard College",
    description: "",
  },
  "bard.expertise": {
    name: "Expertise",
    description: "",
  },
  ability_score_improvement: {
    name: "Ability Score Improvement",
    description: "",
  },
  "bard.bardic_versatility": {
    name: "Bardic Versatility",
    description: "",
  },
  "bard.font_of_inspiration": {
    name: "Font of Inspiration",
    description: "",
  },
  "bard.countercharm": {
    name: "Countercharm",
    description: "",
  },
  "bard.bard_college_feature": {
    name: "Bard College feature",
    description: "",
  },
  "bard.magical_secrets": {
    name: "Magical Secrets",
    description: "",
  },
  "bard.superior_inspiration": {
    name: "Superior Inspiration",
    description: "",
  },

  ...bard_subclass_features,
};

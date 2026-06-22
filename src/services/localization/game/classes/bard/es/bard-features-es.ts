import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

import { lore_features_es } from "../subclasses/lore/es/lore-features-es";
import { valor_features_es } from "../subclasses/valor/es/valor-features-es";
import { glamour_features_es } from "../subclasses/glamour/es/glamour-features-es";
import { swords_features_es } from "../subclasses/swords/es/swords-features-es";
import { whispers_features_es } from "../subclasses/whispers/es/whispers-features-es";

const bard_subclass_features: GameLocalizationCategory = {
  // PHB
  ...lore_features_es,
  ...valor_features_es,

  // Xanathar's
  ...glamour_features_es,
  ...swords_features_es,
  ...whispers_features_es,
};

export const bard_features_es: GameLocalizationCategory = {
  bardic_inspiration: {
    name: "Inspiración Bárdica",
    description: "",
  },
  spellcasting: {
    name: "Lanzamiento de Conjuros",
    description: "",
  },
  jack_of_all_trades: {
    name: "Aprendiz de Mucho",
    description: "",
  },
  song_of_rest: {
    name: "Canción de Descanso",
    description: "",
  },
  magical_inspiration: {
    name: "Inspiración Mágica",
    description: "",
  },
  bard_college: {
    name: "Colegio Bárdico",
    description: "",
  },
  expertise: {
    name: "Pericia",
    description: "",
  },
  ability_score_improvement: {
    name: "Mejora de Característica",
    description: "",
  },
  bardic_versatility: {
    name: "Versatilidad Bárdica",
    description: "",
  },
  font_of_inspiration: {
    name: "Fuente de Inspiración",
    description: "",
  },
  countercharm: {
    name: "Contraencantamiento",
    description: "",
  },
  bard_college_feature: {
    name: "Rasgo de Colegio",
    description: "",
  },
  magical_secrets: {
    name: "Secretos Mágicos",
    description: "",
  },
  superior_inspiration: {
    name: "Inspiración Superior",
    description: "",
  },

  ...bard_subclass_features,
};

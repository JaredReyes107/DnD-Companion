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
  "bard.bardic_inspiration": {
    name: "Inspiración Bárdica",
    description: "",
  },
  "bard.spellcasting": {
    name: "Lanzamiento de Conjuros",
    description: "",
  },
  "bard.jack_of_all_trades": {
    name: "Aprendiz de Mucho",
    description: "",
  },
  "bard.song_of_rest": {
    name: "Canción de Descanso",
    description: "",
  },
  "bard.magical_inspiration": {
    name: "Inspiración Mágica",
    description: "",
  },
  "bard.bard_college": {
    name: "Colegio Bárdico",
    description: "",
  },
  "bard.expertise": {
    name: "Pericia",
    description: "",
  },
  ability_score_improvement: {
    name: "Mejora de Característica",
    description: "",
  },
  "bard.bardic_versatility": {
    name: "Versatilidad Bárdica",
    description: "",
  },
  "bard.font_of_inspiration": {
    name: "Fuente de Inspiración",
    description: "",
  },
  "bard.countercharm": {
    name: "Contraencantamiento",
    description: "",
  },
  "bard.bard_college_feature": {
    name: "Rasgo de Colegio",
    description: "",
  },
  "bard.magical_secrets": {
    name: "Secretos Mágicos",
    description: "",
  },
  "bard.superior_inspiration": {
    name: "Inspiración Superior",
    description: "",
  },

  ...bard_subclass_features,
};

import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

const subclass_resources: GameLocalizationCategory = {
  // PHB
  // XGE
  // TCE
};

export const sorcerer_resources_es: GameLocalizationCategory = {
  ...subclass_resources,

  sorcery_points: {
    name: "Puntos de Hechicería",
    description: `Usado para lanzar conjuros o alterar sus propiedades. Se recargan tras un descanso largo.`,
  },
};

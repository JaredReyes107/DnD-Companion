import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

const subclass_resources: GameLocalizationCategory = {
  // PHB
  // XGE
  // TCE
};

export const sorcerer_resources_en: GameLocalizationCategory = {
  ...subclass_resources,

  sorcery_points: {
    name: "Sorcery Points",
    description: `A magical reserve used to cast more spell or alter their properties during casting. You regain all expended sorcery points after a long rest.`,
  },
};

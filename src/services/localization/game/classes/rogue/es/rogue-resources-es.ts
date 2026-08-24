import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

const subclass_resources: GameLocalizationCategory = {
  //PHB
  // XGE
  // TCE
};

export const rogue_resources_es: GameLocalizationCategory = {
  ...subclass_resources,

  sneak_attack: {
    name: "Ataque Furtivo",
    description: `Te permite realizar daño adiciona en ataques con arma. Se recarga cada turno.`,
  },
  stroke_of_luck: {
    name: "Golpe de Suerte",
    description: `Te permite tener éxito en una tirada de ataque fallida o tratar el dado como un 20 en una tirada de habilidad fallida. Se recarga tras un descanso corto o largo.`,
  },
};

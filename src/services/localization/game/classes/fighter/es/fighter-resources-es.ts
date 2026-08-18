import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const fighter_resources_es: GameLocalizationCategory = {
  second_wind: {
    name: "Tomar aliento",
    description:
      "Recuperas puntos de golpe igual a 1d10 + tu nivel de guerrero. Una vez que uses este rasgo, debes terminar un descanso corto o largo para usarlo de nuevo.",
  },
  action_surge: {
    name: "Acción súbita",
    description: `Puedes tomar una acción extra. Recuperas todos los usos de este rasgo después de un descanso corto o largo.`,
  },
  indomitable: {
    name: "Indomable",
    description: `Rehaces una tirada de salvación que hallas fallado. Debes usar el nuevo resultado. Recuperas todos los usos de este rasgo después de un descanso largo.`,
  },
};

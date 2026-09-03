import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const divination_resources_es: GameLocalizationCategory = {
  portent_dice: {
    name: "Dados de Presagio",
    description: `Te permite reemplazar una tirada de d20 cualquiera - tuya o de otros - por uno de tus Presagios. Se recuperan tras un descanso largo, y los que no hayas usado son reemplazados.`,
  },
  portent_turn_uses: {
    name: "Presagios por Turno",
    description: `La cantidad de veces que puedes reemplazar una tirada por un en un mismo turno.`,
  },
  the_third_eye: {
    name: "El Tercer Ojo",
    description: `Te permite ampliar tus sentidos temporalmente. Se recarga tras un descanso corto o largo.`,
  },
};

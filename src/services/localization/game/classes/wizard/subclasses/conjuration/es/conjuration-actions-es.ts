import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const conjuration_actions_es: GameLocalizationCategory = {
  minor_conjuration: {
    name: "Conjuración Menor",
    description: `Conjuras un objeto inanimado en tu mano o en el suelo hasta a 10 pies de distancia de ti en un lugar desocupado. El objeto no puede ser más de 3 pies de largo por un lado, no puede pesar más de 10 libras y su forma debe ser la de un objeto no mágico que hayas visto. El objeto es visiblemente mágico, brillando con luz tenue a hasta 5 pies.
        El objeto permanece por 1 hora, hasta que vuelvas a usar esta acción o hasta que reciba daño.`,
  },
  benign_transposition: {
    name: "Transposición Benigna",
    description: `Te teletransportas, ya sea hacia un espacio desocupado que puedas ver a 30 pies de ti, o cambiando de lugar con una criatura voluntaria de tamaño Pequeño o Mediano a 30 pies de ti.`,
  },
};

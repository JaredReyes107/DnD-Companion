import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const paladin_resources_es: GameLocalizationCategory = {
  divine_sense: {
    name: "Sentido Divino",
    description: `Usado para detectar fuerzas sagradas y malvadas. Puedes usar este rasgo un número de veces igual a 1 + tu modificador por Carisma. Cuando termines un descanso largo, recuperas todos los usos que hayas gastado.`,
  },
  lay_on_hands: {
    name: "Imponer las Manos",
    description: `Usado para recuperar puntos de golpe y curar enfermedades o venenos de una criatura que toques. Tienes una reserva igual a tu nivel de paladín multiplicado por 5, y recuperas todos cuando terminas un descanso largo. `,
  },
  cleansing_touch: {
    name: "Toque Purificador",
    description: `Usado para terminar el efecto de un conjuro sobre una criatura voluntaria que toques. Puedes usar este rasgo tantas veces como tu modificador por Carisma (mínimo una vez). Recuperas los usos gastados cuando termina un descanso prolongado.`,
  },
};

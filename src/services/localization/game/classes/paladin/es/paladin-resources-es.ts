import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

import { devotion_resources_es } from "../subclasses/devotion/es/devotion-resources-es";
import { ancients_resources_es } from "../subclasses/ancients/es/ancients-resources-es";
import { vengeance_resources_es } from "../subclasses/vengeance/es/vengeance-resources-es";

import { oathbreaker_resources_es } from "../subclasses/oathbreaker/es/oathbreaker-resources-es";

import { conquest_resources_es } from "../subclasses/conquest/es/conquest-resources-es";
import { redemption_resources_es } from "../subclasses/redemption/es/redemption-resources-es";

import { glory_resources_es } from "../subclasses/glory/es/glory-resources-es";
import { watchers_resources_es } from "../subclasses/watchers/es/watchers-resources-es";

const subclass_resources: GameLocalizationCategory = {
  //PHB
  ...devotion_resources_es,
  ...ancients_resources_es,
  ...vengeance_resources_es,

  // DMG
  ...oathbreaker_resources_es,

  // XGE
  ...conquest_resources_es,
  ...redemption_resources_es,

  // TCE
  ...glory_resources_es,
  ...watchers_resources_es,
};

export const paladin_resources_es: GameLocalizationCategory = {
  ...subclass_resources,

  divine_sense: {
    name: "Sentido Divino",
    description: `Usado para detectar fuerzas sagradas y malvadas. Puedes usar este rasgo un número de veces igual a 1 + tu modificador por Carisma. Cuando termines un descanso largo, recuperas todos los usos que hayas gastado.`,
  },
  lay_on_hands: {
    name: "Imponer las Manos",
    description: `Usado para recuperar puntos de golpe y curar enfermedades o venenos de una criatura que toques. Tienes una reserva igual a tu nivel de paladín multiplicado por 5, y recuperas todos cuando terminas un descanso largo. `,
  },
  channel_divinity: {
    name: "Canalizar Divinidad",
    description: `Usado para activar distintos efectos mágicos en base a tu Juramento. Se recarga tras un descanso corto o largo.`,
  },
  cleansing_touch: {
    name: "Toque Purificador",
    description: `Usado para terminar el efecto de un conjuro sobre una criatura voluntaria que toques. Puedes usar este rasgo tantas veces como tu modificador por Carisma (mínimo una vez). Recuperas los usos gastados cuando termina un descanso prolongado.`,
  },
};

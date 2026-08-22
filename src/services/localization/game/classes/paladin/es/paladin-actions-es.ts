import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

import { devotion_actions_es } from "../subclasses/devotion/es/devotion-actions-es";
import { ancients_actions_es } from "../subclasses/ancients/es/ancients-actions-es";
import { vengeance_actions_es } from "../subclasses/vengeance/es/vengeance-actions-es";

import { oathbreaker_actions_es } from "../subclasses/oathbreaker/es/oathbreaker-actions-es";

import { conquest_actions_es } from "../subclasses/conquest/es/conquest-actions-es";
import { redemption_actions_es } from "../subclasses/redemption/es/redemption-actions-es";

import { glory_actions_es } from "../subclasses/glory/es/glory-actions-es";
import { watchers_actions_es } from "../subclasses/watchers/es/watchers-actions-es";

const subclass_actions: GameLocalizationCategory = {
  // PHB
  ...devotion_actions_es,
  ...ancients_actions_es,
  ...vengeance_actions_es,

  // DMG
  ...oathbreaker_actions_es,

  // Xanathar's
  ...conquest_actions_es,
  ...redemption_actions_es,

  // Tasha's
  ...glory_actions_es,
  ...watchers_actions_es,
};

export const paladin_actions_es: GameLocalizationCategory = {
  ...subclass_actions,

  divine_sense: {
    name: "Sentido Divino",
    description: `Hasta el final de tu siguiente turno, sabes dónde se encuentra cualquier celestial, infernal o no muerto que esté a menos de 60 pies de ti y que no esté completamente cubierto. Sabes de qué tipo es (celestial, infernal o no muerto), pero no su identidad (el vampiro conde Strahd von Zarovich, por ejemplo). Dentro del mismo radio, también puedes detectar la presencia de cualquier lugar u objeto que haya sido bendecido o desacralizado, como con el conjuro Consagrar.`,
  },
  lay_on_hands: {
    name: "Imponer las Manos",
    description: `Tocas a una criatura y extraer poder de la reserva para hacer que esta recupere puntos de golpe hasta la cantidad máxima que quede en tu reserva. De forma alternativa, puedes gastar 5 puntos de golpe de tu reserva de curación para curar al objetivo de una enfermedad o neutralizar el veneno que le afecta. Puedes curar varias enfermedades y neutralizar varios venenos con un único uso de Imposición de manos gastando puntos de golpe independientes para cada uno. Este rasgo no afecta ni a los no muertos ni a los constructos.`,
  },
  divine_smite: {
    name: "Castigo Divino",
    description: `Gastas un espacio de conjuro para infligir daño radiante al objetivo además del daño del arma. El daño adicional es 2d8 si el espacio de conjuro es de nivel 1, más 1d8 por cada nivel de conjuro mayor de 1, hasta un máximo de 5d8. El daño aumenta en 1d8 si el objetivo es un no muerto o un infernal.`,
  },
  improved_divine_smite: {
    name: "Castigo Divino Mejorado",
    description: `Cuando impactes a una criatura con un arma cuerpo a cuerpo, la criatura recibe 1d8 puntos de daño adicionales por daño radiante. Si utilizas Castigo divino en un ataque, suma este daño al daño adicional de Castigo divino.`,
  },
  cleansing_touch: {
    name: "Toque Purificador",
    description: `Eliminas una el efecto de un conjuro que haya sobre ti o sobre una criatura voluntaria a la que toques.`,
  },
};

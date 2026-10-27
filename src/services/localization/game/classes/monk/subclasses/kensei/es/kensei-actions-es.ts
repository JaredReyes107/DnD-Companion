import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const kensei_actions_es: GameLocalizationCategory = {
  agile_parry: {
    name: "Bloqueo Veloz",
    description: `Si realizas un ataque sin armas como parte de una acción de Atacar durante tu turno y empuñas un arma de kensei, puedes utilizarla para defenderte si se trata de un arma cuerpo a cuerpo. Obtienes un bonificador de +2 a la CA hasta el comienzo de tu próximo turno, siempre y cuando el arma siga en tu mano y no quedes incapacitado.`,
  },
  kensei_shot: {
    name: "Disparo del Kensei",
    description: `Hasta el final de tu turno, tus ataques a distancia con un arma de kensei sean más letales. Si lo haces, cualquier objetivo impactado con un ataque a distancia utilizando un arma de kensei recibe 1d4 de daño adicional del mismo tipo que el arma.`,
  },
  deft_strike: {
    name: "Golpe Diestro",
    description: `Gastas 1 punto de ki cuando impactas a un objetivo con un ataque con un arma de kensei para que el arma inflija daño adicional al objetivo igual a tu dado de Artes Marciales.`,
  },
  sharpen_the_blade: {
    name: "Afilar la Hoja",
    description: `Gastas hasta 3 puntos de ki para infundir un arma de kensei que toques con un bonificador a las tiradas de ataque y daño cuando ataques con ella. El bonificador es igual a los puntos de ki que gastes. Dura 1 minuto o hasta que vuelvas a usar este rasgo. No tiene efecto en un arma mágica que ya tenga un bonificador a las tiradas de ataque y daño.`,
  },
  unerring_accurracy: {
    name: "Precisión Infalible",
    description: `Repites una tirada de ataque fallida utilizando un arma de monje en tu turno.`,
  },
};

import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const kensei_features_es: GameLocalizationCategory = {
  path_of_the_kensei: {
    name: "Sendero del Kensei",
    description: `Tu entrenamiento especial con las artes marciales te ha permitido dominar el uso de ciertas armas. Ganas los siguientes beneficios:
    - Armas del Kensei: Elige dos tipos de armas para ser tus armas de kensei: una cuerpo a cuerpo y una a distancia. Pueden ser cualquier arma sencilla o marcial que no tenga las propiedades “especial” o “pesada". El arco largo también es una elección válida. Consigues competencia con esas armas si no la tenías. Las armas del tipo escogido se consideran armas de monje para ti. Muchos de los rasgos de esta tradición solo funcionan con tus armas de kensei. Cuando llegas a nivel 6, 11 y 17 de esta clase, puedes elegir otro tipo de arma, ya sea cuerpo a cuerpo o a distancia, para que sea también un arma de kensei para ti, siguiendo las mismas limitaciones ya indicadas.
    - Bloqueo Veloz: Si realizas un ataque sin armas como parte de una acción de Atacar durante tu turno y empuñas un arma de kensei, puedes utilizarla para defenderte si se trata de un arma cuerpo a cuerpo. Obtienes un bonificador de +2 a la CA hasta el comienzo de tu próximo turno, siempre y cuando el arma siga en tu mano y no quedes incapacitado.
    - Disparo del Kensei: Puedes usar una acción adicional en tu turno para que tus ataques a distancia con un arma de kensei sean más letales. Si lo haces, cualquier objetivo impactado con un ataque a distancia utilizando un arma de kensei recibe 1d4 de daño adicional del mismo tipo que el arma. Mantienes este beneficio hasta el final del turno actual.
    - Camino del Pincel: Ganas competencia con suministros de calígrafo o de pintor, a tu elección.`,
  },
  one_with_the_blade: {
    name: "Uno con la Espada",
    description: `Extiendes tu ki a tus armas del kensei, otorgándote los siguientes beneficios:
    - Armas Mágicas del Kensei: Los ataques que hagas con armas de kensei cuentan como mágicos en lo que a sobrepasar las resistencias e inmunidades a daño y ataques no mágicos se refiere.
    - Golpe Diestro: Cuando impactas a un objetivo con un ataque con un arma de kensei, puedes gastar 1 punto de ki para que el arma inflija daño adicional al objetivo igual a tu dado de Artes Marciales. Solo puedes usar este rasgo una vez en cada uno de tus turnos.`,
  },
  sharpen_the_blade: {
    name: "Afilar la Hoja",
    description: `Obtienes la capacidad de potenciar aún más tus armas mediante tu ki. Como acción adicional, puedes gastar hasta 3 puntos de ki para infundir un arma de kensei que toques con un bonificador a las tiradas de ataque y daño cuando ataques con ella. El bonificador es igual a los puntos de ki que gastes. Dura 1 minuto o hasta que vuelvas a usar este rasgo. No tiene efecto en un arma mágica que ya tenga un bonificador a las tiradas de ataque y daño.`,
  },
  unerring_accuracy: {
    name: "Precisión Infalible",
    description: `Tu maestría con las armas se traduce en una precisión extraordinaria. Si fallas una tirada de ataque utilizando un arma de monje en tu turno, puedes repetirla. Solo puedes usar este rasgo una vez en cada uno de tus turnos.`,
  },
};

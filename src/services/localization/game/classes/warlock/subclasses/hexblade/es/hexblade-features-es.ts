import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const hexblade_features_es: GameLocalizationCategory = {
  hex_warrior: {
    name: "Guerrero Maléfico",
    description: `Adquieres el entrenamiento necesario para armarte de forma efectiva para la batalla. Obtienes competencia con armaduras medias, escudos y armas marciales. La influencia de tu patrón también te permite canalizar tu voluntad místicamente a través de un arma concreta. Tras terminar un descanso largo, puedes tocar un arma con la que seas competente y que no tenga la propiedad "a dos manos". Cuando ataques con esa arma, puedes usar tu modificador de Carisma, en vez del de Fuerza o Destreza, tanto para las tiradas de ataque como para las de daño. Este beneficio dura hasta que completes un descanso largo. Si consigues más tarde el rasgo Pacto del Filo, este efecto se extiende a cualquier arma de pacto que conjures con ese rasgo, independientemente del tipo que sea.`,
  },
  hexblades_curse: {
    name: "Maldición del Filo Maléfico",
    description: `Eres capaz de imponer una maldición terrible. Como acción adicional, elige a una criatura que puedas ver y se encuentre a 30 pies o menos de ti. El objetivo queda maldito durante 1 minuto. Esta maldición termina antes de ese tiempo si el objetivo o tú morís, o si quedas incapacitado. Hasta que la maldición finalice, obtienes los siguientes beneficios:
      - Consigues un bonificador a las tiradas de daño contra el objetivo. Este bonificador es igual a tu bonificador por competencia.
      - Cualquier tirada de ataque que realices contra la criatura maldita es un critico con un resultado de 19 o 20 en el d20.
      - Si el objetivo maldito muere, recuperas tantos puntos de golpe como tu nivel de brujo + tu modificador de Carisma (mínimo 1 punto de golpe).
      Una vez utilizado este rasgo, deberás terminal un descanso corto o largo para poder volver a utilizarlo.`,
  },
  accursed_specter: {
    name: "Espectro Maldito",
    description: `Puedes maldecir el alma de una persona a la que mates, forzándola a servirte temporalmente. Cuando acabas con la vida de un humanoide, puedes hacer que su espíritu se alce de su cadáver como un espectro. Puedes encontrar su perfil en el Monster Manual. Cuando el espectro aparece, este obtiene tantos puntos de golpe temporales como la mitad de tu nivel de brujo. haz una tirada de iniciativa para el espectro, que tiene sus propios turnos. Obedecerá tus órdenes verbales y, además, cuenta con un bonificador especial a sus tiradas de ataque igual a tu modificador de Carisma (mínimo de +0). El espectro estará a tu servicio hasta el final de tu siguiente descanso largo, momento en el que se disipará en el más allá. Una vez ates a un alma con este rasgo, no podrás utilizarlo de nuevo hasta que acabes un descanso largo.`,
  },
  armor_of_hexes: {
    name: "Armadura de Maleficios",
    description: `Tu maleficio se vuelve más poderoso. Si el objetivo de tu Maldición del Filo Maléfico te impacta con una tirada de ataque, puedes utilizar tu reacción para tirar un d6. con un resultado de 4 o superior, el ataque falla, independientemente de su tirada.`,
  },
  master_of_hexes: {
    name: "Maestro de Maldiciones",
    description: `Puedes extender tu maldición del Filo Maléfico de una criatura derrotada a otra. Cuando el objetivo afectado por tu Maldición del Filo Maléfico muera, puedes trasladar la maldición a una criatura diferente que puedas ver se encuentre a 30 pies o menos de ti, siempre que no estés incapacitado. Cuando transfieres la maldición de este modo, no recuperas puntos de golpe por la muerte de la criatura previamente maldita.`,
  },
};

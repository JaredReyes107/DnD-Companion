import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const hexblade_actions_es: GameLocalizationCategory = {
  hexblades_curse: {
    name: "Maldición del Filo Maléfico",
    description: `Elijes a una criatura que puedas ver y se encuentre a 30 pies o menos de ti. El objetivo queda maldito durante 1 minuto, hasta que el objetivo o tú mueran, o si quedas incapacitado. Hasta que la maldición finalice, obtienes los siguientes beneficios:
        - Consigues un bonificador a las tiradas de daño contra el objetivo. Este bonificador es igual a tu bonificador por competencia.
        - Cualquier tirada de ataque que realices contra la criatura maldita es un critico con un resultado de 19 o 20 en el d20.
        - Si el objetivo maldito muere, recuperas tantos puntos de golpe como tu nivel de brujo + tu modificador de Carisma (mínimo 1 punto de golpe).`,
  },
  hex_warrior: {
    name: "Guerrero Maléfico",
    description: `Tras terminar un descanso largo, tocas un arma con la que seas competente y que no tenga la propiedad "a dos manos". Cuando ataques con esa arma, puedes usar tu modificador de Carisma, en vez del de Fuerza o Destreza, tanto para las tiradas de ataque como para las de daño. Este beneficio dura hasta que completes un descanso largo. 
        Si consigues más tarde el rasgo 'Pacto del Filo', este efecto se extiende a cualquier arma de pacto que conjures con ese rasgo, independientemente del tipo que sea.`,
  },
  accursed_specter: {
    name: "Espectro Maldito",
    description: `Cuando mates a un humanoide, creas un 'Espectro' a partir de su espíritu. Este obtiene tantos puntos de golpe temporales como la mitad de tu nivel de brujo. Tiene su propia iniciativa y turnos, obedece tus órdenes verbales y cuenta con un bonificador especial a sus tiradas de ataque igual a tu modificador de Carisma (mínimo de +0). El espectro estará a tu servicio hasta el final de tu siguiente descanso largo.`,
  },
  armor_of_hexes: {
    name: "Armadura de Maleficios",
    description: `Cuando el objetivo de tu 'Maldición del Filo Maléfico' te impacta con una tirada de ataque, puedes utilizar tu reacción para tirar un d6. con un resultado de 4 o superior, el ataque falla, independientemente de su tirada.`,
  },
  master_of_hexes: {
    name: "Maestro de Maldiciones",
    description: `Cuando el objetivo afectado por tu 'Maldición del Filo Maléfico' muera, puedes trasladar la maldición a una criatura diferente que puedas ver se encuentre a 30 pies o menos de ti, siempre que no estés incapacitado. Cuando transfieres la maldición de este modo, no recuperas puntos de golpe por la muerte de la criatura previamente maldita.`,
  },
};

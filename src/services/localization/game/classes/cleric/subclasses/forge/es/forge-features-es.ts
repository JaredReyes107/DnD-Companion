import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const forge_features_es: GameLocalizationCategory = {
  blessing_of_the_forge: {
    name: "Bendición de la Forja",
    description:
      "Obtienes la habilidad de imbuir un arma o armadura con magia. Al final de un descanso largo, puedes tocar un objeto no mágico que sea una armadura o un arma marcial o sencilla. hasta el final de tu próximo descanso largo, este objeto se convierte en mágico, otorgando un bonificador de +1 a la CA si es una armadura o de +1 a las tiradas de ataque y daño si es un arma. Una vez utilizado este rasgo, deberás terminar un descanso largo para poder volver a emplearlo.",
  },
  bonus_proficiencies: {
    name: "Competencias Adicionales",
    description:
      "Ganas competencia con armaduras pesadas y Herramientas de herrero.",
  },
  forge_domain_spells: {
    name: "Conjuros de Dominio",
    description: `Los conjuros de dominio siempre se consideran preparados y no se contarán dentro del número de conjuros que puedes preparar cada día.
      Si tienes un conjuro de dominio que no aparece en la lista de conjuros de clérigo, para ti ese conjuro es de clérigo.`,
  },
  channel_divinity_artisans_blessing: {
    name: "Bendición del Artesano",
    description:
      "Puedes usar tu Canalizar Divinidad para crear objetos sencillos. Llevas a cabo un ritual de una hora de duración que creará un objeto no mágico que debe incluir metal: un arma sencilla o marcial, una armadura, diez unidades de munición, unas herramientas u otro objeto de metal (consulta el capítulo 5, 'Equipo', en el Player's Handbook, para ver algunos ejemplos). La creación queda completa al terminar la hora, apareciendo en un espacio desocupado de tu elección, encima de una superficie que se encuentre a 5 pies o menos de ti. Lo que crees no puede tener un valor superior a 100 po. Como parte del ritual debes preparar metal, que puede incluir monedas, de un valor igual al del objeto generado. El metal se funde y transforma en la creación al final del ritual, dando lugar de forma mágica a las partes no metálicas del objeto. El ritual puede crear un duplicado de un objeto no mágico que contenga metal, como una llave, si tienes en tu posesión el original para llevarlo a cabo.",
  },
  soul_of_the_forge: {
    name: "Alma de la Forja",
    description:
      "Tu maestría con la forja te proporciona habilidades especiales: Ganas resistencia al fuego. Además, recibes un bonificador de +1 a la Clase de Armadura cuando lleves armadura pesada.",
  },
  divine_strike: {
    name: "Golpe Divino",
    description:
      "Obtienes la capacidad de infundir los golpes de tu arma con el fiero poder de la forja. una vez en cada uno de tus turnos, cuando impactes a una criatura con un ataque con arma, puedes hacer que dicho ataque cause 1d8 de daño de fuego adicional al objetivo. Cuando llegas a nivel 14, este daño adicional pasa a ser 2d8.",
  },
  saint_of_forge_and_fire: {
    name: "Santo de la Forja y el Fuego",
    description:
      "Tu afinidad sagrada con el fuego y el metal se vuelve más poderosa: Ganas inmunidad al daño de fuego. Además, mientras lleves armadura pesada, tienes resistencia al daño contundente, cortante y perforante de ataques no mágicos.",
  },
};

import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const beast_master_features_es: GameLocalizationCategory = {
  rangers_companion: {
    name: "Compañero Animal",
    description: `Obtienes un compañero animal que te acompaña en tus aventuras y está capacitado para luchar junto a ti. Elige una bestia que no sea mayor que tamaño Medio y que tenga un valor de desafío de un 1/4 o más bajo (el Apéndice D presenta las estadísticas para el halcón, el mastín, y la pantera como ejemplos). Añade tu bonificador de competencia a la CA de la bestia, sus tiradas de ataque y de daño, así como a cualquier tirada de salvación y habilidades en las que sea competente. Sus puntos de golpe máximos son iguales a su máximo normal o cuatro veces tu nivel de explorador, el que sea mayor.
      La bestia obedece las órdenes de la mejor manera que puede. Actúa en tu turno de iniciativa, aunque no lo hará a menos que se lo ordenes. En tu turno, puedes ordenar verbalmente a la bestia dónde moverse (sin que cuente como acción). Puedes utilizar tu acción para ordenarle verbalmente que realice la acción Ataque, Carrera, Retirada, Esquiva o Ayuda. Una vez que tengas el rasgo Ataque Extra podrás hacer un ataque tú mismo cuando ordenes a la bestia que realice la acción de atacar.
      Mientras viajas a través de su terreno predilecto solo con la bestia, podéis moveros sigilosamente a un ritmo normal.
      Si la bestia muere puedes conseguir otra si pasas 8 horas estableciendo un vínculo mágico con otra bestia que no te sea hostil, ya sea el mismo tipo de bestia anterior o una diferente.`,
  },
  exceptional_training: {
    name: "Entrenamiento Excepcional",
    description: `En cualquiera de tus turnos en los que el compañero animal no ataque, puedes utilizar una acción adicional para ordenar a la bestia que realice en su turno una acción de Carrera, Retirada, Esquiva o Ayuda.`,
  },
  bestial_fury: {
    name: "Furia Bestial",
    description: `Tu compañero animal puede realizar dos ataques cuando le ordenes que use la acción de Ataque.`,
  },
  share_spells: {
    name: "Compartir Conjuros",
    description: `Cuando lances un conjuro dirigido a ti mismo también puedes afectar a tu compañero animal si la bestia se encuentra a un máximo de 30 pies de ti.`,
  },
};

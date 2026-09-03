import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const necromancy_features_es: GameLocalizationCategory = {
  necromancy_savant: {
    name: "Erudito de la Nigromancia",
    description: `El oro y el tiempo que debes invertir para copiar un conjuro de nigromancia en tu libro de conjuros se divide a la mitad.`,
  },
  grim_harvest: {
    name: "Cosecha Sombría",
    description: `Ganas la habilidad de recoger la energía vital de las criaturas que matas con tus conjuros. Una vez por turno, cuando matas a una o más criaturas con un conjuro de nivel 1 o superior, recuperas un número de puntos de golpe equivalentes al doble del nivel del conjuro, o el triple de su nivel si pertenece a la Escuela de Nigromancia. No ganas este beneficio al destruir constructos o muertos vivientes.`,
  },
  undead_thralls: {
    name: "Esclavos Muertos Vivientes",
    description: `Añades el conjuro Animar muerto a tu libro de conjuros si aún no lo tenías. Cuando lanzas animar muerto, puedes designar un cuerpo o una pila de huesos adicional, creando otro zombi o esqueleto, según corresponda.
      Siempre que crees un muerto viviente usando un conjuro de nigromancia, tiene estos beneficios adicionales:
        - Los puntos de golpe de la criatura se incrementan en un número igual a tu nivel de mago.
        - La criatura agrega tu bonificador de competencia a sus tiradas de daño con armas.`,
  },
  inured_to_undeath: {
    name: "Acostumbrado a los Muertos Vivientes",
    description: `Tienes resistencia al daño necrótico y tu máximo de puntos de golpe no puede ser reducido. Has pasado tanto tiempo tratando con los muertos vivientes y las fuerzas que los animan que te has acostumbrado a algunos de sus peores efectos.`,
  },
  command_undead: {
    name: "Comandar Muertos Vivientes",
    description: `Puedes usar la magia para conducir a los muertos vivientes bajo tu control incluso aquellos creados por otros magos. Como una acción, puedes elegir un muerto viviente que puedas ver en un rango de 60 pies. La criatura debe superar una tirada de salvación de Carisma contra la CD de tus conjuros de mago. Si tiene éxito, no puedes usar este rasgo en ella nuevamente. Si falla, se vuelve amistosa contigo y obedece tus órdenes hasta que uses este rasgo nuevamente.
      Los muertos vivientes inteligentes son más difíciles de controlar de esta forma. Si el objetivo tiene una inteligencia de 8 o superior, tiene ventaja en la tirada de salvación. Si falla su salvación y tiene una Inteligencia de 12 o superior, puede repetir la tirada una vez cada hora hasta tener éxito y liberarse.`,
  },
};

import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const necromancy_actions_es: GameLocalizationCategory = {
  grim_harvest: {
    name: "Cosecha Sombría",
    description: `Cuando matas a una o más criaturas con un conjuro de nivel 1 o superior, recuperas un número de puntos de golpe equivalentes al doble del nivel del conjuro, o el triple de su nivel si pertenece a la Escuela de Nigromancia. No ganas este beneficio al destruir constructos o muertos vivientes.`,
  },
  command_undead: {
    name: "Comandar Muertos Vivientes",
    description: `Eliges  un muerto viviente que puedas ver en un rango de 60 pies. La criatura debe superar una tirada de salvación de Carisma contra la CD de tus conjuros de mago. Si falla, se vuelve amistosa contigo y obedece tus órdenes hasta que uses este rasgo nuevamente. Si tiene éxito, no puedes usar este rasgo en ella nuevamente.
      Los muertos vivientes inteligentes son más difíciles de controlar de esta forma. Si el objetivo tiene una inteligencia de 8 o superior, tiene ventaja en la tirada de salvación. Si falla su salvación y tiene una Inteligencia de 12 o superior, puede repetir la tirada una vez cada hora hasta tener éxito y liberarse.`,
  },
};

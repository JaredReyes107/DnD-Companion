import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const shepherd_actions_es: GameLocalizationCategory = {
  spirit_totem_summon: {
    name: "Invocar Totém Espiritual",
    description:
      "Invocas de forma mágica a un animal incorpóreo en un punto que puedas ver y se encuentre a 60 pies o menos de ti. Este espíritu crea un aura de 30 pies de radio alrededor de ese punto. No cuenta como criatura ni como objeto, aunque tiene el aspecto espectral del ser que representa. Este animal incorpóreo persiste durante 1 minuto o hasta que quedes incapacitado. Los efectos del aura dependen del tipo de espíritu que invoques, entre Halcón, Oso y Unicornio",
  },
  spirit_totem_move: {
    name: "Mover Totém Espiritual",
    description: "Mueves el espíritu hasta 60 pies a un punto que puedas ver.",
  },
  faithful_summons: {
    name: "Fieles Invocados",
    description:
      "Los espíritus de la naturaleza con los que comulgas te pretegerán cuando estés mas indefenso. Si tus puntos de golpe se reducen a 0 o eres incapacitado contra tu voluntad, puedes ganar inmediatamente los beneficios de Conjurar animales como si hubiera sido lanzado usando un espacio de conjuro de nivel 9. Este conjuro invoca a cuatro bestias de tu elección cuyo valor de desafío sea de 2 o menos. Estas aparecen a 20 pies o menos de ti. Si no reciben ninguna orden tuya, te pretegerán de todo mal y atacarán a tus enemigos. El conjuro dura 1 hora, sin que sea necesaria concentración, o hasta que decidas darlo por terminado (esto no requiere una acción).",
  },
};

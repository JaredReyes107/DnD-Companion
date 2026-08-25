import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const phantom_actions_es: GameLocalizationCategory = {
  wails_from_the_grave: {
    name: "Lamentos de Ultratumba",
    description: `Después de infligir daño con tu Ataque Furtivo a una criatura en tu turno, puedes elegir como objetivo a otra criatura que puedas ver a 30 pies o menos de la primera. Tira la mitad del número de dados de Ataque Furtivo para tu nivel (redondeando hacia arriba). La segunda criatura recibirá daño necrótico igual al resultado, `,
  },
  tokens_of_the_departed_capture: {
    name: "Recuerdos de los Difuntos: Capturar",
    description: `Cuando una criatura que puedas ver muere a 30 pies de ti o menos, usas tu reacción para capturar su esencia y ganas una bagatela de alma.`,
  },
  tokens_of_the_departed_retribution: {
    name: "Recuerdos de los Difuntos: Castigar",
    description: `Cuando causas daño en tu turno con Ataque Furtivo, puedes destruir una de las bagatelas de alma que lleves contigo y luego usar inmediatamente Lamentos de Ultratumba sin gastar un uso de ese rasgo.`,
  },
  tokens_of_the_departed_interrogate: {
    name: "Recuerdos de los Difuntos: Interrogar",
    description: `Destruyes una de tus bagatelas de alma sin importar dónde se encuentre.  Si lo haces, podrás hacerle una pregunta al espíritu vinculado a la bagatela. El espíritu se te aparecerá y te responderá en un idioma que conocía en vida. No tiene la obligación de ser sincero y responderá de la manera más concisa posible, ansioso por ser libre. `,
  },
  ghost_walk: {
    name: "Paseo Fantasmal",
    description: `Durante 10 minutos, obtienes una velocidad volando de 10 pies, puedes levitar y las tiradas de ataque contra ti tienen desventaja. También puedes moverte a través de criaturas y objetos como si fueran terreno difícil, pero recibirás 1d10 de daño de fuerza si terminas tu turno dentro de una criatura o un objeto.`,
  },
};

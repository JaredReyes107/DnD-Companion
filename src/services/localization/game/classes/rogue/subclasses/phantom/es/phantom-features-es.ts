import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const phantom_features_es: GameLocalizationCategory = {
  wails_from_the_grave: {
    name: "Susurros de los Muertos",
    description: `Los ecos de los difuntos se aferran a ti. Tras finalizar un descanso corto o largo, puedes elegir una habilidad o una competencia con herramientas que no tengas y obtenerla, pues un ser fantasmal comparte su conocimiento contigo.
      Perderás esta competencia cuando uses este rasgo para elegir otra competencia que te falte.`,
  },
  whispers_of_the_dead: {
    name: "Lamentos de Ultratumba",
    description: `Cuando haces que una criatura se acerque a su final, puedes canalizar el poder de la muerte para dañar también a otro objetivo. Justo después de infligir daño con tu Ataque Furtivo a una criatura en tu turno, puedes elegir como objetivo a otra criatura que puedas ver a 30 pies o menos de la primera. Tira la mitad del número de dados de Ataque Furtivo para tu nivel (redondeando hacia arriba). La segunda criatura recibirá daño necrótico igual al resultado, mientras, por un momento, a su alrededor resuenan los lamentos de los muertos.
      Puedes usar este rasgo una cantidad de veces igual a tu bonificador por competencia y recuperas todos los usos tras finalizar un descanso largo.`,
  },
  tokens_of_the_departed: {
    name: "Recuerdos de los Difuntos",
    description: `Cuando alguien muere en tu presencia, puedes arrebatar un recuerdo de su alma, un fragmento de su esencia vital que adopta una forma física: como reacción, cuando una criatura que puedas ver muera a 30 pies o menos de ti, podrás abrir tu mano libre y hacer que aparezca en ella una bagatela de alma Diminuta.
      Puedes tener una cantidad máxima de bagatelas de alma igual a tu bonificador por competencia y no puedes crear una mientras tengas el máximo.
      Puedes usar las bagatelas de alma de las siguientes formas:
        - Mientras llevas contigo una bagatela de alma, tienes ventaja en las tiradas de salvación contra muerte y en las tiradas de salvación de Constitución, ya que tu vitalidad se ve reforzada por la esencia vital del objeto.
        - Cuando causas daño en tu turno con Ataque Furtivo, puedes destruir una de las bagatelas de alma que lleves contigo y luego usar inmediatamente Lamentos de Ultratumba sin gastar un uso de ese rasgo.
        - Como acción, puedes destruir una de tus bagatelas de alma sin importar dónde se encuentre. Si lo haces, podrás hacerle una pregunta al espíritu vinculado a la bagatela. El espíritu se te aparecerá y te responderá en un idioma que conocía en vida. No tiene la obligación de ser sincero y responderá de la manera más concisa posible, ansioso por ser libre. El espíritu solo sabe lo que ya sabía en vida, según determine el DM.`,
  },
  ghost_walk: {
    name: "Paseo Fantasmal",
    description: `Puedes entrar parcialmente en el reino de los muertos, volviéndote incorpóreo. Como acción adicional, adoptas una forma espectral. Mientras tengas esta forma, tendrás una velocidad volando de 10 pies, podrás levitar y las tiradas de ataque tendrán desventaja contra ti. También podrás moverte a través de criaturas y objetos como si fueran terreno difícil, pero recibirás 1d10 de daño de fuerza si terminas tu turno dentro de una criatura o un objeto.
      Mantienes esta forma durante 10 minutos o hasta que la termines como acción adicional. Para volver a usar este rasgo, debes finalizar un descanso largo o destruir una de tus bagatelas de alma como parte de la acción adicional que uses para activar Paseo Fantasmal.`,
  },
  deaths_friend: {
    name: "Amigo de la Muerte",
    description: `Tu asociación con la muerte ha llegado a ser tan estrecha que obtienes los siguientes beneficios:
      - Cuando uses Lamentos de Ultratumba, podrás causar daño necrótico tanto a la primera como a la segunda criatura.
      - Tras finalizar un descanso largo, en tu mano aparecerá una bagatela de alma si no tienes ninguna, ya que atraes a los espíritus de los muertos.`,
  },
};

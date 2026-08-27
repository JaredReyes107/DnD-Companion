import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const clockwork_soul_features_es: GameLocalizationCategory = {
  clockwork_magic: {
    name: "Magia Mecánica",
    description: `Aprendes conjuros adicionales cuando alcanzas determinados niveles de esta clase. Todos estos conjuros se consideran, en lo que a ti respecta, conjuros de hechicero, pero no cuentan para el total de conjuros de hechicero que conoces.
      Además, cada vez que subas un nivel de hechicero, podrás sustituir uno de los conjuros ganados de este rasgo por otro del mismo nivel. El nuevo conjuro debe ser de abjuración o transmutación y aparecer en la lista de conjuros de hechicero, brujo o mago.`,
  },
  restore_balance: {
    name: "Restablecer Equilibrio",
    description: `Tu conexión con el plano del orden absoluto te permite ecualizar momentos caóticos. Cuando una criatura que puedas ver a 60 pies o menos de ti esté a punto de tirar un d20 con ventaja o desventaja, puedes usar tu reacción para impedir que la tirada tenga ventaja y desventaja.
      Puedes usar este rasgo una cantidad de veces igual a tu bonificador por competencia y recuperas todos los usos tras finalizar un descanso largo.`,
  },
  bastion_of_law: {
    name: "Bastión de la Ley",
    description: `Puedes acceder a la gran ecuación de la existencia para imbuir a una criatura de un escudo resplandeciente de orden. Como acción, puedes gastar de 1 a 5 puntos de hechicería para crear una protección mágica a tu alrededor o alrededor de otra criatura que puedas ver a 30 pies o menos de ti. La protección durará hasta que finalices un descanso largo o hasta que vuelvas a usar este rasgo.
      Esta protección está representada por un número de d8 igual a la cantidad de puntos de hechicería gastados para crearla. Si la criatura protegida recibe daño, puede gastar varios de esos dados, tirarlos y restar el resultado del daño recibido.`,
  },
  trance_of_order: {
    name: "Trance de Orden",
    description: `Obtienes la capacidad de alinear tu consciencia con los infinitos cálculos de Mechanus. Como acción adicional, puedes entrar en este estado durante 1 minuto.
      Mientras dure, las tiradas de ataque contra ti no podrán tener ventaja y siempre que realices una tirada de ataque, una prueba de característica o una tirada de salvación, podrás sustituir un resultado de 9 o menos en el d20 por un 10.
      Cuando uses esta acción adicional, no podrás volver a hacerlo hasta que finalices un descanso largo, a menos que gastes 5 puntos de hechicería para volver a usarla.`,
  },
  clockwork_cavalcade: {
    name: "Cabalgata Mecánica",
    description: `Invocas espíritus del orden para acabar con el desorden que te rodea. Como acción, invocas los espíritus en un cubo de 30 pies que se origina en ti. Los espíritus tienen aspecto de modrones o de otros autómatas de tu elección. Los espíritus son intangibles e invulnerables y crean los siguientes efectos dentro del cubo antes de desvanecerse:
        - Los espíritus permiten recuperar hasta 100 puntos de golpe, repartidos como tú elijas entre una cantidad de criaturas de tu elección que estén en el cubo.
        - Todos los objetos dañados enteramente que estén en el cubo se reparan al instante.
        - Se acaban todos los conjuros de nivel 6 o inferior sobre criaturas u objetos de tu elección que estén en el cubo.
      Cuando uses esta acción, no podrás volver a hacerlo hasta que finalices un descanso largo, a menos que gastes 7 puntos de hechicería para volver a usarla.`,
  },
};

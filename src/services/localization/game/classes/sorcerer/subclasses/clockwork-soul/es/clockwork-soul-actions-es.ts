import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const clockwork_soul_actions_es: GameLocalizationCategory = {
  restore_balance: {
    name: "Restablecer Equilibrio",
    description: `Te permite cancelar la ventaja o desventaja de una tirada de d20 de una criatura que puedas ver a 60 pies de ti.`,
  },
  bastion_of_law: {
    name: "Bastión de la Ley",
    description: `Gastas de 1 a 5 puntos de hechicería y creas una protección mágica alrededor de ti mismo o una criatura que puedas ver a 30 pies o menos de ti. La protección durará hasta que finalices un descanso largo o hasta que vuelvas a usar este rasgo.
      Esta protección se representa como una cantidad de d8s igual a los puntos de hechicería gastados. Si la criatura protegida recibe daño, puede gastar varios de esos dados, tirarlos y restar el resultado del daño recibido.`,
  },
  trance_of_order: {
    name: "Trance de Orden",
    description: `Durante 1 minuto, ningún ataque contra ti puede tener ventaja, y en todas tus tiradas de ataque, pruebas de característica o tiradas de salvación puedes tratar un resultado de 9 o menos como un 10.`,
  },
  clockwork_cavalcade: {
    name: "Cabalgata Mecánica",
    description: `Provocas los siguientes efectos en un área cúbica de 30 pies de lado contigo como origen:
      - Recuperas hasta 100 puntos de golpe, repartidos como tú elijas entre una cantidad de criaturas de tu elección que estén en el cubo.
      - Todos los objetos dañados enteramente que estén en el cubo se reparan al instante.
      - Se acaban todos los conjuros de nivel 6 o inferior sobre criaturas u objetos de tu elección que estén en el cubo.`,
  },
};

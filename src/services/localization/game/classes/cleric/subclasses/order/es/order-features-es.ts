import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const order_features_es: GameLocalizationCategory = {
  order_domain_spells: {
    name: "Conjuros de Dominio",
    description: `Los conjuros de dominio siempre se consideran preparados y no se contarán dentro del número de conjuros que puedes preparar cada día.
      Si tienes un conjuro de dominio que no aparece en la lista de conjuros de clérigo, para ti ese conjuro es de clérigo.`,
  },
  bonus_proficiencies: {
    name: "Competencias Adicionales",
    description:
      "Obtienes competencia con armaduras pesadas. También adquieres competencia en la habilidad Intimidación o Persuasión (a tu elección).",
  },
  voice_of_authority: {
    name: "Voz de la Autoridad",
    description: `Puedes invocar el poder de la ley para animar a un aliado a que ataque. Si lanzas un conjuro con un espacio de conjuro de nivel 1 o superior y el objetivo de ese conjuro es un aliado, este podrá usar su reacción inmediatamente después del conjuro para realizar un ataque con arma contra una criatura de tu elección que puedas ver.
      Si el conjuro tiene como objetivo a más de un aliado, tú eliges quién quieres que haga el ataque.`,
  },
  channel_divinity_orders_demand: {
    name: "Canalizar Divinidad: Demanda del Orden",
    description: `Puedes usar tu rasgo Canalizar Divinidad para ejercer una presencia intimidante sobre los demás.
      Como acción, muestras tu símbolo sagrado y cada criatura de tu elección que pueda verte u oírte a 30 pies o menos de ti deberá hacer una tirada de salvación de Sabiduría o será hechizada por ti hasta el final de tu siguiente turno o hasta que la criatura hechizada reciba algún daño. También puedes hacer que cualquiera de las criaturas hechizadas suelte lo que esté sujetando si falla la tirada de salvación.`,
  },
  embodiment_of_the_law: {
    name: "Encarnación de la Ley",
    description: `Eres todo un experto en canalizar la energía mágica para manipular a los demás.
      Si lanzas un conjuro de la escuela de encantamiento usando un espacio de conjuro de nivel 1 o superior, puedes cambiar el tiempo de lanzamiento del conjuro para que sea 1 acción adicional, siempre que el tiempo de lanzamiento sea normalmente de 1 acción.
      Puedes usar este rasgo una cantidad de veces igual a tu modificador por Sabiduría (mínimo una vez) y recuperas todo's los usos tras finalizar un descanso largo.`,
  },
  divine_strike: {
    name: "Golpe Divino",
    description:
      "Obtienes la capacidad de insuflar energía divina a los golpes de tu arma. Una vez en cada uno de tus turnos, cuando impactes a una criatura con un ataque con arma, podrás hacer que el ataque inflija 1d8 de daño psíquico adicional al objetivo. Cuando alcanzas el nivel 14, el daño adicional aumenta a 2d8.",
  },
  orders_wrath: {
    name: "Ira del Orden",
    description:
      "Los enemigos a los que decides destruir sucumben ante tus esfuerzos y los de tus aliados. Si causas daño con tu Golpe Divino a una criatura en tu turno, podrás maldecir a dicha criatura hasta el principio de tu siguiente turno. La próxima vez que uno de tus aliados impacte a la criatura maldita con un ataque, el objetivo también recibirá 2d8 de daño psíquico y se acabará la maldición. Puedes maldecir a una criatura de esta forma solo una vez por turno.",
  },
};

import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const order_actions_es: GameLocalizationCategory = {
  voice_of_authority: {
    name: "Voz de la Autoridad",
    description: `Si lanzas un conjuro con un espacio de conjuro de nivel 1 o superior y el objetivo de ese conjuro es un aliado, este podrá usar su reacción inmediatamente después del conjuro para realizar un ataque con arma contra una criatura de tu elección que puedas ver.
      Si el conjuro tiene como objetivo a más de un aliado, tú eliges quién quieres que haga el ataque.`,
  },
  channel_divinity_orders_demand: {
    name: "Canalizar Divinidad: Demanda del Orden",
    description: `Muestras tu símbolo sagrado y cada criatura de tu elección que pueda verte u oírte a 30 pies o menos de ti deberá hacer una tirada de salvación de Sabiduría o será hechizada por ti hasta el final de tu siguiente turno o hasta que la criatura hechizada reciba algún daño. También puedes hacer que cualquiera de las criaturas hechizadas suelte lo que esté sujetando si falla la tirada de salvación.`,
  },
  embodiment_of_the_law: {
    name: "Encarnación de la Ley",
    description: `Eres todo un experto en canalizar la energía mágica para manipular a los demás.
      Si lanzas un conjuro de la escuela de encantamiento usando un espacio de conjuro de nivel 1 o superior, puedes cambiar el tiempo de lanzamiento del conjuro para que sea 1 acción adicional, siempre que el tiempo de lanzamiento sea normalmente de 1 acción`,
  },
};

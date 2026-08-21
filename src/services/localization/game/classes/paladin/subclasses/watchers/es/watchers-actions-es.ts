import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const watchers_actions_es: GameLocalizationCategory = {
  channel_divinity_watchers_will: {
    name: "Canalizar Divinidad: Voluntad del Vigilante",
    description: `Durante 1 minuto, tú y una cantidad de criaturas hasta tu modificador por Carisma obtienen ventaja en las tiradas de salvación de Inteligencia, Sabiduría y Carisma.`,
  },
  channel_divinity_abjure_the_extraplanar: {
    name: "Canalizar Divinidad: Expulsar a los Extraplanares",
    description: `Cada aberración, celestial, elemental, feérico o infernal a 30 pies o menos de ti que pueda oírte deberá hacer una tirada de salvación de Sabiduría. Si falla, será expulsada durante 1 minuto o hasta que reciba daño.
        Una criatura expulsada deberá dedicar sus turnos a tratar de alejarse de ti todo lo que pueda y no podrá acabar su movimiento voluntariamente en ningún espacio que se encuentre a 30 pies o menos de ti. Tan solo podrá realizar la acción de Correr o intentar escapar de un efecto que le impida moverse. Si no tiene adónde ir, la criatura podrá usar la acción de Esquivar.`,
  },
  vigilant_rebuke: {
    name: "Castigo del Vigilante",
    description: `Si tú o una criatura que puedas ver a 30 pies o menos de ti tiene éxito en una tirada de salvación de Inteligencia, Sabiduría o Carisma, puedes usar tu reacción para infligir a la criatura que forzó la tirada de salvación un daño de fuerza igual a 2d8 + tu modificador por Carisma.`,
  },
  mortal_bulwark: {
    name: "Bastión Mortal",
    description: `Obtienes los siguientes beneficios, que duran 1 minuto:
        - Obtienes visión verdadera con un alcance de 120 pies.
        - Tienes ventaja en las tiradas de ataque contra aberraciones, celestiales, elementales, feéricos e infernales.
        - Cuando impactes a una criatura con una tirada de ataque y le inflijas daño, también podrás obligarla a realizar una tirada de salvación de Carisma contra tu CD de salvación de conjuros. Si falla, será desterrada mágicamente a su plano de existencia de origen si no se encuentra allí. Si la supera, no podrá ser desterrada con este rasgo durante 24 horas.`,
  },
};

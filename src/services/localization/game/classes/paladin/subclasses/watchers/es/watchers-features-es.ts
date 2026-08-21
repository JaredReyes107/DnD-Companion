import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const watchers_features_es: GameLocalizationCategory = {
  tenets_of_the_watchers: {
    name: "Principios de los Vigilantes",
    description: `Los paladines que pronuncian el juramento de los Vigilantes se comprometen a proteger los reinos mortales frente a las amenazas de otros mundos.
      - Vigilancia. Las amenazas a las que te enfrentas son astutas, poderosas y subversivas. Mantente siempre alerta frente a su corrupción.
      - Lealtad. Nunca aceptes obsequios o favores de infernales ni de quienes tengan tratos con ellos. Mantente fiel a tu orden, a tus camaradas y a tu deber.
      - Disciplina. Eres el escudo contra los horrores sin fin que moran más allá de las estrellas. Tu espada debe estar siempre afilada y tu mente, dispuesta, para sobrevivir a lo desconocido.`,
  },
  oath_spells_watchers: {
    name: "Conjuros de Juramento",
    description: `Consigues los conjuros de juramento en los niveles de paladín indicados. Una vez accedes a un conjuro de juramento, siempre lo tienes preparado. Los conjuros de juramento no cuentan conjuros que puedes preparar cada día. Si consigues un conjuro de juramento que no aparece en la lista de conjuros de paladín, para ti ese conjuro cuenta como un conjuro de paladín.`,
  },
  channel_divinity_watchers: {
    name: "Canalizar Divinidad",
    description: `Obtienes las siguientes opciones de Canalizar Divinidad:
      - Voluntad del Vigilante. Puedes usar Canalizar Divinidad para revestirte del poder protector de tu fe. Como acción, puedes elegir una cantidad de criaturas que puedas ver a 30 pies o menos de ti igual a tu modificador por Carisma o menos (mínimo una criatura). Durante 1 minuto, tú y las criaturas elegidas tendréis ventaja en las tiradas de salvación de Inteligencia, Sabiduría y Carisma.
      - Expulsar a los Extraplanares. Puedes usar tu rasgo Canalizar Divinidad para castigar a los seres de otros mundos. Como acción, muestras tu símbolo sagrado y cada aberración, celestial, elemental, feérico o infernal a 30 pies o menos de ti que pueda oírte deberá hacer una tirada de salvación de Sabiduría. Si falla, será expulsada durante 1 minuto o hasta que reciba daño. Una criatura expulsada deberá dedicar sus turnos a tratar de alejarse de ti todo lo que pueda y no podrá acabar su movimiento voluntariamente en ningún espacio que se encuentre a 30 pies o menos de ti. Tan solo podrá realizar la acción de Correr o intentar escapar de un efecto que le impida moverse. Si no tiene adónde ir, la criatura podrá usar la acción de Esquivar.`,
  },
  aura_of_the_sentinel: {
    name: "Aura del Centinela",
    description: `Tú y todas las criaturas que elgias a 10 pies de ti reciben un bonus a la iniciativa igual a tu bonificador por competencia. A nivel 18 el aura aumenta a 30 pies.`,
  },
  vigilant_rebuke: {
    name: "Castigo del Vigilante",
    description: `Siempre que tú o una criatura que puedas ver a 30 pies o menos de ti tengáis éxito en una tirada de salvación de Inteligencia, Sabiduría o Carisma, puedes usar tu reacción para infligir a la criatura que forzó la tirada de salvación un daño de fuerza igual a 2d8 + tu modificador por Carisma.`,
  },
  mortal_bulwark: {
    name: "Bastión Mortal",
    description: `Obtienes los siguientes beneficios, que duran 1 minuto:
      - Obtienes visión verdadera con un alcance de 120 pies.
      - Tienes ventaja en las tiradas de ataque contra aberraciones, celestiales, elementales, feéricos e infernales.
      - Cuando impactes a una criatura con una tirada de ataque y le inflijas daño, también podrás obligarla a realizar una tirada de salvación de Carisma contra tu CD de salvación de conjuros. Si falla, será desterrada mágicamente a su plano de existencia de origen si no se encuentra allí. Si la supera, no podrá ser desterrada con este rasgo durante 24 horas.`,
  },
};

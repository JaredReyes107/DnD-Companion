import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const redemption_features_es: GameLocalizationCategory = {
  tenets_of_redemption: {
    name: "Principios de la Redención",
    description: "",
  },
  oath_spells: {
    name: "Conjuros de Juramento",
    description: `Consigues los conjuros de juramento en los niveles de paladín indicados. Una vez accedes a un conjuro de juramento, siempre lo tienes preparado. Los conjuros de juramento no cuentan conjuros que puedes preparar cada día. Si consigues un conjuro de juramento que no aparece en la lista de conjuros de paladín, para ti ese conjuro cuenta como un conjuro de paladín.`,
  },
  channel_divinity_redemption: {
    name: "Canalizar Divinidad",
    description: `Tu juramento te permite canalizar energía divina para activar efectos mágicos. Cuando uses Canalizar divinidad, tú eliges qué opción utilizas. Debes terminar un descanso corto o largo para volver a usar Canalizar divinidad. Algunos efectos de Canalizar divinidad requieren tiradas de salvación, cuya CD es igual a la CD de salvación de tus conjuros de paladín. Consigues los siguientes efectos:
      - Emisario de Paz: Puedes usar tu Canalizar Divinidad para hacer más intensa tu presencia mediante el poder divino. Como acción adicional, puedes obtener un bonificador de +5 a las pruebas de Carisma (Persuasión) durante los próximos 10 minutos.
      - Reprender a los Violentos: Puedes utilizar tu Canalizar Divinidad para reprender a los que recurran a la violencia. Inmediatamente después de que un atacante situado a 30 pies o menos de ti inflija daño con un ataque a una criatura distinta a ti, puedes emplear tu reacción para forzar al atacante a realizar una tirada de salvación de Sabiduría. Si falla, recibirá tanto daño radiante como el daño que acaba de infligir. Si la supera, sufre la mitad del daño.`,
  },
  aura_of_the_guardian: {
    name: "Aura de Guardián",
    description:
      "Puedes proteger a otros del daño a expensas de tu propia salud. Cuando una criatura que se encuentre a 10 pies o menos de ti recibe daño, puedes usar tu reacción para recibir mágicamente ese daño, en vez de que lo sufra esa criatura. Este rasgo no transfiere ningún otro efecto que pueda acompañar al daño y, además, este daño no puede ser reducido de ninguna manera. A nivel 18 el alcance de esta aura aumenta a 30 pies.",
  },
  protective_spirit: {
    name: "Espíritu Protector",
    description:
      "Una presencia sagrada cura tus heridas en batalla. Recuperas 1d6 + la mitad de tu nivel de paladín puntos de golpe si terminas tu turno en combate con menos de la mitad de tus puntos de golpe y no estás incapacitado.",
  },
  emissary_of_redemption: {
    name: "Emisario de Redención",
    description: `Te conviertes en un avatar de la paz, 10 que te proporciona los siguientes beneficios:
      - Tienes resistencia al daño infligido por otras criaturas (sus ataques, conjuros y otros efectos).
      - Cuando una criatura te impacta con un ataque, recibe daño igual a la mitad del daño que tú recibas del ataque.
      - Si atacas a una criatura, lanzas un conjuro sobre ella o le haces daño de cualquier manera distinta a este rasgo, ninguno de sus beneficios funcionará contra esa criatura hasta que completes un descanso largo.`,
  },
};

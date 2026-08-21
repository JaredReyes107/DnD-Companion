import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const conquest_features_es: GameLocalizationCategory = {
  tenets_of_conquest: {
    name: "Principios de la Conquista",
    description: ``,
  },
  oath_spells: {
    name: "Conjuros de Juramento",
    description: `Consigues los conjuros de juramento en los niveles de paladín indicados. Una vez accedes a un conjuro de juramento, siempre lo tienes preparado. Los conjuros de juramento no cuentan conjuros que puedes preparar cada día. Si consigues un conjuro de juramento que no aparece en la lista de conjuros de paladín, para ti ese conjuro cuenta como un conjuro de paladín.`,
  },
  channel_divinity_conquest: {
    name: "Canalizar Divinidad",
    description: `Tu juramento te permite canalizar energía divina para activar efectos mágicos. Cuando uses Canalizar divinidad, tú eliges qué opción utilizas. Debes terminar un descanso corto o largo para volver a usar Canalizar divinidad. Algunos efectos de Canalizar divinidad requieren tiradas de salvación, cuya CD es igual a la CD de salvación de tus conjuros de paladín. Consigues los siguientes efectos:
    - Presencia de Conquistador: Puedes usar tu Canalizar Divinidad para proyectar una presencia terrorífica. Como acción, puedes forzar a todas las criaturas de tu elección que puedas ver y se encuentren a 30 pies o menos de ti a realizar una tirada de salvación de Sabiduría. Las que fallen quedarán asustadas de ti durante 1 minuto. Un objetivo asustado puede repetir la tirada de salvación al final de cada uno de sus turnos, librándose del efecto si tiene éxito.
    - Golpe Guiado: Puedes utilizar tu Canalizar Divinidad para atacar con una precisión sobrenatural. Cuando hagas una tirada de ataque, podrás usar tu Canalizar Divinidad para sumar +10 al resultado de dicha tirada. Puedes elegir emplear este rasgo después de ver el resultado de la tirada, pero antes de que el DM te diga si el ataque impacta o no.`,
  },
  aura_of_conquest: {
    name: "Aura de Conquista",
    description: `Emanas constantemente un aura de amenaza cuando no estás inconsciente. Esta se extiende hasta 10 pies desde ti en todas direcciones, pero no a través de cobertura completa. Si una criatura está asustada de ti, su velocidad se reduce a 0 mientras permanezca en el aura y, además, recibirá daño psíquico igual a la mitad de tu nivel de paladín si comienza su turno dentro de ella. A nivel 18 el alcance del aura aumenta a 30 pies`,
  },
  scornful_rebuke: {
    name: "Reprimenda Despreciativa",
    description: `Aquellos que osen atacarte serán castigados psíquicamente por su audacia. Cuando una criatura te impacte con un ataque, sufrirá daño psíquico igual a tu modificador de Carisma (mínimo 1) si no estás incapacitado`,
  },
  invincible_conqueror: {
    name: "Conquistador Invincible",
    description: `Tienes la capacidad de manifestar proezas marciales extraordinarias durante un tiempo limitado. Como acción, puedes convertirte mágicamente en un avatar de la conquista, obteniendo los siguientes beneficios durante 1 minuto:
      - Tienes resistencia a todo el daño.
      - Cuando empleas la acción de Atacar en tu turno, puedes realizar un ataque adicional como parte de esa acción.
      - Tus ataques con arma cuerpo a cuerpo causan críticos con resultados de 19 o 20 en el d20.
      Una vez utilizado este rasgo, deberás terminar un descanso largo para poder volver a usarlo.`,
  },
};

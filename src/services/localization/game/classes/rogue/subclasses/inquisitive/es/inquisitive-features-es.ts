import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const inquisitive_features_es: GameLocalizationCategory = {
  ear_for_deceit: {
    name: "Oído para el Engaño",
    description: `Desarrollas tu talento para detectar mentiras. Siempre que hagas una prueba de Sabiduría (Perspicacia) para determinar si una criatura miente, trata una tirada de 7 o menos en el d20 como si fuera un 8.`,
  },
  eye_for_detail: {
    name: "Ojo para el Detalle",
    description: `Realizas una prueba de Sabiduría (Percepción) para detectar a una criatura u objeto oculto o para hacer una prueba de Inteligencia (Investigación) para descubrir o descifrar una pista.`,
  },
  insightful_fighting: {
    name: "Lucha Perspicaz",
    description: `Obtienes la capacidad de conocer las tácticas de un oponente y contrarrestarlas. Como acción adicional, puedes realizar una prueba de Sabiduría (Perspicacia) contra una criatura que puedas ver y que no este incapacitada, enfrentándote a la prueba de Carisma (Engaño) del objetivo. Si tienes éxito, puedes usar tu Ataque Furtivo contra el aunque no tengas ventaja en la tirada de ataque, pero no si tienes desventaja. Este beneficio dura 1 minuto o hasta que utilices esta habilidad con éxito contra un objetivo diferente.`,
  },
  steady_eye: {
    name: "Ojo Estable",
    description: `Tienes ventaja en cualquier prueba de Sabiduría (Percepción) o Inteligencia (Investigación) si no te desplazas más de la mitad de tu velocidad en el mismo turno.`,
  },
  unerring_eye: {
    name: "Vista Infalible",
    description: `Tus sentidos son prácticamente imposibles de engañar. Como acción, puedes sentir la presencia de ilusiones, cambiaformas que no estén en su forma original y otros efectos mágicos diseñados para engañar a los sentidos que se encuentren a 30 pies o menos de ti, siempre que no estés cegado o ensordecido. Sientes que un efecto está intentando engañarte, pero no sabes lo que esconde o su verdadera naturaleza. Puedes emplear este rasgo tantas veces como tu modificador por Sabiduria (mínimo una vez) y recuperas todos los usos tras finalizar un descanso largo.`,
  },
  eye_for_weakness: {
    name: "Ojo para la Debilidad",
    description: `Aprendes a aprovechar las debilidades de una criatura estudiando cuidadosamente sus tácticas y sus movimientos. Si tu rasgo Lucha Perspicaz se aplica sobre un objetivo, tu daño de Ataque Furtivo contra este aumenta en 3d6.`,
  },
};

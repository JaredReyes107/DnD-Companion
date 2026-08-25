import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const inquisitive_actions_es: GameLocalizationCategory = {
  ear_for_deceit: {
    name: "Oído para el Engaño",
    description: `Siempre que hagas una prueba de Sabiduría (Perspicacia) para determinar si una criatura miente, trata una tirada de 7 o menos en el d20 como si fuera un 8.`,
  },
  eye_for_detail: {
    name: "Ojo para el Detalle",
    description: `Realizas una prueba de Sabiduría (Percepción) para detectar a una criatura u objeto oculto o para hacer una prueba de Inteligencia (Investigación) para descubrir o descifrar una pista.`,
  },
  insightful_fighting: {
    name: "Lucha Perspicaz",
    description: `Realizas una prueba de Sabiduría (Perspicacia) contra una criatura que puedas ver y que no este incapacitada, enfrentándote a la prueba de Carisma (Engaño) del objetivo. Si tienes éxito, puedes usar tu Ataque Furtivo contra el aunque no tengas ventaja en la tirada de ataque, pero no si tienes desventaja. Este beneficio dura 1 minuto o hasta que utilices esta habilidad con éxito contra un objetivo diferente.`,
  },
  steady_eye: {
    name: "Ojo Estable",
    description: `Gastas la mitad de tu velocidad para obtener  ventaja en cualquier prueba de Sabiduría (Percepción) o Inteligencia (Investigación) que hagas durante el mismo turno.`,
  },
  unerring_eye: {
    name: "Vista Infalible",
    description: `Sientes la presencia de ilusiones, cambiaformas que no estén en su forma original y otros efectos mágicos diseñados para engañar a los sentidos que se encuentren a 30 pies o menos de ti, siempre que no estés cegado o ensordecido. Sientes que un efecto está intentando engañarte, pero no sabes lo que esconde o su verdadera naturaleza.`,
  },
};

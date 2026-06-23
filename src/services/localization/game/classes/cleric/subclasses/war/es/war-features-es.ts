import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const war_features_es: GameLocalizationCategory = {
  war_domain_spells: {
    name: "Conjuros de Dominio",
    description: `Los conjuros de dominio siempre se consideran preparados y no se contarán dentro del número de conjuros que puedes preparar cada día.
      Si tienes un conjuro de dominio que no aparece en la lista de conjuros de clérigo, para ti ese conjuro es de clérigo.`,
  },
  bonus_proficiencies: {
    name: "Competencias Adicionales",
    description: "Ganas competencia con armas marciales y armadura pesada.",
  },
  war_priest: {
    name: "Clérigo de Guerra",
    description: `Tu dios te otorga instantes de inspiración cuando estás en medio de la batalla. Cuando usas la acción de Atacar, puedes hacer un ataque con armas como acción adicional.
      Puedes usar este rasgo un número de veces equivalente a tu modificador de Sabiduría (con un mínimo de 1). Recuperas todos los usos gastados cuando finalizas un descanso prolongado.`,
  },
  channel_divinity_guided_strike: {
    name: "Canalizar Divinidad: Impacto Guiado",
    description:
      "Puedes usar tu Canalizar Divinidad para golpear con precisión sobrenatural. Cuando realices una tirada de ataque, puedes usar tu Canalizar Divinidad para ganar un bonificador de +10 a la tirada. Haces esta elección después de ver la tirada, pero antes de que el DM diga si el ataque acierta o falla.",
  },
  channel_divinity_war_gods_blessing: {
    name: "Canalizar Divinidad: Bendición de Guerra",
    description:
      "Cuando una criatura en un rango de 30 pies de ti hace una tirada de ataque, puedes usar tu reacción para darle a esa criatura un bonificador de +10 a la tirada, usando tu Canalizar Divinidad. Haces esta elección después de ver la tirada, pero antes de que el DM diga si el ataque golpea o falla.",
  },
  divine_strike: {
    name: "Golpe Divino",
    description:
      "Ganas la habilidad de infundir de energía divina tus golpes con armas. Una vez por turno, cuando golpees a una criatura con un ataque con armas puedes hacer que el ataque cause daño adicional del mismo tipo que causa el arma al objetivo",
  },
  avatar_of_battle: {
    name: "Avatar de Batalla",
    description:
      "Ganas resistencia al daño contundente, perforante y cortante de las armas no mágicas",
  },
};

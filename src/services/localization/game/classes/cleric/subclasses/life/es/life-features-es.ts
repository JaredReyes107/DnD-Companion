import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const life_features_es: GameLocalizationCategory = {
  bonus_proficiencies: {
    name: "Competencias Adicionales",
    description: "Ganas competencia con armaduras pesadas.",
  },
  life_domain_spells: {
    name: "Conjuros de Dominio",
    description: `Los conjuros de dominio siempre se consideran preparados y no se contarán dentro del número de conjuros que puedes preparar cada día.
      Si tienes un conjuro de dominio que no aparece en la lista de conjuros de clérigo, para ti ese conjuro es de clérigo.`,
  },
  disciple_of_life: {
    name: "Discípulo de la Vida",
    description: "Tus conjuros de curación son más efectivos. Cuando usas un conjuro de nivel 1 o superior para hacer que una criatura recupere puntos de golpe, esta recupera un número de puntos de golpe adicionales igual a 2 + el nivel del conjuro.",
  },
  channel_divinity_preserve_life: {
    name: "Canalizar Divinidad: Preservar la Vida",
    description: "Puedes usar Canalizar divinidad para curar a los heridos graves. Como acción, sacas tu símbolo sagrado y evocas una energía curativa que hace recuperar un número de puntos de golpe igual a cinco veces tu nivel de clérigo. Elige a las criaturas que quieras en un radio de 30 pies y divide esos puntos de golpe entre ellas. Este rasgo no puede hacer que una criatura pase a tener más de la mitad de sus puntos de golpe máximos y no podrás utilizarlo sobre muertos vivientes ni con constructos.",
  },
  blessed_healer: {
    name: "Sanador bendecido",
    description: "Los conjuros de curación que lances sobre otros también te curan a ti. Cuando lances un conjuro de nivel 1 o superior que haga que una criatura que no eres tú recupere puntos de golpe, tú recuperas un número de puntos de golpe igual a 2 + el nivel del conjuro.",
  },
  divine_strike: {
    name: "Golpe Bendecido",
    description: "Consigues la capacidad de imbuir tus golpes de arma con energía divina. Una vez por turno, cuando impactes a una criatura con un ataque de arma, le infliges daño radiante adicionales",
  },
  supreme_healing: {
    name: "Sanación Suprema",
    description: "Cuando normalmente tirarías los dados para recuperar puntos de golpe con un conjuro, en lugar de hacer eso usas el número más alto que podrías sacar en cada dado. Por ejemplo, en lugar de hacer que una criatura recupere 2d6 puntos de golpe, haces que recupere 12.",
  },
};

import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const horizon_walker_actions_es: GameLocalizationCategory = {
  detect_portal: {
    name: "Detectar Portal",
    description: `Detectas la distancia y dirección del portal interplanar más cercano, situado a 1 milla o menos de ti. Puedes consultar la sección "Viaje Interplanar", en el capítulo 2 del Dungeon Master's Guide, para encontrar ejemplos de portales interplanares.`,
  },
  planar_warrior: {
    name: "Guerrero Interplanar",
    description: `Elige a una criatura que puedas ver y se encuentre a 30 pies o menos de ti. La próxima vez que impactes a ese objetivo en este turno con un ataque con arma, todo el daño realizado por el ataque se convierte en daño de fuerza y la criatura sufre 1d8 de daño de fuerza adicional de este ataque. Cuando llegas a nivel 11 en esta clase, el daño adicional se incrementa a 2d8.`,
  },
  ethereal_step: {
    name: "Paso Etéreo",
    description: `Lanzas el conjuro 'Excursión Etérea' sin usar un espacio de conjuro, pero solo durará hasta el final del turno actual.`,
  },
  distant_strike: {
    name: "Golpe Lejano",
    description: `Cuando utilizas la acción de Atacar, puedes teletransportarte hasta 10 pies antes de cada ataque a un espacio libre que puedas ver. Si atacas al menos a dos criaturas diferentes con esta acción, también puedes realizar un ataque adicional contra una tercera.`,
  },
  spectral_defense: {
    name: "Defensa Espectral",
    description: `Cuando sufres daño de un ataque, puedes utilizar tu reacción para concederte resistencia a todo el daño de ese ataque durante este turno.`,
  },
};

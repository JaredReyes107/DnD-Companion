import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const monster_slayer_actions_es: GameLocalizationCategory = {
  hunters_sense: {
    name: "Sentidos del Cazador",
    description: `Elige a un objetivo que puedas ver y se encuentre a 60 pies o menos de ti. Inmediatamente sabes si la criatura tiene inmunidades, resistencias o vulnerabilidades al daño y cuáles son. Si el objetivo está oculto frente a la magia de adivinación, sientes que no tiene inmunidades al daño, resistencias o vulnerabilidades.`,
  },
  slayers_prey: {
    name: "Presa del Cazador",
    description: `Como acción adicional, puedes elegir a una criatura que puedas ver y se encuentre a 60 pies o menos de ti como objetivo de este rasgo. La primera vez en cada turno que impactes a esa criatura con un ataque con arma, recibe 1d6 de daño adicional del tipo de arma. Este beneficio dura hasta que completes un descanso corto o largo o si designas a un objetivo diferente.`,
  },
  supernatural_defense: {
    name: "Defensa Sobrenatural",
    description: `Cuando el objetivo de tu rasgo 'Presa del Cazador' te obligue a realizar una tirada de salvación, o si tienes que hacer una prueba de característica para escapar del agarre de esa criatura, añade 1d6 a tu tirada.`,
  },
  magic_users_nemesis: {
    name: "Némesis de Magos",
    description: `Si ves a una criatura a 60 pies o menos de ti lanzando un conjuro o teletransportándose, puedes emplear tu reacción para intentar desbaratar su acción. El objetivo deberá tener éxito en una tirada de salvación de Sabiduría contra tu CD de salvación de conjuros o su conjuro o teletransporte fallará y se malgastará.`,
  },
  slayers_counter: {
    name: "Contraataque del Cazador",
    description: `Si el objetivo de tu rasgo 'Presa del Cazador' te obliga a realizar una tirada de salvación, puedes usar tu reacción para hacer un ataque con arma contra esa criatura. Realizas el ataque inmediatamente antes de la tirada de salvación. Si tu ataque impacta, tu tirada de salvación tiene éxito automáticamente, además de los efectos normales del ataque.`,
  },
};

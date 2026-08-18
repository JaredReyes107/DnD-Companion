import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const eldritch_knight_features_es: GameLocalizationCategory = {
  weapon_bond: {
    name: "Ligadura de Arma",
    description: `Aprendes un ritual que crea un lazo mágico entre ti y un arma. Realizas el ritual a lo largo de 1 hora, que puede transcurrir en un descanso corto. El arma debe estar a tu alcance durante todo el ritual, en cuyo final tocas el arma y forjas el lazo.
      Una vez que te hayas enlazado a un arma, no puedes ser desarmado de esa arma en concreto a menos que te incapaciten. Si estáis en el mismo plano de existencia puedes invocar ese arma con una acción adicional haciendo que se teletransporte a tus manos instantáneamente.
      Puedes tener hasta dos armas ligadas, pero solo puedes invocar una a la vez con tu acción adicional. Si intentas ligar una tercera arma, deberás romper uno de los lazos que te unía a otra de las armas.`,
  },
  war_magic: {
    name: "Magia de Batalla",
    description: `Cuando usas tu acción para lanzar un truco, puedes hacer un ataque con un arma como acción adicional.`,
  },
  eldritch_strike: {
    name: "Golpe Sobrenatural",
    description: `Aprendes cómo hacer que los golpes de tu arma disminuyan la resistencia de una criatura a tus conjuros. Cuando golpeas a una criatura con un ataque con arma, dicha criatura tiene desventaja en la siguiente tirada de salvación que realice en contra de un conjuro que lances antes del final de tu siguiente turno.`,
  },
  arcane_charge: {
    name: "Carga arcana",
    description: `Ganas la habilidad de teletransportarte con tu Acción Súbita a un espacio desocupado que esté hasta a 30 pies de distancia y que puedas ver. Puedes teletransportarte antes o después de la acción adicional.`,
  },
  improved_war_magic: {
    name: "Magia de Batalla Mejorada",
    description: `Cuando usas tu acción para lanzar un conjuro, puedes realizar un ataque con arma como acción adicional.`,
  },
};

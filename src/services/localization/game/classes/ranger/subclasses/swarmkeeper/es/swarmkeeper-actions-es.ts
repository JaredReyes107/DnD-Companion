import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const swarmkeeper_actions_es: GameLocalizationCategory = {
  gathered_swarm_attack: {
    name: "Enjambre Reunido: Atacar",
    description: `Cuando impactes a una criatura con un ataque, el objetivo del ataque recibe 1d6 de daño perforante del enjambre.`,
  },
  gathered_swarm_push: {
    name: "Enjambre Reunido: Empujar",
    description: `Cuando impactes a una criatura con un ataque, el objetivo del ataque debe tener éxito en una tirada de salvación de Fuerza contra tu CD de salvación de conjuros o `,
  },
  gathered_swarm_move: {
    name: "Enjambre Reunido: Mover",
    description: `Cuando impactes a una criatura con un ataque, el enjambre te mueve 5 pies horizontalmente en la dirección de tu elección.`,
  },
  writhing_tide: {
    name: "Marea Retorcida",
    description: `Consigues una velocidad volando de 10 pies y puedes levitar. Este efecto dura 1 minuto o hasta que quedes incapacitado.`,
  },
  swarming_dispersal: {
    name: "Dispersión del Enjambre",
    description: `Cuando recibas daño, podrás usar tu reacción para concederte resistencia a ese daño. Te desvanecerás en tu enjambre y luego te teletransportarás a un espacio sin ocupar que puedas ver a 30 pies o menos de ti, donde reaparecerás con el enjambre.`,
  },
};

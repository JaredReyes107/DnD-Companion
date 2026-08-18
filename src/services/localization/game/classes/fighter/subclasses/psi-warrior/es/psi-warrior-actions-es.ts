import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const psi_warrior_actions_es: GameLocalizationCategory = {
  psionic_recovery: {
    name: "Recuperación Psiónica",
    description: `Recuperas un dado de energía psiónica`,
  },
  protective_field: {
    name: "Campo Protector",
    description: `Cuando tú u otra criatura que puedas ver a 30 pies o menos de ti reciba daño, puedes usar tu reacción para gastar un dado de Energía Psiónica; tira el dado y reduce el daño recibido en una cantidad igual al resultado más tu modificador por Inteligencia (Mínimo de 1).`,
  },
  psionic_strike: {
    name: "Golpe Psiónico",
    description: `Una vez por turno, después de impactar a un objetivo que esté a 30 pies o menos de ti con un ataque e infligirle daño con un arma, gastas un dado de Energía Psiónica, tirarlo e infligir una cantidad de daño de fuerza al objetivo igual al resultado más tu modificador por Inteligencia.`,
  },
  telekinetic_movement: {
    name: "Movimiento Telequinético",
    description: `Eliges como objetivo a un objeto suelto Grande o más pequeño o a una criatura voluntaria que no seas tú. Si puedes ver el objetivo y está a 30 pies o menos de ti, puedes moverlo hasta 30 pies a un espacio sin ocupar que puedas ver. Como alternativa, si se trata de un objeto Diminuto, puedes moverlo hacia tu mano o desde ella. En cualquiera de los dos casos, puedes mover el objetivo horizontalmente, verticalmente o una combinación de ambos.`,
  },
  psi_powered_leap: {
    name: "Salto Psiónico",
    description: `Hasta el final de ese turno, obtienes una velocidad volando igual al doble de tu velocidad caminando.`,
  },
  telekinetic_thrust: {
    name: "Empujón Telequinético",
    description: `Cuando infliges daño a un objetivo con tu Golpe Psiónico, puedes obligarlo a hacer una tirada de salvación de Fuerza contra una CD igual a 8 + tu bonificador por competencia + tu modificador por Inteligencia. Si la falla, podrás derribarlo o moverlo horizontalmente hasta 10 pies en cualquier dirección.`,
  },
  guarded_mind: {
    name: "Mente Robusta",
    description: `Al inicio de tu turno, gastas un dado de Energía Psiónica para poner fin a todos los efectos que te causen el estado de hechizado o asustado.`,
  },
  bulwark_of_force: {
    name: "Bastión de Fuerza",
    description: `Eliges a una cantidad de criaturas (que puede incluirte a ti) que puedas ver a 30 pies o menos de ti igual a tu modificador por Inteligencia o menos (mínimo una criatura). Cada una de las criaturas elegidas queda protegida por una cobertura media durante 1 minuto o hasta que quedes incapacitado.`,
  },
  telekinetic_master_telekinesis: {
    name: "Maestro Telequinético: Telequinesis",
    description: `Lanzar el conjuro Telequinesis sin necesidad de componentes y tu aptitud mágica para el hechizo es Inteligencia.`,
  },
  telekinetic_master_attack: {
    name: "Maestro Telequinético: Atacar",
    description: `Puedes realizar un ataque con un arma como acción adicional en cada uno de tus turnos en los que te estés concentrando en el conjuro 'Telequinesis', incluido el turno en el que lo lances,.`,
  },
};

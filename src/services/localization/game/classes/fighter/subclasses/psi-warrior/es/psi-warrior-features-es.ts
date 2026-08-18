import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const psi_warrior_features_es: GameLocalizationCategory = {
  psionic_power: {
    name: "Poder Psiónico",
    description: `Albergas una fuente de energía psiónica en tu interior. Esta energía está representada por tus dados de Energía Psiónica, que son d6. Tienes una cantidad de estos dados igual al doble de tu bonificador por competencia, y sirven para alimentar los distintos poderes psiónicos que posees, que se explican debajo.
      Algunos de tus poderes gastan el dado de Energía Psiónica que usan, tal y como se especifica en la correspondiente descripción, por lo que no podrás usar un poder que te obligue a usar un dado si ya los has gastado todos. Recuperas todos los dados de Energía Psiónica tras finalizar un descanso largo. Además, como acción adicional, puedes recuperar un dado de Energía Psiónica gastado, pero no podrás volver a hacerlo hasta que finalices un descanso corto o largo.
      Cuando alcanzas determinados niveles en esta clase, el tamaño de tus dados de Energía Psiónica aumenta: en el nivel 5 (d8), en el 11 (d10) y en el 17 (d12).
      Los poderes especificados a continuación usan tus dados de Energía Psiónica:
      - Campo Protector. Cuando tú u otra criatura que puedas ver a 30 pies o menos de ti reciba daño, puedes usar tu reacción para gastar un dado de Energía Psiónica; tira el dado y reduce el daño recibido en una cantidad igual al resultado más tu modificador por Inteligencia (el daño se reduce en 1 como mínimo), ya que creas un escudo momentáneo de fuerza telequinética.
      - Golpe Psiónico. Puedes impulsar tus armas con fuerza psiónica. Una vez en cada uno de tus turnos, inmediatamente después de impactar a un objetivo que esté a 30 pies o menos de ti con un ataque e infligirle daño con un arma, puedes gastar un dado de Energía Psiónica, tirarlo e infligir una cantidad de daño de fuerza al objetivo igual al resultado más tu modificador por Inteligencia.
      - Movimiento Telequinético. Puedes mover objetos o criaturas con la mente. Como acción, eliges como objetivo a un objeto suelto Grande o más pequeño o a una criatura voluntaria que no seas tú. Si puedes ver el objetivo y está a 30 pies o menos de ti, puedes moverlo hasta 30 pies a un espacio sin ocupar que puedas ver. Como alternativa, si se trata de un objeto Diminuto, puedes moverlo hacia tu mano o desde ella. En cualquiera de los dos casos, puedes mover el objetivo horizontalmente, verticalmente o una combinación de ambos. Cuando realices esta acción, no podrás volver a hacerla hasta que finalices un descanso corto o largo, a menos que gastes un dado de Energía Psiónica para volver a realizarla.`,
  },
  telekinetic_adept: {
    name: "Adepto Telequinético",
    description: `Has dominado nuevas formas de usar tus habilidades telequinéticas, que se detalJan a continuación.
      - Salto Psiónico. Como acción adicional, puedes impulsar tu cuerpo con la mente. Hasta el final de ese turno, obtienes una velocidad volando igual al doble de tu velocidad caminando. Cuando realices esta acción adicional, no podrás volver a hacerla hasta que finalices un descanso corto o largo, a menos que gastes un dado de Energía Psiónica para volver a realizarla.
      - Empujón Telequinético. Cuando infliges daño a un objetivo con tu Golpe Psiónico, puedes obligarlo a hacer una tirada de salvación de Fuerza contra una CD igual a 8 + tu bonificador por competencia + tu modificador por Inteligencia. Si la falla, podrás derribarlo o moverlo horizontalmente hasta 10 pies en cualquier dirección.`,
  },
  guarded_mind: {
    name: "Mente Robusta",
    description:
      "La energía psiónica que fluye en ti ha reforzado tu mente. Tienes resistencia al daño psíquico. Además, si comienzas tu turno hechizado o asustado, puedes gastar un dado de Energía Psiónica y poner fin a todos los efectos que te causen dichos estados.",
  },
  bulwark_of_force: {
    name: "Bastión de Fuerza",
    description: `Puedes protegerte a ti mismo y a los demás con fuerza telequinética. Como acción adicional, puedes elegir a una cantidad de criaturas (que puede incluirte a ti) que puedas ver a 30 pies o menos de ti igual a tu modificador por Inteligencia o menos (mínimo una criatura). Cada una de las criaturas elegidas queda protegida por una cobertura media durante 1 minuto o hasta que quedes incapacitado.
      Cuando realices esta acción adicional, no podrás volver a hacerla hasta que finalices un descanso largo, a menos que gastes un dado de Energía Psiónica para volver a realizarla.`,
  },
  telekinetic_master: {
    name: "Maestro Telequinético",
    description: `Pocos pueden igualar tu capacidad de mover criaturas y objetos con la mente. Puedes lanzar el conjuro Telequinesis sin necesidad de componentes y tu aptitud mágica para el hechizo es Inteligencia. En cada uno de tus turnos en los que te estés concentrando en el conjuro, incluido el turno en el que lo lances, podrás realizar un ataque con un arma como acción adicional.
      Cuando lances este conjuro con este rasgo, no podrás volver a hacerlo hasta que finalices un descanso largo, a menos que gastes un dado de Energía Psiónica para volver a lanzarlo.`,
  },
};

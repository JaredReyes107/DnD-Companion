import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const grave_features_es: GameLocalizationCategory = {
  grave_domain_spells: {
    name: "Conjuros de Dominio",
    description: `Los conjuros de dominio siempre se consideran preparados y no se contarán dentro del número de conjuros que puedes preparar cada día.
      Si tienes un conjuro de dominio que no aparece en la lista de conjuros de clérigo, para ti ese conjuro es de clérigo.`,
  },
  circle_of_mortality: {
    name: "Círculo de Mortalidad",
    description: "Obtienes la capacidad de manipular la línea entre la vida y la muerte. Cuando fueras a lanzar uno o más dados para recuperar puntos de golpe mediante un conjuro a una criatura con 0 puntos de golpe, en vez de eso utilizas el mayor número posible para cada dado. Además, aprendes el truco piedad con los moribundos, que no cuenta dentro del número de trucos de clérigo que puedes conocer. Para ti tiene un alcance de 30 pies y puedes lanzarlo como acción adicional.",
  },
  eyes_of_the_grave: {
    name: "Ojos de la Tumba",
    description: "Obtienes la capacidad de sentir la presencia de los muertos vivientes, cuya misma existencia es un insulto al ciclo vital. Como acción, puedes expandir tu percepción para detectar de forma mágica a este tipo de criaturas. Hasta el final del próximo turno, conoces la localización de cualquier muerto viviente situado a 60 pies o menos de ti, siempre que no esté tras cobertura completa ni protegido contra la magia de adivinación. Este sentido no te dice nada sobre las capacidades o la identidad de una criatura. Puedes emplear este rasgo tantas veces como tu modificador por Sabiduría (mínimo una vez). Recuperas todos los usos tras finalizar un descanso largo.",
  },
  channel_divinity_path_to_the_grave: {
    name: "Canalizar Divinidad: Camino a la Sepultura",
    description: "Puedes usar tu Canalizar Divinidad para marcar la fuerza vital de otra criatura, que quedará condenada a la extinción. Como acción, eliges a un objetivo al que puedas ver y se encuentre a 30 pies o menos de ti, maldiciéndolo hasta el final de tu siguiente turno. La próxima vez que tú o un aliado tuyo impacte a la criatura maldita con un ataque, esta tendrá vulnerabilidad al daño de ese ataque, tras el cual finalizará la maldición.",
  },
  sentinel_at_deaths_door: {
    name: "Centinela  a las Puertas de la Muerte",
    description: "Obtienes la capacidad de impedir el avance de la muerte. Como reacción, cuando tú o una criatura que puedas ver y se encuentre a 30 pies o menos de ti sufra un crítico, puedes convertirlo en un impacto normal. Además, cualquier efecto activado como consecuencia de que el ataque sea un crítico queda cancelado. Puedes emplear este rasgo tantas veces como tu modificador por Sabiduría (mínimo una vez). Recuperas todos los usos tras finalizar un descanso largo.",
  },
  potent_spellcasting: {
    name: "Lanzamiento de Conjuros Potente",
    description: "Puedes añadir tu modificador de Sabiduría al daño que causas con cualquier truco de clérigo.",
  },
  keeper_of_souls: {
    name: "Guardián de Almas",
    description: `Puedes agarrar una hebra de vitalidad de un alma que parte y utilizarla para curar a los vivos. Cuando un enemigo que puedas ver fallezca y se encuentre a 60 pies o menos de ti, tú mismo o una criatura de tu elección situada a 60 pies o menos de ti recupera tantos puntos de golpe como dados de golpe tuviera el enemigo muerto. Solo puedes usar este rasgo si no estás incapacitado. Una vez lo utilices, no puedes volver a hacerlo hasta el comienzo de tu siguiente turno.`,
  },
};

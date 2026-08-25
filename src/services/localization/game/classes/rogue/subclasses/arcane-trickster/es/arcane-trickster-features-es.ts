import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const arcane_trickster_features_es: GameLocalizationCategory = {
  spellcasting_arcane_trickster: {
    name: "",
    description: `Ganas la habilidad de lanzar conjuros. Consulta el Capítulo 10 para ver las reglas generales del lanzamiento de hechizos y el Capítulo 11 para la lista de conjuros de mago.
      Trucos: Aprendes tres trucos: mano de mago y otros dos de tu elección de la lista de conjuros de mago. Adquieres otro nuevo truco de mago de tu elección cuando a lcanzas el nivel 10.
      Espacios de Conjuro: La tabla "lanzamiento de conjuros del Embaucador Arcano" muestra de cuántos espacios de conjuro dispones para lanzar conjuros de nivel 1 y superiores. Para lanzar uno de estos conjuros deberás invertir un espacio de al menos el nivel del conjuro. Recuperas todos los espacios utilizados tras finalizar un descanso largo.
      Conjuros conocidos de nivel 1 y superiores: Conoces tres conjuros de mago de nivel 1 a tu elección, dos de los cuales deben ser de encantamiento o ilusionismo. Todos ellos han de pertenecer a la lista de conjuros de mago. Tú eliges cuales, pero todos estos conjuros deben ser de encantamiento o ilusionismo y de un nivel para el que tengas espacios de conjuro.
        Los conjuros que aprendes al alcanzar los niveles 8, 14 y 20 pueden ser de cualquier escuela mágica. Además, cada vez que subas un nivel de esta clase podrás elegir uno de los conjuros de mago que ya conoces y reemplazarlo por otro de los que aparecen en la lista de conjuros de mago. El nuevo conjuro deberá ser de un nivel para el que tengas espacios de conjuro. Además, ha de ser de encantamiento o ilusionismo, salvo si estás reemplazando los conjuros que obtuviste a los niveles 8, 14 o 20
      Aptitud mágica. La Inteligencia es tu característica de lanzamiento de conjuros para tus conjuros de mago debido a que aprendes tus conjuros a través del dedicado estudio y la memorización. Usas tu Inteligencia cada vez que un conjuro hace referencia a tu característica de lanzamiento de conjuros. Además, usas tu modificador de Inteligencia cuando estableces la clase de dificultad (CD) para las tiradas de salvación de los conjuros de mago que lanzas y cuando realizas una tirada de ataque con uno.
        CD de la Salvación de un Conjuro = 8 + tu bonificador de competencia + tu modificador de Inteligencia
        Modificador de Ataque de un Conjuro = tu bonificador de competencia + tu modificador de Inteligencia`,
  },
  mage_hand_legerdemain: {
    name: "Prestidigitación de Mano del Mago",
    description: `Cuando lanzas mano del mago, puedes hacer invisible la mano espectral y puedes hacer las siguientes tareas adicionales con ella:
      - Puedes depositar un objeto que estés sosteniendo en un contenedor portado por otra criatura.
      - Puedes coger un objeto de un contenedor portado por otra criatura.
      - Puedes usar herramientas de ladrón a distancia para abrir cerraduras y desarmar trampas a distancia.
      Puedes realizar una de estos trucos sin ser percibido por una criatura si tienes éxito en una prueba de Destreza (Juego de Manos) enfrentada a una prueba de Sabiduría (Percepción) de la criatura.
      Además, puedes utilizar la acción adicional que te brinda Acción Astuta para controlar la mano.`,
  },
  magical_ambush: {
    name: "Emboscada Mágica",
    description: `Si estás escondido de una criatura en el momento en que lanzas un conjuro sobre ella, la criatura tiene desventaja en cualquier tirada de salvación contra el conjuro este turno.`,
  },
  versatile_trickster: {
    name: "Bribón Versátil",
    description: `Ganas la habilidad de distraer objetivos con tu mano del mago. Como una acción adicional en tu turno puedes designar una criatura que no esté a más de 5 pies de la mano espectral creada por el hechizo. Hacerlo te proporciona ventaja en las tiradas de ataque contra esa criatura hasta el final del turno.`,
  },
  spell_thief: {
    name: "Ladrón de Conjuros",
    description: `Ganas la habilidad de robar mágicamente el conocimiento para lanzar un conjuro de otro lanzador de conjuros.
      Inmediatamente después de que una criatura lance un conjuro del cual seas objetivo o que te incluya en su área de efecto, puedes usar tu reacción para forzar a la criatura a realizar una tirada de salvación con el modificador de su característica de lanzamiento de conjuros. La CD equivale a la CD de salvación de tus conjuros. Si falla la tirada de salvación, niegas el efecto del conjuro en ti y robas el conocimiento del conjuro si es al menos de nivel 1 y de un nivel que puedas lanzar (no es preciso que sea un conjuro de mago). Durante las siguientes 8 horas conoces el conjuro y puedes lanzarlo usando tus espacios de conjuro. La criatura no puede lanzar dicho conjuro hasta que las 8 horas hayan pasado.
      Una vez que utilices este rasgo, no puedes usarlo nuevamente hasta que finalices un descanso prolongado.`,
  },
};

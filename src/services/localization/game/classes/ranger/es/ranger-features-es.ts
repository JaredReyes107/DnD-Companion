import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const ranger_features_es: GameLocalizationCategory = {
  favored_enemy: {
    name: "Enemigo Predilecto",
    description: `Tienes una experiencia notable estudiando, rastreando, cazando e incluso hablando con un cierto tipo de enemigo. Elige un tipo de enemigo predilecto: aberraciones, bestias, celestiales, constructos, fatas, gigantes, infernales, limos, monstruosidades, no muertos o plantas. Como alternativa, puedes seleccionar dos razas de humanoides (como gnolls u orcos) como enemigos predilectos. Tienes ventaja en las pruebas de Sabiduría (Supervivencia) para rastrear a tus enemigos predilectos, así como en las pruebas de Inteligencia para recordar información sobre ellos.
      Cuando consigues este rasgo, también aprendes un idioma de tu elección que hablen tus enemigos predilectos, si es que hablan alguno.
      En los niveles 6 y 14, eliges un enemigo predilecto adicional, así como su idioma. Conforme vayas subiendo de nivel, tus elecciones deberían reflejar los tipos de monstruos que te has encontrado en tus aventuras.`,
  },
  natural_explorer: {
    name: "Explorador de la Naturaleza",
    description: `Estás especialmente familiarizado con un tipo de entorno natural y eres experto viajando y sobreviviendo en tales regiones. Elige un tipo de terreno predilecto: ártico, bosque, costa, desierto, montaña, pantano o pradera. Cuando hagas una prueba de Inteligencia o de Sabiduría relacionada con tu terreno predilecto, tu bonificador por competencia se multiplica por 2 si estás usando una habilidad con la que tienes competencia.
      Si viajas durante una hora o más por tu terreno predilecto, consigues los siguientes beneficios:
        - El terreno difícil no reduce la velocidad de tu grupo de viaje.
        - Tu grupo no puede perderse, salvo por medios mágicos.
        - Incluso si estás haciendo otra actividad mientras viajas (como buscar comida, navegar o rastrear), sigues estando alerta ante el peligro.
        - Si viajas solo, puedes moverte con sigilo a un ritmo normal.
        - Cuando buscas comida, encuentras el doble de la comida que encontrarías normalmente.
        - Mientras rastreas a otras criaturas, también puedes saber su número exacto, su tamaño y cuánto tiempo hace que pasaron por la zona.
      Seleccionas un terreno predilecto adicional a nivel 6 y de nuevo a nivel 10.`,
  },
  spellcasting_ranger: {
    name: "Lanzamiento de Conjuros",
    description: `Has aprendido cómo usar la esencia mágica de la naturaleza para lanzar conjuros, del mismo modo que lo hacen los druidas.
      Espacios de conjuro
        La tabla del explorador muestra cuántos espacios de conjuro tienes para lanzar tus conjuros. Para hacerlo, debes gastar un espacio del mismo nivel que el conjuro o superior. Recuperas todos los espacios de conjuro que hayas gastado después de un descanso prolongado. Por ejemplo, si conoces el conjuro de nivel 1 Amistad con los animales y tienes un espacio de nivel 1 y un espacio de nivel 2 disponibles, puedes lanzarlo usando cualquiera de los dos espacios.
      Conjuros conocidos de nivel 1 y superior
        Conoces dos conjuros de nivel 1 que elijas de la lista de conjuros de explorador.
        La columna de «Conjuros» de la tabla del explorador muestra cuándo aprendes nuevos conjuros. Los conjuros deben ser de un nivel para el que tengas espacios de conjuro. Por ejemplo, cuando llegas al nivel 5 de esta clase, puedes aprender un conjuro nuevo de nivel 1 o de nivel 2.
        Además, cuando subes de nivel en esta clase, puedes remplazarlo uno de los conjuros de explorador que conoces por otro de la lista de conjuros de explorador, que también debe ser de un nivel para el que tengas espacios de conjuro.
      Característica para lanzar conjuros
        La característica con la que lanzas tus conjuros de explorador es Sabiduría, dado que tu magia emana de tu afinidad con la naturaleza. Usas tu Sabiduría cuando un conjuro se refiere a tu característica para el lanzamiento de conjuros. Además, usa tu modificador por Sabiduría para establecer la CD de la tirada de salvación de los conjuros de explorador que lances y cuando hagas una tirada de ataque con uno.
        CD de la salvación de conjuros = 8 + tu bonificador por competencia + tu modificador por Sabiduría
        Modificador al ataque con conjuros = tu bonificador por competencia + tu modificador por Sabiduría`,
  },
  primeval_awareness: {
    name: "Conciencia Primigenia",
    description: `Puedes usar tu acción y gastar un espacio de conjuro de explorador para centrar tu percepción en la región que te rodea. Durante 1 minuto por nivel del espacio del conjuro que gastas, puedes sentir si los siguientes tipos de criaturas están presentes a menos de 1 milla de ti (o 6 millas si estás en tu terreno predilecto): aberraciones, celestiales, dragones, elementales, fatas, infernales y no muertos. Este rasgo no revela ni el número de criaturas ni dónde se encuentran.`,
  },
  ranger_archetype: {
    name: "Arquetipo de Explorador",
    description: `Eliges un arquetipo de explorador, que te otorga rasgos en el nivel 3 y de nuevo en los niveles 7, 11 y 15.`,
  },
  extra_attack: {
    name: "Ataque Adicional",
    description: `Puedes atacar dos veces en lugar de una cuando realices una acción de ataque durante tu turno.`,
  },
  lands_stride: {
    name: "Zancada de la Tierra",
    description: `Moverte por terreno difícil no mágico no te cuesta ningún movimiento adicional. También puedes pasar por plantas no mágicas sin que tu velocidad se vea reducida y sin recibir daño de ellas si tienen pinchos, espinas o un peligro similar.
      Además, tienes ventaja en tiradas de salvación contra plantas que han sido creadas o manipuladas mágicamente para impedir el movimiento, como las creadas con el conjuro Enmarañar.`,
  },
  hide_in_plain_sight: {
    name: "Esconderse a Plena Vista",
    description: `Puedes dedicar un minuto a crear un camuflaje si tienes acceso a barro fresco, tierra, plantas, hollín u otros materiales naturales. Cuando te camufles de este modo, puedes intentar esconderte pegándote contra una superficie sólida, como un árbol o un muro, que por lo menos sea tan alto y tan ancho como tú. Consigues un bonificador de +10 a las pruebas de Destreza (Sigilo) siempre y cuando permanezcas sin moverte y sin realizar acciones. Cuando te muevas o realices una acción o una reacción, debes volver a camuflarte para volver a conseguir este beneficio.`,
  },
  vanish: {
    name: "Desaparecer",
    description: `Puedes usar la acción de esconderte como acción adicional durante tu turno. Asimismo, no te pueden rastrear mediante magia, a menos que decidas dejar un rastro.`,
  },
  feral_senses: {
    name: "Sentidos Salvajes",
    description: `Consigues sentidos preternaturales que te ayudan a luchar contra criaturas que no puedes ver. Cuando atacas a una criatura que no puedes ver, esa incapacidad no impone una desventaja a tus tiradas de ataque contra dicha criatura.
      También sabes dónde se encuentra cualquier criatura invisible a menos de 30 pies de ti, siempre y cuando la criatura no se esté escondiendo de ti y tú no estés ni cegado ni ensordecido.`,
  },
  foe_slayer: {
    name: "Asesino de Enemigos",
    description: `Te vuelves un cazador sin igual de tus enemigos. Una vez por turno, puedes sumar tu modificador por Sabiduría a la tirada de ataque o a la tirada de daño que hagas contra uno de tus enemigos predilectos. Puedes usar este rasgo antes o después de hacer la tirada, pero no después de que se apliquen sus efectos.`,
  },
};

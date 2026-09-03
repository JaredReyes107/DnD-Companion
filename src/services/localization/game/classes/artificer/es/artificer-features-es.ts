import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const artificer_features_es: GameLocalizationCategory = {
  magical_tinkering: {
    name: "Arreglos Mágicos",
    description: `Has aprendido a inyectar una chispa de magia en objetos mundanos. Para usar esta característica, tienes que tener a mano herramientas de ladrón o de artesano. Después, toca un objeto no mágico Diminuto como acción y otórgale una de las siguientes propiedades mágicas a tu elección:
      - El objeto emite luz brillante en un radio de 5 pies y luz tenue 5 pies más allá.
      - Siempre que una criatura lo toque, el objeto emitirá un mensaje grabado que puede oírse a una distancia de hasta 10 pies. Pronuncias el mensaje cuando otorgas esta propiedad al objeto y la grabación no puede durar más de 6 segundos.
      - El objeto emite continuamente un olor o un sonido no verbal (viento, olas, trino, etc). El fenómeno elegido es perceptible a una distancia de hasta 10 pies.
      Aparece un efecto visual estático en una de las superficies del objeto. Este efecto puede ser una imagen, hasta 25 palabras de texto, líneas y formas, o una mezcla de estos elementos, lo que prefieras.
      La propiedad elegida tine una duración indefinida. Como acción, puedes tocar el objeto y poner fin a dicha propiedad.
      Puedes dotar de magia a varios objetos: sólo tienes que tocar un objeto cada vez que uses este rasgo, aunque cada objeto solo puede tener una propiedad a la vez. La cantidad máxima de objetos a los que puedes afectar con este rasgo es igual a tu modificador de Inteligencia (mínimo de un objeto). Si intentas superar tu máximo, la propiedad más antigua se acabará inmediatamente y luego se aplicará la nueva.`,
  },
  spellcasting_artificer: {
    name: "Lanzamiento de Conjuros",
    description: `Has estudiado el funcionamiento de la magia y cómo lanzar conjuros, canalizando la magia a través de los objetos. Para los observadores, no pareces estar lanzando conjuros de una manera convencional; parece que estás haciendo maravillas con objetos mundanos e inventos extravagantes.
      Produces tus efectos de conjuro de artífice a través de tus herramientas. Debes tener un canalizador mágico (específicamente herramientas de ladrón o algún tipo de herramienta de artesano) en mano cuando lanzas un conjuro con este rasgo de Lanzamiento de Conjuros (asumiendo que el conjuro tiene un componente "M"). Debes ser competente con la herramienta para usarla de esta manera. Consulta el capítulo 5, “Equipo”, en el Manual del Jugador para obtener descripciones de estas herramientas.
      Después de obtener el rasgo Imbuir Objeto a nivel 2, también puedes usar cualquier objeto que tenga una de tus infusiones como canalizador arcano.
      Para hacer esto escoge tantos conjuros de artífice como tu modificador de Inteligencia + la mitad de tu nivel de artífice.`,
  },
  infuse_item: {
    name: "Imbuir Objeto",
    description: `Has obtenido la capacidad inyectar ciertas infusiones mágicas en objetos mundanos para convertirlos en objetos mágicos.
      Cuando obtengas este rasgo, elige cuatro infusiones de artífice que aprender de la sección "Infusiones de artífice". Podrás elegir más infusiones cuando llegues a determinados niveles en esta clase.
      Además, cada vez que subas un nivel en esta clase, podrás sustituir una de las infusiones de artífice que ya conoces por otra nueva.
      Tras finalizar un descanso largo, puedes tocar un objeto no mágico e imbuirlo de una de tus infusiones de artífice para convertirlo en un objeto mágico. Las infusiones solo funcionan en algunos tipos de objetos, tal y como se especifica en la descripción de cada infusión. Si el objeto requiere sintonización, puedes sintonizarte con él en el momento de imbuirlo. Si decides sintonizarte con el objeto más adelante, deberás hacerlo con el proceso habitual de sintonización.
      Tu infusión permanecerá en un objeto de forma indefinida, pero, si mueres, la infusión se desvanece tras una cantidad de días igual a tu modificador por Inteligencia (mínimo de 1 día). La infusión también se desvanecerá si sustituyes el conocimiento de dicha infusión.
      Puedes imbuir más de un objeto no mágico tras un descanso largo. El número máximo de objetos aparece en la columna "Objetos imbuidos" de la tabla del artífice. Tienes que tocar cada uno de los objetos y las infusiones solo pueden estar en un objeto cada vez. Además, ningún objeto admite más de una infusión a la vez. Si intentas superar tu máxima cantidad de infusiones, la más antigua se acaba y luego se aplica la nueva.
      Si una infusión acaba en un objeto que contenga otras cosas, como una bolsa de contención, su contenido aparecerá en su espacio y alrededor de este sin sufrir daños.`,
  },
  artificer_specialist: {
    name: "Especialista Artífice",
    description: `En el nivel 3 eliges un arquetipo de artífice, que te otorga rasgos en el nivel 3 y de nuevo en los niveles 5, 9 y 15.`,
  },
  the_right_tool_for_the_job: {
    name: "La Herramienta Adecuada para la Tarea",
    description: `Has aprendido a fabricar exactamente la herramienta que necesitas: con herramientas de ladrón o de artesano a mano, puedes crear mágicamente un juego de herramientas de artesano en un espacio sin ocupar a 5 pies o menos de ti. Para esta creación, necesitarás 1 hora de trabajo ininterrumpido, que puede coincidir con un descanso corto o largo. Pese a que son producto de la magia, estas herramientas no son mágicas y se desvanecerán cuando vuelvas a utilizar este rasgo.`,
  },
  tool_expertise: {
    name: "Pericia con Herramientas",
    description: `Tu bonificador por competencia se duplica para cualquier prueba de característica que hagas utilizando tu competencia con una herramienta.`,
  },
  flash_of_genius: {
    name: "Destello de Genio",
    description: `Has obtenido la capacidad de encontrar soluciones cuando estás bajo presión. Cuando tú o una criatura que puedas ver a 30 pies o menos de ti haga una prueba de característica o una tirada de salvación, puedes emplear tu reacción para añadir tu modificador por Inteligencia a la tirada.
      Puedes usar este rasgo una cantidad de veces igual a tu modificador por Inteligencia (mínimo una vez). Recuperas todos los usos tras finalizar un descanso largo.`,
  },
  magic_item_adept: {
    name: "Especialista en Objetos Mágicos",
    description: `Te puedes sintonizar con hasta cuatro objetos mágicos a la vez. Además, si creas un objeto mágico con una rareza común o infrecuente, te llevará una cuarta parte del tiempo habitual y te costará la mitad del oro normal.`,
  },
  spellstoring_item: {
    name: "Objeto Guardaconjuros",
    description: `Ahora puedes guardar un conjuro en un objeto. Tras finalizar un descanso largo, toca un arma sencilla o marcial o un objeto que puedas usar como canalizador mágico y guarda un conjuro en él. Puedes elegir un conjuro de nivel 1 o 2 de la lista de conjuros de artífice que requiera 1 acción para lanzarlo (no necesitas tenerlo preparado).
      Mientras sostengas el objeto, una criatura podrá llevar a cabo una acción para producir el efecto del conjuro a través de él, usando tu modificador por aptitud mágica. Si el conjuro requiere concentración, la criatura tendrá que concentrarse. El conjuro permanecerá en el objeto hasta que se utilice una cantidad de veces igual al doble de tu modificador por Inteligencia (mínimo dos veces) o hasta que vuelvas a usar este rasgo para guardar un conjuro en un objeto.`,
  },
  magic_item_savant: {
    name: "Experto en Objetos Mágicos",
    description: `Tu habilidad con los objetos mágicos cada vez es mayor: Puedes sintonizarle con hasta cinco objetos mágicos a la vez. Ignoras todos los requisitos de clase, raza, conjuro y nivel para sintonizarte con un objeto mágico o utilizarlo.`,
  },
  magic_item_master: {
    name: "Maestro en Objetos Mágicos",
    description: `Puedes sintonizarte con hasta seis objetos mágicos a la vez.`,
  },
  soul_of_artifice: {
    name: "Alma de Artífice",
    description: `Has desarrollado una conexión mística con tus objetos mágicos, a los que puedes recurrir para que te protejan:
      Recibes un bonificador de +1 en todas las tiradas de salvación por cada objeto mágico con el que estés sintonizado en ese momento.
      Si tus puntos de golpe se reducen a 0, pero no mueres, puedes usar tu reacción para poner fin a una de tus infusiones de artífice y pasarás a tener 1 punto de golpe en vez de 0.`,
  },
};

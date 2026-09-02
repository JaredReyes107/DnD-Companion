import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const scribes_features_es: GameLocalizationCategory = {
  wizardly_quill: {
    name: "Pluma Mágica",
    description: `Como acción adicional, puedes crear mágicamente una pluma Diminuta en tu mano libre. Esta pluma mágica tiene las siguientes propiedades:
      - No necesita tinta. Cuando escribes con ella, genera tinta del color que elijas en la superficie de escritura.
      - Si usas la pluma para transcribir un conjuro, el tiempo que debes pasar copiándolo en tu libro de conjuros es igual a 2 minutos por nivel de conjuro.
      - Puedes borrar todo lo que escribas con la pluma si la sacudes sobre el texto como acción adicional, siempre que dicho texto esté a 5 pies o menos de ti.
      Esta pluma desaparece si creas otra o si mueres.`,
  },
  awakened_spellbook: {
    name: "Libro de Conjuros Despertado",
    description: `Gracias al uso de tintas especialmente preparadas y de encantamientos ancestrales transmitidos de generación en generación por tu orden de magos, has despertado una conciencia arcana en tu libro de conjuros. Mientras sostengas el libro, te concederá los siguientes beneficios:
      - Puedes usar el libro como canalizador mágico para tus conjuros de mago.
      - Cuando lanzas un conjuro de mago con un espacio de conjuro, puedes sustituir temporalmente su tipo de daño por otro tipo que aparezca en otro conjuro de tu libro de conjuros, lo que altera mágicamente la fórmula de dicho conjuro únicamente para este lanzamiento. Este último conjuro debe ser del mismo nivel que el espacio de conjuro gastado.
      - Cuando lanzas un conjuro de mago como ritual, puedes usar el tiempo de lanzamiento normal del conjuro en lugar de añadirle 10 minutos. Cuando uses este beneficio, no podrás volver a hacerlo hasta que finalices un descanso largo.
      Si es necesario, puedes sustituir el libro durante un descanso corto usando tu Pluma Mágica para escribir sellos arcanos en un libro en blanco o un libro de conjuros mágico con el que estés sintonizado. Al final del descanso, la consciencia de tu libro de conjuros se invoca en el nuevo libro y lo transforma en tu nuevo libro de conjuros, en el que también introduce todos sus conjuros. Si el libro anterior aún existe en algún lugar, todos los conjuros se desvanecen de sus páginas.`,
  },
  manifest_mind: {
    name: "Manifestar Mente",
    description: `Puedes conjurar la mente de tu Libro de Conjuros Despertado. Como acción adicional, mientras tengas el libro contigo, puedes hacer que la mente se manifieste como un objeto espectral Diminuto, que levitará sobre un espacio sin ocupar de tu elección a 60 pies o menos de ti. La mente espectral es intangible y no ocupa su espacio, y proyecta una luz tenue en un radio de 10 pies. Adopta el aspecto de un tomo fantasmal, una cascada de texto o un erudito del pasado (a tu elección).
      - Mientras está manifestada, la mente espectral puede oír y ver, y tiene visión en la oscuridad con un alcance de 60 pies. La mente puede compartir contigo telepáticamente lo que ve o escucha (no requiere acción).
      - Siempre que lances un conjuro de mago en tu turno, puedes hacerlo como si estuvieses en el espacio de la mente espectral en vez de en el tuyo, usando sus sentidos. Puedes hacerlo una cantidad de veces al dia igual a tu bonificador por competencia y recuperas todos los usos tras finalizar un descanso largo.
      - Como acción adicional, puedes hacer que la mente espectral levite hasta 30 pies hasta un espacio sin ocupar que tú o ella podáis ver. Puede atravesar criaturas, pero no objetos.
      - La mente espectral deja de manifestarse si está en algún momento a más de 300 pies de distancia de ti, si alguien lanza Disipar magia sobre ella, si el Libro de Conjuros Despertado es destruido, si mueres o si la descartas como acción adicional.
      Una vez que conjures la mente, no podrás volver a hacerlo hasta que finalices un descanso largo, a menos que gastes un espacio de conjuro de cualquier nivel para conjurarla otra vez.`,
  },
  master_scrivener: {
    name: "Maestro Escribiente",
    description: `Tras finalizar un descanso largo, puedes crear un pergamino mágico tocando con tu Pluma Mágica un trozo de papel o pergamino en blanco y haciendo que un conjuro de tu Libro de Conjuros Despertado se copie en ese pergamino. El libro de conjuros debe estar a 5 pies o menos de ti cuando crees el pergamino.
      - El conjuro elegido debe ser de nivel 1 o 2 y tener un tiempo de lanzamiento de 1 acción. Una vez en el pergamino, el poder del conjuro aumenta y cuenta como si fuera de 1 nivel superior al normal. Como acción, puedes lanzar el conjuro desde el pergamino leyéndolo. El pergamino es ininteligible para los demás, y el conjuro se desvanece del pergamino cuando lo lanzas o tras finalizar tu siguiente descanso largo.
      - Además, se te da muy bien crear pergaminos de conjuro, que se describen en el capítulo de tesoros de la Dungeon Master's Guide. El oro y el tiempo necesarios para crear ese tipo de pergaminos se reducen a la mitad si usas tu Pluma Mágica.`,
  },
  one_with_the_word: {
    name: "Comunión con la Palabra",
    description: `Tu conexión con tu Libro de Conjuros Despertado se ha hecho tan profunda que tu alma se ha entrelazado con él. Mientras lleves el libro contigo, tendrás ventaja en todas las pruebas de Inteligencia (Conocimiento Arcano), ya que el libro de conjuros te ayuda a recordar el saber mágico.
      Además, si recibes daño mientras la mente de tu libro de conjuros está manifestada, puedes impedir todo ese daño usando tu reacción para descartar la mente espectral, usando su magia para salvarte. Luego tira 3d6. El libro de conjuros perderá temporalmente los conjuros de tu elección que tengan un nivel de conjuro combinado igual al resultado o superior. Por ejemplo, si el resultado es 9, se desvanecerán del libro una cantidad de conjuros que sumen un nivel combinado de al menos 9, lo que podría significar un conjuro de nivel 9, tres de nivel 3 o cualquier otra combinación. Si no hay suficientes conjuros en el libro para cubrir este coste, tus puntos de golpe se reducen a 0.
      Hasta que finalices 1d6 descansos largos, serás incapaz de lanzar los hechizos perdidos, aunque los encuentres en un pergamino o en otro libro de conjuros. Tras finalizar la cantidad de descansos necesaria, los conjuros reaparecerán en el libro de conjuros.
      Cuando uses esta reacción, no podrás volver a hacerlo hasta que finalices un descanso largo.`,
  },
};

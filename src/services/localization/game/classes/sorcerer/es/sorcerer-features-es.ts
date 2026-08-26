import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const sorcerer_features_es: GameLocalizationCategory = {
  spellcasting_sorcerer: {
    name: "Lanzamiento de Conjuros",
    description: `Un evento de tu pasado, o la vida de un padre o ancestro, dejó una marca indeleble en ti que te infundió magia arcana. Esta fuente de magia, sea cual sea su origen, alimenta tus conjuros.
      Trucos:
        En el nivel 1, conoces cuatro trucos que elijas de la lista de conjuros de hechicero. Aprendes más trucos de hechicero de tu elección en niveles superiores, como se indica en la columna «Trucos conocidos» en la tabla del hechicero.
      Espacios de conjuro:
        La tabla del hechicero muestra cuántos espacios de conjuro tienes para lanzar tus conjuros. Para hacerlo, debes gastar un espacio del mismo nivel que el del conjuro o superior. Recuperas todos los espacios que hayas gastado cuando termines un descanso prolongado. Por ejemplo, si conoces el conjuro de nivel 1 Manos ardientes y tienes un espacio de conjuro de nivel 1 disponible y otro de nivel 2, puedes lanzarlo usando cualquiera de los dos espacios.
      Conjuros conocidos de nivel 1 y superior:
        Conoces dos conjuros de nivel 1 que elijas de la lista de conjuros de hechicero
        La columna «Conjuros» de la tabla del hechicero muestra cuándo aprendes nuevos conjuros. Los conjuros deben ser de un nivel para el que tengas espacios de conjuro. Por ejemplo, cuando llegas al nivel 3 de esta clase, puedes aprender un conjuro nuevo de nivel 1 o 2.
        De manera adicional, cuando subes de nivel en esta clase, puedes remplazar uno de tus conjuros de hechicero por otro de la lista de conjuros de hechicero, el cual también debe ser de un nivel para el que tengas espacios de conjuro.
      Característica para lanzar conjuros:
        La característica con la que lanzas tus conjuros de hechicero es Carisma, dado que el poder de tu magia surge de tu capacidad para proyectar tu voluntad. Usas Carisma cuando un conjuro se refiera a tu característica para lanzar conjuros. Además, usas tu modificador por Carisma para establecer la CD de la tirada de salvación de los conjuros de hechicero que lances y cuando hagas una tirada de ataque con uno.
          CD de la salvación de conjuros = 8 + tu bonificador por competencia + tu modificador por Carisma
          Modificador al ataque con conjuros = tu bonificador por competencia + tu modificador por Carisma
      Foco para lanzar conjuros
        Puedes utilizar un foco arcano como foco para lanzar tus conjuros de hechicero.`,
  },
  sorcerous_origin: {
    name: "Origen Sortílego",
    description: `Cada hechicero afirma que su magia innata tiene diferentes orígenes. Elige un origen sortílego que describa la fuente de tu poder mágico innato. Tu elección te otorga rasgos en el nivel 1 y de nuevo en los niveles 6, 14 y 18.`,
  },
  font_of_magic: {
    name: "Fuente de Magia",
    description: `Accedes a una profunda fuente de magia dentro de ti. Esta fuente se representa mediante puntos de hechicería, los cuales te permiten crear varios efectos mágicos.
      Puntos de Hechicería: Obtienes un número de puntos de hechicería igual a tu nivel de hechicero. En ningún caso puedes tener más puntos de hechicería de los que se indican para tu nivel. Recuperas todos los puntos de hechicería gastados cuando terminas un descanso prolongado.
      Lanzamiento Flexible: Puedes usar puntos de hechicería para recuperar puntos de conjuro y viceversa, como se describe a continuación.
        - Crear espacios de conjuro: En tu turno, como acción adicional, puedes transformar los puntos de hechicería que no hayas gastado en un espacio de conjuro. La siguiente lista muestra el coste en puntos de hechicería en función del nivel de espacio de conjuro:
          - Nivel de espacio 1: coste 2 puntos de hechicería
          - Nivel de espacio 2: coste 3 puntos de hechicería
          - Nivel de espacio 3: coste 5 puntos de hechicería
          - Nivel de espacio 4: coste 6 puntos de hechicería
          - Nivel de espacio 5: coste 7 puntos de hechicería
          No puedes crear espacios de conjuro de nivel superior a 5.
        - Recuperar puntos de hechicería: En tu turno, como acción adicional, puedes gastar un espacio de conjuro y conseguir tantos puntos de hechicería como el nivel del espacio.`,
  },
  metamagic: {
    name: "Metamagia",
    description: `Consigues la capacidad de moldear tus conjuros para que se ajusten a tus necesidades. Consigues dos opciones de Metamagia de tu elección. Consigues otra más en el nivel 10 y en el nivel 17. Solo puedes usar la opción de Metamagia en un conjuro cuando lo lances, a menos que se indique lo contrario.`,
  },
  sorcerous_restoration: {
    name: "Restablecimiento Sortílego",
    description: `Cuando termines un descanso breve, recuperas 4 puntos de sortilegio que hayas gastado.`,
  },
};

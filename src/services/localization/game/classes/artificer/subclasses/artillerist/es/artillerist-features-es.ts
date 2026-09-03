import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const artillerist_features_es: GameLocalizationCategory = {
  tool_proficiency_artillerist: {
    name: "Competencia con Herramientas",
    description:
      "Obtienes competencia con las herramientas de tallista. Si ya tienes esta competencia, obtienes competencia con otro tipo de herramientas de artesano de tu elección.",
  },
  artillerist_spells: {
    name: "Conjuros de Artillero",
    description:
      "Siempre tienes preparados ciertos conjuros después de alcanzar niveles concretos en esta clase, como se muestra en la tabla de Conjuros de Artillero. Estos conjuros cuentan como conjuros de artificiero para ti, pero no cuentan para el número de conjuros de artificiero que preparas.",
  },
  eldritch_cannon: {
    name: "Cañón Arcano",
    description:
      "Aprendes a crear un cañón mágico. Usando herramientas de tallista o de herrero, puedes emplear una acción para crear mágicamente un cañón arcano Pequeño o Diminuto en un espacio desocupado sobre una superficie horizontal a 1,5 metros de ti. Un cañón arcano Pequeño ocupa su espacio, y uno Diminuto puede sostenerse con una mano. Una vez que creas un cañón, no puedes volver a hacerlo hasta que finalices un descanso largo o gastes un espacio de conjuro de nivel 1 o superior. Solo puedes tener un cañón a la vez y no puedes crear uno mientras tu cañón esté presente. El cañón es un objeto mágico. Independientemente de su tamaño, el cañón tiene una Clase de Armadura de 18 y una cantidad de puntos de golpe igual a cinco veces tu nivel de artificiero. Es inmune al daño de veneno y al daño psíquico, y a todas las condiciones. Si se ve obligado a realizar una prueba de característica o una tirada de salvación, trata todas sus puntuaciones de característica como 10 (+0). Si se lanza el conjuro reparar sobre él, recupera 2d6 puntos de golpe. Desaparece si se reduce a 0 puntos de golpe o después de 1 hora. Puedes despedirlo antes como una acción. Cuando creas el cañón, determinas su aspecto y si tiene patas. También decides qué tipo es, eligiendo entre las opciones de la tabla de Cañones Arcanoes. En cada uno de tus turnos, puedes usar una acción adicional para hacer que el cañón se active si estás a 18 metros de él. Como parte de la misma acción adicional, puedes indicarle al cañón que camine o trepe hasta 4,5 metros hacia un espacio desocupado, siempre que tenga patas.",
  },
  arcane_firearm: {
    name: "Arma de Fuego Arcana",
    description:
      "Sabes cómo convertir una varita, bastón o vara en un arma de fuego arcana, un conducto para tus conjuros destructivos. Al finalizar un descanso largo, puedes usar herramientas de tallista para tallar símbolos especiales en una varita, bastón o vara y así convertirla en tu arma de fuego arcana. Los símbolos desaparecen del objeto si posteriormente los tallas en un objeto distinto. Por lo demás, los símbolos duran indefinidamente. Puedes usar tu arma de fuego arcana como foco de lanzamiento de conjuros para tus conjuros de artificiero. Cuando lanzas un conjuro de artificiero a través del arma de fuego, tira 1d8, y obtienes un bonificador a una de las tiradas de daño del conjuro igual al número obtenido.",
  },
  explosive_cannon: {
    name: "Cañón Explosivo",
    description:
      "Cada cañón arcano que creas es más destructivo: Las tiradas de daño del cañón aumentan todas en 1d8. Como una acción, puedes ordenar al cañón que detone si estás a 18 metros de él. Al hacerlo, el cañón se destruye y obliga a cada criatura a 6 metros de él a realizar una tirada de salvación de Destreza contra tu CD de salvación de conjuros, recibiendo 3d8 de daño de fuerza si falla o la mitad de ese daño si tiene éxito.",
  },
  fortified_position: {
    name: "Posición Fortificada",
    description:
      "Eres un maestro en formar emplazamientos bien defendidos usando Cañón Arcano: Tú y tus aliados tenéis cobertura parcial mientras estéis a 3 metros de un cañón que hayas creado con Cañón Arcano, gracias a un campo reluciente de protección mágica que el cañón emite. Ahora puedes tener dos cañones al mismo tiempo. Puedes crear dos con la misma acción (pero no con el mismo espacio de conjuro), y puedes activarlos ambos con la misma acción adicional. Tú determinas si los cañones son idénticos entre sí o diferentes. No puedes crear un tercer cañón mientras tengas dos.",
  },
};

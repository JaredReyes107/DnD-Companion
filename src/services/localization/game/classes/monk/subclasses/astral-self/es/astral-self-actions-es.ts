import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const astral_self_actions_es: GameLocalizationCategory = {
  arms_of_the_astral_self: {
    name: "Brazos del Yo Astral",
    description: `Usas 1 punto de ki. Cada criatura de tu elección que puedas ver a 10 pies o menos de ti deberá tener éxito en una tirada de salvación de Destreza o sufrirá daño de fuerza igual al resultado de dos tiradas de tu dado de Artes Marciales. Entonces, invocas los brazos de tu yo astral y ganas los siguientes beneficios:
        - Puedes usar tu modificador por Sabiduría en lugar de tu modificador por Fuerza cuando hagas pruebas de Fuerza y tiradas de salvación de Fuerza.
        - Puedes usar los brazos espectrales para hacer ataques sin armas. Cuando haces un ataque sin armas en tu turno con los brazos espectrales tienen 5 pies de alcance adicional.
        - Los ataques sin armas que haces con los brazos espectrales pueden usar tu modificador por Sabiduría en lugar de tu modificador por Fuerza o Destreza en las tiradas de ataque y de daño e infligen daño de fuerza.
        Este estado termina después de 10 minutos, si quedas incapacitado o si mueres.`,
  },
  astral_visage: {
    name: "Rostro del Yo Astral",
    description: `Gastando 1 punto de ki o como parte de la acción adicional que haces para activar los Brazos del Yo Astral invocas el Rostro del Yo Astral, ganando los siguientes beneficios:
    - Palabra del Espíritu: Cuando hables, podrás dirigir tus palabras a una criatura de tu elección que puedas ver a 60 pies o menos de ti, de modo que solo ella podrá oírte. Como alternativa, puedes amplificar tu voz para que todas las criaturas a 600 pies o menos de ti puedan escucharte.
    - Sabiduría del Espíritu: Tienes ventaja en las pruebas de Sabiduría (Perspicacia) y Carisma (Intimidación).
    - Visión Astral: Puedes ver en la oscuridad, tanto mágica como no mágica, hasta una distancia de 120 pies.
    Este estado termina después de 10 minutos, si quedas incapacitado o si mueres.`,
  },
  deflect_energy: {
    name: "Desviar Energía",
    description: ` Cuando recibas daño de ácido, frío, fuego, fuerza, relámpago o trueno mientras tus Brazos y Rostro del Yo Astral estén activos, puedes usar tu reacción para desviarlo. Si lo haces, el daño que recibes se reduce en 1d10 + tu modificador por Sabiduría (reducción mínima de 1).`,
  },
  awakened_astral_self: {
    name: "Despertar del Yo Astral",
    description: `Usas 5 puntos de ki para invocar los brazos, el rostro y el cuerpo del yo astral, obteniendo los siguientes beneficios:
    - Armadura del Espíritu: Recibes un bonificador de +2 a la Clase de Armadura.
    - Bombardeo Astral: Siempre que uses el rasgo Ataque Adicional para atacar dos veces, podrás atacar tres veces si haces todos los ataques con los brazos astrales.
    Este estado termina después de 10 minutos, si quedas incapacitado o si mueres.`,
  },
};

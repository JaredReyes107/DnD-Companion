import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const rune_knight_features_es: GameLocalizationCategory = {
  bonus_proficiencies_rune_knight: {
    name: "Competencias Adicionales",
    description:
      "Obtienes competencia con herramientas de herrero y aprendes a hablar, leer y escribir en gigante.",
  },
  rune_carver: {
    name: "Tallador de Runas",
    description: `Puedes usar runas mágicas para mejorar tu equipo. Aprendes dos runas de tu elección de entre las descritas más adelante; además, cada vez que subas un nivel en esta clase, podrás sustituir una runa que ya conoces por otra distinta de este rasgo. Aprendes runas adicionales cuando alcanzas determinados niveles de esta clase.
      Tras finalizar un descanso largo, puedes tocar un número de objetos igual a la cantidad de runas que conoces y grabar una runa diferente en cada uno de ellos. El objeto debe ser un arma, una armadura, un escudo, una joya o cualquier otra cosa que puedas llevar puesta o sostener en la mano. La runa estará activa en el objeto hasta que finalices un descanso largo y ningún objeto puede tener más de una runa a la vez.
      Si una runa tiene un requisito de nivel, debes tener al menos dicho nivel en esta clase para aprenderla. Si una runa obliga a hacer una tirada de salvación, tu CD de salvación de magia rúnica es igual a 8 +tu bonificador por competencia + tu modificador por Constitución.`,
  },
  giants_might: {
    name: "Fuerza de los Gigantes",
    description: `Has aprendido a imbuirte de la fuerza de los gigantes. Como acción adicional, obtienes mágicamente los siguientes beneficios, que duran 1 minuto:
      Si tu tamaño es menor que Grande, te vuelves Grande, y también todo lo que lleves puesto. Si no tienes espacio para hacerte Grande, tu tamaño no cambia.
      Tienes ventaja en las pruebas de Fuerza y en las tiradas de salvación de Fuerza.
      Una vez en cada uno de tus turnos, uno de tus ataques con arma o un ataque sin armas puede infligir 1d6 de daño adicional a un objetivo si impacta.
      Puedes usar este rasgo una cantidad de veces igual a tu bonificador por competencia y recuperas todos los usos tras finalizar un descanso largo.`,
  },
  runic_shield: {
    name: "Escudo Rúnico",
    description: `Aprendes a invocar tu magia rúnica para proteger a tus aliados. Si una tirada de ataque impacta contra otra criatura que puedas ver a 60 pies o menos de ti, puedes usar tu reacción para obligar al atacante a volver a tirar un d20 y usar el nuevo resultado.
      Puedes usar este rasgo una cantidad de veces igual a tu bonificador por competencia y recuperas todos los usos tras finalizar un descanso largo.`,
  },
  great_stature: {
    name: "Estatura Imponente",
    description:
      "La magia de tus runas te altera permanentemente. Cuando obtengas este rasgo, tira 3d4. Creces un número de pulgadas igual al resultado obtenido. Además, el daño adicional que infliges con tu rasgo Fuerza de los Gigantes aumentará a 1d8.",
  },
  master_of_runes: {
    name: "Maestro Rúnico",
    description:
      "Puedes invocar dos veces en lugar de una las runas que conoces del rasgo Tallador de Runas y recuperas todos los usos tras finalizar un descanso corto o largo.",
  },
  runic_juggernaut: {
    name: "Coloso Rúnico",
    description:
      "Aprendes a amplificar tu transformación rúnica. Como resultado, el daño adicional que infliges con el rasgo Fuerza de los Gigantes aumentará a 1d10. Además, cuando usas este rasgo, tu tamaño puede aumentar a Enorme y, mientras tengas ese tamaño, tu alcance aumentará en 5 pies.",
  },
};

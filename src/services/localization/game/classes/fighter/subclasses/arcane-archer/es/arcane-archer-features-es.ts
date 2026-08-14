import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const arcane_archer_features_es: GameLocalizationCategory = {
  arcane_archer_lore: {
    name: "Conocimiento de Arquero Arcano",
    description:
      "Puedes conocer teoría mágica o secretos de la naturaleza, algo normal para los practicantes de esta disciplina marcial élfica. Elige una habilidad entre Conocimiento Arcano o Naturaleza, con la que obtienes competencia, y aprendes un truco, a elegir entre prestidigitación o saber druídico.",
  },
  arcane_shot: {
    name: "Disparo Arcano",
    description: `Consigues desatar efectos mágicos con algunos de tus disparos. Cuando obtienes este rasgo, aprendes dos opciones de Disparo Arcano a tu elección. Una vez por turno, cuando dispares una flecha desde un arco corto o largo como parte de una acción de Ataque, puedes aplicar una de tus opciones de Disparo Arcano a ese proyectil. Decides usar la opción cuando la flecha impacta a una criatura, a menos que la opción no implique tirada de ataque alguna. Posees dos usos de esta habilidad, los cuales recuperas cuando completas un descanso corto o largo. Ganas una opción de Disparo Arcano a tu elección cuando alcanzas ciertos niveles en esta clase: 7, 10, 15 y 18. Todas las opciones mejoran cuando llegas a ser un guerrero de nivel 18. Si una de las opciones requiere una tirada de salvación, la de tu Disparo Arcano es igual a 8 + tu bonificador por competencia + tu modificador por Inteligencia.`,
  },
  curving_shot: {
    name: "Disparo Curvo",
    description:
      "Aprendes a dirigir un proyectil errante hacia un nuevo objetivo. Cuando realizas una tirada de ataque con una flecha mágica y fallas, puedes usar una acción adicional para volver a hacer la tirada de ataque contra un objetivo distinto situado a 60 pies o menos del original.",
  },
  magic_arrow: {
    name: "Flecha Mágica",
    description:
      "Eres capaz de infundir magia en tus proyectiles. Cuando disparas una flecha no mágica desde un arco corto o largo, puedes convertirla en mágica en lo que superar resistencias e inmunidades a ataques y daño no mágico se refiere. La magia se desvanece del proyectil inmediatamente después de impactar o fallar a su objetivo.",
  },
  everready_shot: {
    name: "Disparo Siempre Listo",
    description:
      "Tu arquería mágica está disponible en cuanto empieza el combate. Si al realizar una tirada de iniciativa no te quedan usos de Disparo Arcano, recuperas uno.",
  },
};

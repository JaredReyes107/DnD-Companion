import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const drunken_master_features_es: GameLocalizationCategory = {
  bonus_proficiencies: {
    name: "Competencias Adicionales",
    description:
      "Ganas competencia con la habilidad Interpretación, si no la tenias ya. Tu arte marcial mezcla entrenamiento de combate con la precisión de un bailarín y las payasadas de un bufón. También obtienes competencia con suministros de cervecero, si no la tenías ya.",
  },
  drunken_technique: {
    name: "Técnica Ebria",
    description:
      "Aprendes a girarte y retorcerte rápidamente durante tu Rafaga de Golpes. Siempre que uses Ráfaga de Golpes, recibes los beneficios de la acción de Destrabarse y, además, tu velocidad caminando se incrementa en 10 pies hasta el final del turno actual.",
  },
  tipsy_sway: {
    name: "Bamboleo Achispado",
    description: `Puedes moverte de formas súbitas y bamboleantes. Obtienes los beneficios siguientes:
     - Ponerse en pie de un salto: Cuando te encuentras derribado, puedes ponerte de pie utilizando 5 pies de movimiento, en vez de la mitad de tu velocidad. 
     - Redirigir ataque: Cuando una criatura falle su tirada de ataque cuerpo a cuerpo contra ti, puedes gastar un punto de ki como reacción para que ese ataque impacte a un objetivo de tu elección, distinto al atacante, que puedas ver y se encuentre a 5 pies o menos de ti.`,
  },
  drunkards_luck: {
    name: "Suerte del Beodo",
    description:
      "Parece que siempre tienes suerte en el momento justo. Cuando haces una prueba de característica, una tirada de ataque o una tirada de salvación y sufres desventaja en la tirada, puedes gastar 2 puntos de ki para cancelar esa desventaja.",
  },
  intoxicated_frenzy: {
    name: "Furia Embriagada",
    description:
      "Eres capaz de realizar un número abrumador de ataques sobre un grupo de enemigos. Cuando utilizas tu Ráfaga de Golpes, puedes hacer hasta tres ataques adicionales con ella (hasta un total de cinco ataques de Ráfaga de Golpes), siempre y cuando cada ataque de la Ráfaga de Golpes tenga como objetivo a una criatura diferente este turno.",
  },
};

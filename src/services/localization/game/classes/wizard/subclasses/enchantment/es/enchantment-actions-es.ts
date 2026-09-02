import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const enchantment_actions_es: GameLocalizationCategory = {
  hypnotic_gaze_initiate: {
    name: "Lanzar Mirada Hipnótica",
    description: `Un objetivo de tu elección a 5 pies de ti o menos debe superar una tirada de salvación de Sabiduría contra tu CD de conjuros de mago o ser encantado hasta el final de tu siguiente turno, hasta que reciba daño, hasta que te alejes a más de 5 pies de la criatura o si el objetivo no te puede ver o escuchar. Mientras esté encantado, la velocidad del objetivo es 0, está incapacitado y visiblemente destraído.
      Una vez que el efecto termine o si la criatura tiene éxito en la tirada de salvación inicial, no puedes usar esta acción contra esa criatura de nuevo hasta que termines un descanso largo.`,
  },
  hypnotic_gaze_mantain: {
    name: "Mantener Mirada Hipnótica",
    description: `Extiendes la duración del efecto de tu 'Mirada Hipnótica' afectando a una criatura hasta el final de tu siguiente turno.`,
  },
  instinctive_charm: {
    name: "Encanto Instintivo",
    description: `Cuando una criatura que puedas ver a 30 pies de ti y que no sea inmune a ser encantado te ataque, puedes usar tu reacción para forzarlo a hacer una tirada de salvación de Sabiduría contra tu CD de conjuros de mago, antes de saber el resultado de la tirada de ataque.
      En un fracaso, el atacante debe atacar a la criatura más cercana a ella en su lugar que no seas tú ni ella misma. Si hay múltiples objetivos válidos, el atacante decide.
      En un éxito, no puedes usar esta acción en el mismo atacante hasta terminar un descanso largo.`,
  },
  split_enchantment: {
    name: "Encantamiento Dividido",
    description: `Cuando lanzas un conjuro de encantamiento de nivel 1 o mayor que tiene como objetivo una criatura, puedes elegir una segunda criatura como objetivo del hechizo.`,
  },
  alter_memories_forget: {
    name: "Alterar Recuerdos: Olvidar",
    description: `Cuando lanzas un conjuro de encantamiento para encantar una o más criaturas, puedes hacer que no sea consciente de que está siendo encantada.`,
  },
  alter_memories_erase: {
    name: "Alterar Recuerdos: Borrar",
    description: `Cuando un conjuro de encantamiento tuyo expira, puedes forzar a uno de los objetivos a realizar una tirada de salvación de Inteligencia contra tu CD de salvación de conjuros de mago. Si falla, haces que olvide una porción del tiempo que pasó encantado hasta un máximo de horas igual a 1 + tu modificador de Carisma.`,
  },
};

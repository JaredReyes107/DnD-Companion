import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const wildfire_actions_es: GameLocalizationCategory = {
  summon_wildfire_spirit: {
    name: "Invocar Espíritu del Fuego Salvaje",
    description: `Invocas a tu Espíritu del Fuego Salvaje (VD 0) en lugar de transformarte en bestia. El espíritu aparece en un espacio sin ocupar de tu elección que puedas ver a 30 pies o menos de ti. Cuando aparezca el espíritu, cada criatura que esté a 10 pies o menos de él (excepto tú) deberá tener éxito en una tirada de salvación de Destreza contra tu CD de salvación de conjuros o sufrirá 2d6 de daño de fuego.
      El espíritu es amistoso contigo y tus compañeros, y obedece tus órdenes. Consulta las estadísticas de esta criatura en el perfil del espíritu del fuego salvaje. En algunos casos, usará tu bonificador por competencia (BC).
      En combate, el espíritu comparte tu orden de iniciativa, pero su turno va justo después del tuyo.
      El espíritu se manifiesta durante 1 hora, hasta que sus puntos de golpe lleguen a 0, hasta que uses este rasgo para volver a invocarlo o hasta que mueras.`,
  },
  command_wildfire_spirit: {
    name: "Comandar Espíritu del Fuego Salvaje",
    description:
      "Ordenas al espíritu tomar una acción otra que Esquivar. Esa acción puede ser una de su perfil u otra. Si estás incapacitado, el espíritu puede realizar cualquier acción que elija, no solo la de Esquivar.",
  },
  cauterizing_flames: {
    name: "Llamas Cauterizadoras",
    description:
      "Cuando una criatura Pequeña o mayor muera a 30 pies o menos de ti o de tu espíritu del fuego salvaje, aparecerá una llama espectral inofensiva en el espacio de la criatura muerta y arderá allí durante 1 minuto. Cuando una criatura que puedas ver entre en ese espacio, podrás usar tu reacción para extinguir la llama espectral y curar a la criatura o infligirle daño de fuego. La curación o el daño es igual a 2d10 + tu modificador por Sabiduría.",
  },
  blazing_revival: {
    name: "Renacer Ardiente",
    description:
      "Si el espíritu está a 120 pies o menos de ti y tus puntos de golpe se reducen a 0, por lo que caes inconsciente, podrás hacer que el espíritu se quede con 0 puntos de golpe. En ese caso, recuperarás inmediatamente la mitad de tus puntos de golpe y te pondrás en pie.",
  },
};

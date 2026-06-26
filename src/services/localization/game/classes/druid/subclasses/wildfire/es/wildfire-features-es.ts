import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const wildfire_features_es: GameLocalizationCategory = {
  circle_spells_wildfire: {
    name: "Conjuros de Círculo",
    description: "Has formado un vínculo con un espíritu del fuego salvaje, un ser primordial de creación y destrucción. Tu vínculo con este espíritu te permite acceder a conjuros adicionales cuando alcanzas determinados niveles en esta clase. Una vez obtenidos, estos conjuros siempre se considerarán preparados y no contarán para el total de conjuros que puedes preparar cada día. Aunque recibas un conjuro que no aparezca en la lista de conjuros de druida, para ti sí que se considerará un conjuro de druida.",
  },
  summon_wildfire_spirit: {
    name: "Invocar Espíritu del Fuego Salvaje",
    description: `Puedes invocar al espíritu primordial vinculado a tu alma. Como acción, puedes gastar un uso de tu rasgo Forma Salvaje para invocar a tu Espíritu del Fuego Salvaje (VD 0) en lugar de transformarte en bestia.
      El espíritu aparece en un espacio sin ocupar de tu elección que puedas ver a 30 pies o menos de ti. Cuando aparezca el espíritu, cada criatura que esté a 10 pies o menos de él (excepto tú) deberá tener éxito en una tirada de salvación de Destreza contra tu CD de salvación de conjuros o sufrirá 2d6 de daño de fuego.
      El espíritu es amistoso contigo y tus compañeros, y obedece tus órdenes. Consulta las estadísticas de esta criatura en el perfil del espíritu del fuego salvaje. En algunos casos, usará tu bonificador por competencia (BC). Tú decides el aspecto del espíritu. Algunos adoptan la forma de una figura humanoide hecha de ramas nudosas cubiertas de llamas, mientras que otros se asemejan a bestias rodeados de fuego.
      En combate, el espíritu comparte tu orden de iniciativa, pero su turno va justo después del tuyo. La única acción que hace en su turno es la de Esquivar, a menos que realices una acción adicional en tu turno para ordenarle que haga otra. Esa acción puede ser una de su perfil u otra. Si estás incapacitado, el espíritu puede realizar cualquier acción que elija, no solo la de Esquivar.
      El espíritu se manifiesta durante 1 hora, hasta que sus puntos de golpe lleguen a 0, hasta que uses este rasgo para volver a invocarlo o hasta que mueras.
    `,
  },
  enhanced_bond: {
    name: "Vínculo Mejorado",
    description: "El vínculo con tu espíritu del fuego salvaje mejora tus conjuros destructores y sanadores. Siempre que lances un conjuro que inflija daño de fuego o haga recuperar puntos de golpe mientras tu espíritu del fuego salvaje esté invocado, tira 1d8 y obtendrás un bonificador igual al resultado para una tirada de daño o de curación del conjuro. Además, cuando lances un conjuro cuyo alcance no seas tú, este conjuro podrá originarse en ti o en tu espíritu del fuego salvaje.",
  },
  cauterizing_flames: {
    name: "Llamas Cauterizadoras",
    description: "Obtienes la capacidad de convertir la muerte en llamas mágicas que pueden curar o incinerar. Cuando una criatura Pequeña o mayor muera a 30 pies o menos de ti o de tu espíritu del fuego salvaje, aparecerá una llama espectral inofensiva en el espacio de la criatura muerta y arderá allí durante 1 minuto. Cuando una criatura que puedas ver entre en ese espacio, podrás usar tu reacción para extinguir la llama espectral y curar a la criatura o infligirle daño de fuego. La curación o el daño es igual a 2d10 + tu modificador por Sabiduría. Puedes usar esta reacción una cantidad de veces igual a tu bonificador por competencia y recuperas todos los usos tras finalizar un descanso largo.",
  },
  blazing_revival: {
    name: "Renacer Ardiente",
    description: "El vínculo con tu espíritu del fuego salvaje puede salvarte de la muerte. Si el espíritu está a 120 pies o menos de ti y tus puntos de golpe se reducen a 0, por lo que caes inconsciente, podrás hacer que el espíritu se quede con 0 puntos de golpe. En ese caso, recuperarás inmediatamente la mitad de tus puntos de golpe y te pondrás en pie. Cuando uses este rasgo, no podrás volver a hacerlo hasta que finalices un descanso largo.",
  },
};

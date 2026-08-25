import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const phantom_resources_es: GameLocalizationCategory = {
  wails_from_the_grave: {
    name: "Lamentos de Ultratumba",
    description: `Usado para infligir daño adicional a una criatura distinta a tu objetivo de 'Ataque Furtivo'. Se recarga tras un descanso largo.`,
  },
  soul_trinkets: {
    name: "Bagatelas de Alma",
    description: `Te permiten realizar distintas acciones y, mientras tengas al menos una, tienes ventaja en las tiradas de salvación contra muerte y en las tiradas de salvación de Constitución. Ganas una cada vez que usas tu reacción para capturar la esencia de una craitura que murió a 30 pies de ti o menos que puedas ver.`,
  },
  ghost_walk: {
    name: "Paseo Fantasmal",
    description: `Te permite adoptar una forma espectral durante 10 minutos. Se recarga tras un descanso largo o recuperas una carga si destruyes una Bagatela de Alma.`,
  },
};

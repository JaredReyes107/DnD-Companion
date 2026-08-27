import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const divine_soul_resources_es: GameLocalizationCategory = {
  favored_by_the_gods: {
    name: "Favorecido por los Dioses",
    description: `Usado para agregar un bonus a una tirada de ataque o de salvación fallida. Se recarga tras un descanso corto o largo.`,
  },
  empowered_healing: {
    name: "Curación Mejorada",
    description: `Te permite mejorar la eficacia de tus conjuros curativos usando metamagia. Se recarga cada turno.`,
  },
  unearthly_recovery: {
    name: "Recuperación Extraterrena",
    description: `Te permite curarte la mitad de tus puntos de golpe máximos. Se recarga tras un descanso largo.`,
  },
};

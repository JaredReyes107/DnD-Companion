import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const enchantment_resources_es: GameLocalizationCategory = {
  hypnotic_gaze: {
    name: "Mirada Hipnótica",
    description: `Te permite encantar una criatura, incapacitándola mientras mantengas el encanto. Las cargas son por criatura, y solo se gastan si superan la tirada de salvación inicial o si el efecto termina para ellos. Los usos para cada criatura se recuperan tras un descanso largo.`,
  },
  instinctive_charm: {
    name: "Encanto Instintivo",
    description: `Te permite redireccionar un ataque dirigido hacia ti a otra criatura cercana. Las cargas son por criatura, y solo se gastan si superan la tirada de salvación. Los usos para cada criatura se recuperan tras un descanso largo.`,
  },
};

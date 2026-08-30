import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const genie_resources_es: GameLocalizationCategory = {
  bottled_respite: {
    name: "Alivio Embotellado",
    description: `Te permite entrar al interior de tu recipiente por unas horas, usándolo como un lugar seguro. Se recupera tras un descanso largo.`,
  },
  genies_wrath: {
    name: "Ira del Genio",
    description: `Te permite realizar daño adicional del tipo correspondiente a tu patrón en un ataque tuyo. Se recarga cada ronda.`,
  },
  elemental_gift_flight: {
    name: "Don Elemental: Volar",
    description: `Te permite obtener una velocidad de vuelo y levitación durante 10 minutos. Se recarga tras un descanso largo.`,
  },
  limited_wish: {
    name: "Deseo Limitado",
    description: `Lanzas un conjuro de cualquier clase de nivel 6 o menor, y no necesitas cumplir sus requisitos, como costosos componentes; el conjuro simplemente surte efecto como parte de esta acción. Se recupera tras 1d4 descansos largos.`,
  },
};

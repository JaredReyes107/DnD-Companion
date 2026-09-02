import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const abjuration_features_es: GameLocalizationCategory = {
  abjuration_savant: {
    name: "Erudito de la Abjuración",
    description:
      "El oro y el tiempo que debes invertir para copiar un conjuro de abjuración en tu libro de conjuros se divide a la mitad.",
  },
  arcane_ward: {
    name: "Guardián Arcano",
    description: `Puedes entretejer la magia a tu alrededor para protegerte. Cuando lanzas un conjuro de abjuración de nivel 1 o superior, puedes usar simultáneamente una parte de la magia del conjuro para crear un guardián arcano sobre ti mismo, que dura hasta que termines un descanso prolongado. El guardián tiene puntos de golpe equivalentes al doble de tu nivel de mago + tu modificador de Inteligencia. Siempre que recibas daño, el guardián lo recibe en tu lugar. Si el daño reduce al guardián a 0 puntos de golpe, recibes el daño restante.
      Mientras el guardián tenga 0 puntos de golpe, no puede absorber daño, pero su magia permanece. Siempre que lances un conjuro de abjuración de nivel 1 o superior, el guardián recobra puntos de golpe equivalentes al doble del nivel del conjuro.
      Una vez que creas al guardián, no puedes crearlo de nuevo hasta que termines un descanso prolongado.`,
  },
  projected_ward: {
    name: "Guardián Proyectado",
    description: `Cuando una criatura que puedas ver y que esté hasta a 30 pies de distancia de ti reciba daño, puedes usar tu reacción para que tu Guardián Arcano absorba el daño. Si este daño reduce al guardián a 0 puntos de golpe, la criatura protegida recibe el daño restante.`,
  },
  improved_abjuration: {
    name: "Abjuración Mejorada",
    description: `Cuando una criatura que puedas ver y que esté hasta a 30 pies de distancia de ti reciba daño, puedes usar tu reacción para que tu Guardián Arcano absorba el daño. Si este daño reduce al guardián a 0 puntos de golpe, la criatura protegida recibe el daño restante.`,
  },
  spell_resistance: {
    name: "Resistencia a Conjuros",
    description: `Tienes ventaja en las tiradas de salvación contra conjuros. Además tienes resistencia al daño provocado por conjuros.`,
  },
};

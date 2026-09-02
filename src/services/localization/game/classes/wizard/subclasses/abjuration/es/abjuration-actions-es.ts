import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const abjuration_actions_es: GameLocalizationCategory = {
  arcane_ward_create: {
    name: "Crear Guardián Arcano",
    description: `Cuando lanzas un conjuro de abjuración de nivel 1 o superior, creas un guardián arcano sobre ti mismo con puntos de golpe iguales al doble de tu nivel de mago + tu modificador de Inteligencia y que dura hasta que termines un descanso prolongado. Siempre que recibas daño, el guardián lo recibe en tu lugar. Si el daño reduce al guardián a 0 puntos de golpe, recibes el daño restante. El guardián no puede absorber daño si tiene 0 puntos de golpe.`,
  },
  arcane_ward_recharge: {
    name: "Reparar Guardián Arcano",
    description: `Cuando lanzas un conjuro de abjuración de nivel 1 o superior, tu guardián arcano recobra puntos de golpe equivalentes al doble del nivel del conjuro.`,
  },
  projected_ward: {
    name: "Guardián Proyectado",
    description: `Cuando una criatura que puedas ver y que esté hasta a 30 pies de distancia de ti reciba daño, puedes usar tu reacción para que tu Guardián Arcano absorba el daño. Si este daño reduce al guardián a 0 puntos de golpe, la criatura protegida recibe el daño restante.`,
  },
};

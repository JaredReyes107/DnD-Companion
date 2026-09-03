import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const battle_smith_actions_es: GameLocalizationCategory = {
  steel_defender_create: {
    name: "Crear Defensor de Acero",
    description: `Al final de un descanso largo y si tienes herramientas de herrero, creas un Defensor de Acero. Si ya tienes un defensor por este rasgo, es destruido inmediatamente. El defensor desaparece si mueres.
      El defensor comparte tu iniciativa, pero va inmediatamente después de ti. Toma automáticamente la acción de 'Esquivar' en sus turnos a menos que se le instruya otra cosa o si estás incapacitado.`,
  },
  steel_defender_command: {
    name: "Ordenar al Defensor de Acero",
    description: `Comandas a tu defensor a tomar un acción distinta a 'Esquivar'.`,
  },
  steel_defender_revive: {
    name: "Reanimar Defensor de Acero",
    description: `Trabajas 1 minuto a 5 pies de los restos de tu Defensor de Acero, consumiendo un espacio de conjuro de cualquier nivel y 1 minuto de tiempoy reviviéndolo con todos sus puntos de golpe.`,
  },
  arcane_jolt_burst: {
    name: "Descarga Arcana: Dañar",
    description: `Infliges 2d6 de daño de fuerza adicional a una criatura que tú hayas impactado con un arma mágica o que tu defensor haya impactado con un ataque.`,
  },
  arcane_jolt_heal: {
    name: "Descarga Arcana: Curar",
    description: `Curas 2d6 puntos de golpe a una criatura a 30 pies que puedas ver de un objetivo que tú hayas impactado con un arma mágica o que tu defensor haya impactado con un ataque.`,
  },
};

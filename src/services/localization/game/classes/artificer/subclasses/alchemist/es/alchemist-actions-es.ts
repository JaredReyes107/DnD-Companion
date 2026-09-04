import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const alchemist_actions_es: GameLocalizationCategory = {
  experimental_elixir_fabricate: {
    name: "Fabricar Elixir Experimental",
    description: `Creas un elixir experimental en un frasco vacío usando suministros de alquimista al terminar un descanso largo. Tira 1d6 para determinar el tipo de elixir.`,
  },
  experimental_elixir_create: {
    name: "Crear Elixir Experimental",
    description: `Creas un elixir experimental en un frasco vacío usando suministros de alquimista y gastando un espacio de conjuro de cualquier nivel. Tira 1d6 para determinar el tipo de elixir.`,
  },
  cast_lesser_restoration_free: {
    name: "Lanzar Restauración Menor",
    description: `Usas suministros de alquimista como canalizador mágico para lanzar el conjuro 'Curar' sin gastar un espacio de conjuro.`,
  },
  cast_greater_restoration_free: {
    name: "Lanzar Restauración Mayor",
    description: `Usas suministros de alquimista como canalizador mágico para lanzar el conjuro 'Curar' sin gastar un espacio de conjuro.`,
  },
  cast_heal_free: {
    name: "Lanzar Curar",
    description: `Usas suministros de alquimista como canalizador mágico para lanzar el conjuro 'Curar' sin gastar un espacio de conjuro.`,
  },
};

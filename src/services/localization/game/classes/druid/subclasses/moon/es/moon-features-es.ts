import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const moon_features_es: GameLocalizationCategory = {
  circle_forms: {
    name: "Formas del Círculo",
    description: "Los ritos de tu círculo te otorgan la capacidad de transformarte en formas animales más peligrosas. A partir del nivel 2 puedes utilizar tu Forma Salvaje para transformarte en una bestia con un valor de desafío 1 (ignoras la columna de VD máximo de la tabla Forma Salvaje, pero debe cumplir con las otras limitaciones existentes). Ahora puedes transformarte en una bestia con un valor de desafío equivalente a un tercio de tu nivel de druida, redondeando hacia abajo.",
  },
  combat_wild_shape: {
    name: "Forma Salvaje de Combate",
    description: "Obtienes la habilidad de utilizar tu Forma Salvaje en tu turno como una acción adicional, en lugar de como una acción normal. Además, mientras te estás transformado en la Forma Salvaje puedes utilizar una acción adicional para gastar un espacio de conjuro y recuperar 1d8 puntos de golpe por nivel del espacio de conjuro gastado.",
  },
  primal_strike: {
    name: "Golpe Primitivo",
    description: "Los ataques de tu forma bestial cuentan como mágicos a la hora de superar la resistencia e inmunidad para ataques y daño no mágico.",
  },
  elemental_wild_shape: {
    name: "Forma Salvaje Elemental",
    description: "Puedes emplear dos usos de tu Forma Salvaje a la vez para transformarte en un elemental de aire, de tierra, de fuego o de agua.",
  },
  thousand_forms: {
    name: "Mil Formas",
    description: "Habrás aprendido a usar la magia para alterar tu aspecto físico de otras maneras. Puedes lanzar Alterar el propio aspecto a voluntad.",
  },
};

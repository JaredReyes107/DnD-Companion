import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const champion_features_es: GameLocalizationCategory = {
  improved_critical: {
    name: "Crítico Mejorado",
    description: "Consigues un crítico en tus ataques de arma con 19 o 20.",
  },
  remarkable_athlete: {
    name: "Atleta sobresaliente",
    description: `Puedes sumar la mitad de tu bonificador por competencia (redondeado hacia arriba) a cualquier prueba de Fuerza, Destreza o Constitución en la que no lo uses aún.
      Además, cuando realizas un salto de longitud corriendo, la distancia que puedes cubrir aumenta tantos pies como tu modificador por Fuerza.`,
  },
  additional_fighting_style: {
    name: "Estilo de Combate Adicional",
    description:
      "Puedes elegir una segunda opción para el rasgo de clase Estilo de combate.",
  },
  superior_critical: {
    name: "Crítico Superior",
    description: "Tus ataques de arma consiguen un crítico con 18-20",
  },
  survivor: {
    name: "Superviviente",
    description:
      "Alcanzas el punto álgido de tu resistencia en batalla. Al principio de cada uno de tus turnos, recuperas un número de puntos de golpe igual a 5 + tu modificador por Constitución si te quedan menos de la mitad. No obtienes este beneficio si tienes 0 puntos de golpe.",
  },
};

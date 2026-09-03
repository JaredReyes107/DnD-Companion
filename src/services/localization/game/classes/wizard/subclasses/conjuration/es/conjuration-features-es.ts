import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const conjuration_features_es: GameLocalizationCategory = {
  conjuration_savant: {
    name: "Erudito de la Conjuración",
    description: `El oro y el tiempo que debes invertir para copiar un conjuro de conjuración en tu libro de conjuros se divide a la mitad.`,
  },
  minor_conjuration: {
    name: "Conjuración Menor",
    description: `Puedes usar tu acción para conjurar un objeto inanimado en tu mano o en el suelo, en un espacio desocupado que puedas ver en un rango de 10 pies. Este objeto no puede medir más de 3 pies en ninguna de sus dimensiones ni pesar más de 10 libras, y su forma debe ser la de un objeto no mágico que hayas visto. El objeto es visiblemente mágico, e irradia una luz tenue a 5 pies.
      El objeto desaparece después de una hora, cuando uses este rasgo nuevamente o si recibe algún daño.`,
  },
  benign_transposition: {
    name: "Transposición Benigna",
    description: `Puedes usar tu acción para teletransportarte hasta 30 pies hacia un espacio desocupado que puedas ver. Alternativamente, puedes elegir un espacio a tu alcance que esté ocupado por una criatura Mediana o Pequeña. Si la criatura es voluntaria, los dos se teletransportan, intercambiando posiciones.
      Una vez que uses este rasgo, no puedes utilizarlo nuevamente hasta que finalices un descanso prolongado o lances un conjuro de conjuración de nivel 1 o superior.`,
  },
  focused_conjuration: {
    name: "Conjuración Concentrada",
    description: `Mientras estés concentrándote en un conjuro de conjuración, tu concentración no puede ser rota como resultado de recibir daño.`,
  },
  durable_summons: {
    name: "Invocaciones Duraderas",
    description: `Cualquier criatura que crees o invoques con un conjuro de conjuración tiene 30 puntos de golpe temporales.`,
  },
};

import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const bladesinging_features_es: GameLocalizationCategory = {
  training_in_war_and_song: {
    name: "Entrenarse en la Guerra y la Canción",
    description: `Ganas competencia con armaduras ligeras y con un tipo de arma cuerpo a cuerpo de una mano de tu elección. También ganas competencia en la habilidad Interpretación si aún no la tienes.`,
  },
  bladesong: {
    name: "Canción de la Hoja",
    description: `Puedes invocar una magia élfica llamada Canción de la Hoja, siempre que no lleves una armadura pesada o media ni uses un escudo. Esta magia te otorga una velocidad, una agilidad y una concentración sobrenaturales.
      Puedes usar una acción adicional para iniciar la Canción de la Hoja, que dura 1 minuto. Acaba si quedas incapacitado, si usas una armadura pesada o media o un escudo, o si utilizas dos manos para hacer un ataque con un arma. También puedes hacer que la Canción de la Hoja desaparezca en cualquier momento (no requiere acción).
      Mientras tu Canción de la Hoja esté activa, obtienes los siguientes beneficios:
        - Obtienes un bonificador de CA igual a tu modificador por Inteligencia (mínimo de +1).
        - Tu velocidad caminando aumenta en 10 pies.
        - Tienes ventaja en las pruebas de Destreza (Acrobacias).
        - Obtienes un bonificador a las tiradas de salvación de Constitución que hagas para mantener la concentración en un conjuro. El bonificador es igual a tu modificador por Inteligencia (mínimo de +1).
      Puedes usar este rasgo una cantidad de veces igual a tu bonificador por competencia y recuperas todos los usos tras finalizar un descanso largo.`,
  },
  extra_attack_bladesinging: {
    name: "Ataque Adicional",
    description: `Cuando lleves a cabo la acción de Atacar durante tu turno, podrás hacer dos ataques en lugar de uno. Además, podrás lanzar uno de tus trucos en lugar de uno de dichos ataques.`,
  },
  song_of_defense: {
    name: "Canción de Defensa",
    description: `Mientras tu Canción de la Hoja está activa, puedes dirigir tu magia para que absorba daño. Cuando recibas daño, podrás usar tu reacción para gastar un espacio de conjuro y reducir ese daño en una cantidad igual a cinco veces el nivel de dicho espacio de conjuro.`,
  },
  song_of_victory: {
    name: "Canción de la Victoria",
    description: `Mientras tu Canción de la Hoja está activa, puedes añadir tu modificador por Inteligencia (mínimo de +1) al daño de tus ataques con arma cuerpo a cuerpo.`,
  },
};

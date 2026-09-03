import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const bladesinging_actions_es: GameLocalizationCategory = {
  bladesong: {
    name: "Canción de la Hoja",
    description: `Durante 1 minuto, hasta que quedes incapacitado, hasta que uses una armadura pesada o media o un escudo, o hasta que uses dos manos para hacer un ataque con un arma, obtienes los siguientes beneficios:
        - Obtienes un bonificador de CA igual a tu modificador por Inteligencia (mínimo de +1).
        - Tu velocidad caminando aumenta en 10 pies.
        - Tienes ventaja en las pruebas de Destreza (Acrobacias).
        - Obtienes un bonificador a las tiradas de salvación de Constitución que hagas para mantener la concentración en un conjuro. El bonificador es igual a tu modificador por Inteligencia (mínimo de +1). `,
  },
  song_of_defense: {
    name: "Canción de Defensa",
    description: `Cuando recibas daño, gastas un espacio de conjuro y reduces el daño recibido en una cantidad igual a cinco veces el nivel del espacio de conjuro usado.`,
  },
};

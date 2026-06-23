import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const light_actions_es: GameLocalizationCategory = {
  warding_flare: {
    name: "Fulgor Protector",
    description: `Cuando eres atacado por una criatura que puedas ver en un rango de 30 pies, puedes usar tu reacción para imponerle desventaja en su tirada de ataque, haciendo que la luz deslumbre al atacante antes de que lleve a cabo su ataque. Un atacante que no pueda ser cegado es inmune a este efecto.`,
  },
  channel_divinity_radiance_of_the_dawn: {
    name: "Resplandor del Alba",
    description: `Levantas tu símbolo sagrado para que cualquier oscuridad mágica a 30 pies de ti sea disipada. Adicionalmente, cada criatura hostil a 30 pies de ti debe realizar una tirada de salvación de Constitución. Una criatura sufrirá daño radiante igual a 2d10 + tu nivel de clérigo si falla el tiro de salvación, y la mitad si lo supera. Una criatura con cobertura total hacia ti no es afectada.`,
  },
  corona_of_light: {
    name: "Corona de Luz",
    description:
      "Activas un aura de luz solar que dura un minuto o hasta que la desactives, usando otra acción. Emites luz brillante en un radio de 60 pies y luz tenue en un radio de 30 pies más allá. Tus enemigos en la luz brillante tienen desventaja en las tiradas de salvación contra cualquier conjuro que haga daño radiante o de fuego.",
  },
};

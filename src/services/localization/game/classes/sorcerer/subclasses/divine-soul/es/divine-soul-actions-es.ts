import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const divine_soul_actions_es: GameLocalizationCategory = {
  favored_by_the_gods: {
    name: "Favorecido por los Dioses",
    description: `Tiras 2d4 y lo añades al resultado de una tirada de ataque o una tirada de salvación que hayas fallado.`,
  },
  empowered_healing: {
    name: "Curación Mejorada",
    description: `Cuando tú o un aliado situado a 5 pies o menos de ti haga una tirada para determinar cuántos puntos de golpe recupera un conjuro y no estés incapacitado, puedes utilizar 1 punto de hechicería para volver a tirar cualquier número de esos dados.`,
  },
  otherworldly_wings: {
    name: "Alas de Otro Mundo",
    description: `Manifiestas un par de alas espectrales que te otorgan una velocidad volando de 30 pies. El efecto se acaba cuando quedes incapacitado, si mueres o si las disipas con una acción adicional.`,
  },
  unearthly_recovery: {
    name: "Recuperación Extraterrena",
    description: `Cuando tengas menos de la mitad de tus puntos de golpe máximos, puedes recuperar tantos puntos de golpe como la mitad de tus puntos de golpe máximos.`,
  },
};

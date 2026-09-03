import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const illusion_actions_es: GameLocalizationCategory = {
  malleable_illusions: {
    name: "Ilusiones Maleables",
    description: `Cuando lanzas un conjuro de ilusión que tiene una duración de un minuto o superior, puedes usar tu acción para cambiar la naturaleza de esa ilusión (usando los parámetros normales del conjuro), siempre que puedas ver la ilusión.`,
  },
  illusory_self: {
    name: "Yo Ilusorio",
    description: `Cuando una criatura realiza una tirada de ataque contra ti, puedes usar tu reacción para interponer el duplicado ilusorio entre el atacante y tú. El ataque falla automáticamente y la ilusión se disipa.`,
  },
  illusory_reality: {
    name: "Realidad Ilusoria",
    description: `Cuando lanzas un conjuro de Ilusión de nivel 1 o superior, puedes elegir un objeto inanimado y no mágico que sea parte de esa ilusión y convertirlo en real. Puedes hacer esto en tu turno como una acción adicional mientras el conjuro esté funcionando. El objeto será real durante un minuto. 
        Por ejemplo, podrías crear la ilusión de un puente sobre un abismo y hacerlo real el tiempo suficiente para que tus aliados lo crucen. El objeto no puede hacer daño a nadie directamente o de cualquier otra manera.`,
  },
};

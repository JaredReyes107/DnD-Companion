import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const illusion_features_es: GameLocalizationCategory = {
  illusion_savant: {
    name: "Erudito de la Ilusión",
    description: `El oro y el tiempo que debes invertir para copiar un conjuro de ilusión en tu libro de conjuros se divide a la mitad.`,
  },
  improved_minor_illusion: {
    name: "Ilusión Menor Mejorada",
    description: `Aprendes el truco ilusión menor. Si ya conocías este truco, aprendes otro truco de mago de tu elección. El truco no cuenta para tu límite de trucos conocidos. Cuando lanzas ilusión menor generas tanto sonido como imagen en un único lanzamiento.`,
  },
  malleable_illusions: {
    name: "Ilusiones Maleables",
    description: `Cuando lanzas un conjuro de ilusión que tiene una duración de un minuto o superior, puedes usar tu acción para cambiar la naturaleza de esa ilusión (usando los parámetros normales del conjuro), siempre que puedas ver la ilusión.`,
  },
  illusory_self: {
    name: "Yo Ilusorio",
    description: `Puedes crear una copia ilusoria de ti mismo como una reacción instantánea, casi instintiva, frente al peligro. Cuando una criatura realiza una tirada de ataque contra ti, puedes usar tu reacción para interponer el duplicado ilusorio entre el atacante y tú. El ataque falla automáticamente y la ilusión se disipa.
      Una vez que usas este rasgo, no puedes usarlo nuevamente hasta que finalices un descanso corto o prolongado.`,
  },
  illusory_reality: {
    name: "Realidad Ilusoria",
    description: `Has aprendido el secreto de entretejer la magia de las sombras entre tus ilusiones para brindarles parte de realidad. Cuando lanzas un conjuro de Ilusión de nivel 1 o superior, puedes elegir un objeto inanimado y no mágico que sea parte de esa ilusión y convertirlo en real. Puedes hacer esto en tu turno como una acción adicional mientras el conjuro esté funcionando. El objeto será real durante un minuto. Por ejemplo, podrías crear la ilusión de un puente sobre un abismo y hacerlo real el tiempo suficiente para que tus aliados lo crucen.
      El objeto no puede hacer daño a nadie directamente o de cualquier otra manera.`,
  },
};

import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const enchantment_features_es: GameLocalizationCategory = {
  enchantment_savant: {
    name: "Erudito del Encantamiento",
    description: `El oro y el tiempo que debes invertir para copiar un conjuro de encantamiento en tu libro de conjuros se divide a la mitad.`,
  },
  hypnotic_gaze: {
    name: "Mirada Hipnótica",
    description: `Tus suaves palabras y mirada encantadora pueden cautivar mágicamente a otra criatura. Usando una acción, elige una criatura que puedas ver y que no esté a más de 5 pies de ti. Si el objetivo puede verte u oírte, debe tener éxito en una salvación de Sabiduría contra la CD de salvación de tus conjuros de mago o ser encantado por ti hasta el siguiente turno. La velocidad de la criatura encantada se reduce a 0 y la criatura está incapacitada y visiblemente mareada.
      En turnos subsiguientes, puedes usar tus acciones para mantener este efecto hasta el final de tu siguiente turno. Aun así, el efecto finaliza si te mueves a más de 5 pies de distancia de la criatura, si la criatura no puede verte ni oírte o si la criatura recibe daño.
      Una vez que el efecto termina, o si la criatura tiene éxito en su tirada de salvación inicial, no puedes usar este efecto nuevamente en esa criatura hasta que finalices un descanso prolongado.`,
  },
  instinctive_charm: {
    name: "Encanto Instintivo",
    description: `Cuando una criatura que puedas ver en un rango de 30 pies de ti haga una tirada de ataque contra ti, puedes usar tu reacción para desviar el ataque, siempre que otra criatura esté dentro del rango del ataque. El atacante debe realizar una salvación de Sabiduría contra la CD de salvación de tus conjuros de mago. Si se falla la tirada de salvación, el atacante debe redirigir su ataque contra la criatura más cercana a él, sin contarte a ti ni a él mismo. Si hay más de una criatura igual de cerca, el atacante elige a quien redirigir su ataque.
      Si se supera la tirada salvación, no puedes usar este rasgo en el atacante nuevamente hasta que finalices un descanso prolongado.
      Debes elegir si usar este rasgo antes de saber si el ataque tiene o no éxito. Las criaturas que no puedan ser encantadas son inmunes a este efecto.`,
  },
  split_enchantment: {
    name: "Encantamiento Dividido",
    description: `Cuando lanzas un conjuro de encantamiento de nivel 1 o superior que tenga como objetivo solo una criatura, puedes hacer que también afecte a una segunda criatura.`,
  },
  alter_memories: {
    name: "Alterar Recuerdos",
    description: `Ganas la habilidad de hacer que una criatura desconozca tu influencia mágica en ella. Cuando lanzas un conjuro de encantamiento para encantar a una o más criaturas, puedes alterar su entendimiento para evitar que sea consciente de que ha sido encantada.
      Además, una vez antes de que expire el hechizo, puedes usar tu acción para intentar que la criatura elegida olvide parte del tiempo que pasó estando encantada. La criatura debe tener éxito en una tirada de salvación de Inteligencia contra la CD de salvación de tus conjuros de mago u olvidar un número de horas igual a 1 + tu modificador de Carisma (mínimo 1). Puedes hacer que la criatura olvide menos tiempo, y la cantidad de tiempo no puede exceder la duración del conjuro de encantamiento.`,
  },
};

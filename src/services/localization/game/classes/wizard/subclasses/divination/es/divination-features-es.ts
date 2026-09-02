import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const divination_features_es: GameLocalizationCategory = {
  divination_savant: {
    name: "Erudito de la Adivinación",
    description: `El oro y el tiempo que debes invertir para copiar un conjuro de adivinación en tu libro de conjuros se divide a la mitad.`,
  },
  portent: {
    name: "Presagio",
    description: `Cuando seleccionas esta escuela, visiones del futuro comienzan a introducirse en tu consciencia. Cuando finalizas un descanso prolongado, tira dos d20 y anota los resultados. Puedes reemplazar cualquier tirada de ataque, salvación o habilidad hecha por ti o una criatura que puedas ver por una de estas tiradas adivinatorias. Debes declararlo antes de la tirada y puedes reemplazar una tirada de esta manera únicamente una vez por turno.
      Cada tirada adivinatoria puede usarse solamente una vez. Cuando terminas un descanso prolongado, pierdes cualquier tirada adivinatoria que no hayas usado.`,
  },
  expert_divination: {
    name: "Adivinición Experta",
    description: `Lanzar conjuros de adivinación es tan sencillo para ti que usas solamente una fracción del esfuerzo habitual. Cuando lanzas un conjuro de adivinación de nivel 2 o superior usando un espacio de conjuro, recuperas un espacio de conjuro que hayas gastado. El espacio que recuperes debe ser de un nivel inferior al del conjuro que lanzaste y no puede ser superior al nivel 5.`,
  },
  the_third_eye: {
    name: "El Tercer Ojo",
    description: `Puedes usar tu acción para incrementar tus poderes perceptivos. Cuando lo haces, elige uno de los siguientes beneficios, que dura hasta que estés incapacitado o comiences un descanso corto o prolongado. No puedes usar este rasgo nuevamente hasta que termines un descanso.
      - Visión en la Oscuridad: Ganas visión en la oscuridad en un rango de 60 pies, tal como se describe en el capítulo 8.
      - Vista Etérea: Puedes ver en el Plano Etéreo en un rango de 60 pies en torno a ti.
      - Comprensión Mayor: Puedes leer cualquier lenguaje.
      - Ver Invisibilidad: Puedes ver objetos y criaturas invisibles en un rango de 10 pies que estén en tu línea de visión.`,
  },
  greater_portent: {
    name: "Presagio Mayor",
    description: `Las visiones de tus sueños se intensifican y dibujan una imagen más precisa en tu mente de lo que está por venir. Tira tres d20 para tu rasgo de Presagio, en lugar de dos.`,
  },
};

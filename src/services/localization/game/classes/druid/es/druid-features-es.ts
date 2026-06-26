import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const druid_features_es: GameLocalizationCategory = {
  druidic: {
    name: "Druídico",
    description:
      "Conoces el druídico, el idioma secreto de los druidas. Puedes hablarlo y usarlo para dejar mensajes ocultos. Tanto tú como cualquiera que conozca este idioma advertiréis inmediatamente la presencia de estos mensajes. Los demás deberán superar una prueba de Sabiduría (Percepción) CD 15 para detectarlos, pero no podrán descifrarlos sin recurrir a la magia.",
  },
  spellcasting_druid: {
    name: "Lanzamiento de Conjuros",
    description: "",
  },
  wild_shape: {
    name: "Forma Salvaje",
    description: `Puedes usar tu acción para asumir mágicamente la forma de una bestia que hayas visto antes. Puedes usar este rasgo dos veces. Recuperas los usos que hayas gastado cuando termines un descanso prolongado o breve.
      Tu nivel de druida determina la bestia en la que puedes transformarte, como se indica en la tabla de formas de bestia.
      Puedes permanecer en forma de bestia durante tantas horas como la mitad de tu nivel de druida (redondeando hacia abajo). Luego vuelves a tu forma normal a menos que gastes otro uso de este rasgo. Puedes volver a tu forma habitual usando una acción adicional en tu turno. Vuelves a tu forma automáticamente si caes inconsciente, si tus puntos de golpe descienden a 0 o si mueres.    
      Mientras estés transformado, se te aplican las siguientes reglas:
      Tu perfil queda reemplazado por el de la criatura, excepto tu alineamiento, tu personalidad y tus puntuaciones de Inteligencia, Sabiduría y Carisma. También conservas todas tus competencias en habilidades y tiradas de salvación, además de ganar las que tenga la criatura. Si tiene las mismas competencias que tú y el bonificador que aparece en su perfil es mayor que el tuyo, utiliza el de la criatura. Si la criatura posee alguna acción legendaria o acción en guarida, no podrás usarlas.
      Cuando te transformas, pasas a tener los puntos de golpe y Dados de Golpe de la nueva forma. Cuando reviertas a tu forma normal. vuelves a tener los puntos de golpe que poseyeras antes de la transformación. Sin embargo. si la transformación se rompiera al quedar reducido a 0 puntos de golpe, cualquier daño sobrante se aplicaría a tu forma normal. Así, si recibes 10 de daño en tu forma animal y solo te queda 1 punto de golpe, volverás a tu forma normal y sufrirás 9 de daño. Si este daño sobrante no reduce tu forma normal a 0 puntos de golpe, no caerás inconsciente.
      No puedes lanzar conjuros y tu capacidad para hablar o llevar a cabo cualquier acción que requiera del uso de las manos queda limitada por las capacidades de tu forma de bestia. Transformarse no rompe la concentración en un conjuro que ya hubieras lanzado, ni te impide realizar acciones que son parte de un conjuro, como las de un llamar al relámpago que ya hayas lanzado.
      Mantienes los beneficios de cualquier rasgo de tu clase, raza u otra fuente y podrás usarlos, siempre y cuando tu nueva forma sea físicamente capaz de ello. Sin embargo, no podrás utilizar ningún sentido especial que tengas (como visión en la oscuridad) a menos que tu nueva forma también lo posea.
      Cuando te transformas, eliges si tu equipo cae al suelo en tu espacio, se funde con la nueva forma o lo sigues llevando puesto. El equipo que portes funciona con normalidad, pero el DM determinará si es factible que la nueva forma pueda llevar un objeto de equipo concreto, basándose en la forma y tamaño de la criatura. Tu equipo no cambia de forma o tamaño para adaptarse a la nueva forma y cualquier equipo que esta no pueda llevar deberá caer al suelo o fundirse con la nueva forma. El equipo que se funda con la forma no tendrá efecto alguno hasta que la abandones.`,
  },
  druid_circle: {
    name: "Círculo Druídico",
    description: "Eliges un Círculo druídico con el que te identifiques",
  },
  ability_score_improvement: {
    name: "Mejora de Característica",
    description:
      "Puedes aumentar una puntuación de característica de tu elección en 2 o dos puntuaciones de característica en 1. Como siempre, no puedes aumentar una puntuación de característica por encima de 20 usando este rasgo.",
  },
  timeless_body: {
    name: "Cuerpo Eterno",
    description:
      "La magia primaria que usas hace que envejezcas más despacio. Por cada 10 años que pasan, tu cuerpo solo envejece 1.",
  },
  beast_spells: {
    name: "Conjuros de Bestia",
    description:
      "Puedes lanzar muchos de tus conjuros de druida en cualquier forma que asumas usando Forma salvaje. Puedes utilizar los componentes somáticos y verbales de un conjuro de druida mientras estás en forma de bestia, pero no puedes prescindir de los componentes materiales.",
  },
  archdruid: {
    name: "Archidruida",
    description:
      "puedes usar Forma salvaje un número ilimitado de veces. Además, puedes ignorar los componentes verbales y somáticos de tus conjuros de druida, así como cualquier componente material que carezca de coste y que no se consuman al lanzar el conjuro. Tienes este beneficio tanto en tu forma normal como en tu forma de bestia de Forma salvaje.",
  },
};

import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

import { land_actions_es } from "../subclasses/land/es/land-actions-es";
import { moon_actions_es } from "../subclasses/moon/es/moon-actions-es";

import { dreams_actions_es } from "../subclasses/dreams/es/dreams-actions-es";
import { shepherd_actions_es } from "../subclasses/shepherd/es/shepherd-actions-es";

import { spores_actions_es } from "../subclasses/spores/es/spores-actions-es";
import { stars_actions_es } from "../subclasses/stars/es/stars-actions-es";
import { wildfire_actions_es } from "../subclasses/wildfire/es/wildfire-actions-es";

const subclass_actions: GameLocalizationCategory = {
  //PHB
  ...land_actions_es,
  ...moon_actions_es,

  // XGE
  ...dreams_actions_es,
  ...shepherd_actions_es,

  // TCE
  ...spores_actions_es,
  ...stars_actions_es,
  ...wildfire_actions_es,
};

export const druid_actions_es: GameLocalizationCategory = {
  wild_shape: {
    name: "Forma Salvaje",
    description: `Asumes mágicamente la forma de una bestia que hayas visto antes.
      Tu nivel de druida determina la bestia en la que puedes transformarte, como se indica en la tabla de formas de bestia.
      Puedes permanecer en forma de bestia durante tantas horas como la mitad de tu nivel de druida (redondeando hacia abajo). Luego vuelves a tu forma normal a menos que gastes otro uso de este rasgo. Puedes volver a tu forma habitual usando una acción adicional en tu turno. Vuelves a tu forma automáticamente si caes inconsciente, si tus puntos de golpe descienden a 0 o si mueres.
      Mientras estés transformado, se te aplican las siguientes reglas:
        Tu perfil queda reemplazado por el de la criatura, excepto tu alineamiento, tu personalidad y tus puntuaciones de Inteligencia, Sabiduría y Carisma. También conservas todas tus competencias en habilidades y tiradas de salvación, además de ganar las que tenga la criatura. Si tiene las mismas competencias que tú y el bonificador que aparece en su perfil es mayor que el tuyo, utiliza el de la criatura. Si la criatura posee alguna acción legendaria o acción en guarida, no podrás usarlas.
        Cuando te transformas, pasas a tener los puntos de golpe y Dados de Golpe de la nueva forma. Cuando reviertas a tu forma normal. vuelves a tener los puntos de golpe que poseyeras antes de la transformación. Sin embargo. si la transformación se rompiera al quedar reducido a 0 puntos de golpe, cualquier daño sobrante se aplicaría a tu forma normal. Así, si recibes 10 de daño en tu forma animal y solo te queda 1 punto de golpe, volverás a tu forma normal y sufrirás 9 de daño. Si este daño sobrante no reduce tu forma normal a 0 puntos de golpe, no caerás inconsciente.
        No puedes lanzar conjuros y tu capacidad para hablar o llevar a cabo cualquier acción que requiera del uso de las manos queda limitada por las capacidades de tu forma de bestia. Transformarse no rompe la concentración en un conjuro que ya hubieras lanzado, ni te impide realizar acciones que son parte de un conjuro, como las de un llamar al relámpago que ya hayas lanzado.
        Mantienes los beneficios de cualquier rasgo de tu clase, raza u otra fuente y podrás usarlos, siempre y cuando tu nueva forma sea físicamente capaz de ello. Sin embargo, no podrás utilizar ningún sentido especial que tengas (como visión en la oscuridad) a menos que tu nueva forma también lo posea.
        Cuando te transformas, eliges si tu equipo cae al suelo en tu espacio, se funde con la nueva forma o lo sigues llevando puesto. El equipo que portes funciona con normalidad, pero el DM determinará si es factible que la nueva forma pueda llevar un objeto de equipo concreto, basándose en la forma y tamaño de la criatura. Tu equipo no cambia de forma o tamaño para adaptarse a la nueva forma y cualquier equipo que esta no pueda llevar deberá caer al suelo o fundirse con la nueva forma. El equipo que se funda con la forma no tendrá efecto alguno hasta que la abandones.  
    `,
  },

  ...subclass_actions,
};

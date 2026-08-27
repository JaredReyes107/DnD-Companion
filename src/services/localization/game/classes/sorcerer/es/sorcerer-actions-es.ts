import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

import { draconic_actions_es } from "../subclasses/draconic/es/draconic-actions-es";
import { wild_magic_sorcerer_actions_es } from "../subclasses/wild/es/wild-magic-actions-es";

import { divine_soul_actions_es } from "../subclasses/divine-soul/es/divine-soul-actions-es";
import { shadow_magic_actions_es } from "../subclasses/shadow/es/shadow-magic-actions-es";
import { storm_actions_es } from "../subclasses/storm/es/storm-actions-es";

import { aberrant_mind_actions_es } from "../subclasses/aberrant-mind/es/aberrant-mind-actions-es";
import { clockwork_soul_actions_es } from "../subclasses/clockwork-soul/es/clockwork-soul-actions-es";

const subclass_actions: GameLocalizationCategory = {
  // PHB
  ...draconic_actions_es,
  ...wild_magic_sorcerer_actions_es,

  // XGE
  ...divine_soul_actions_es,
  ...shadow_magic_actions_es,
  ...storm_actions_es,

  // TCE
  ...aberrant_mind_actions_es,
  ...clockwork_soul_actions_es,
};

const metamagic_actions: GameLocalizationCategory = {
  metamagic_careful_spell: {
    name: "Metamagia: Conjuro Cuidadoso",
    description: `Cuando lanzas un conjuro que obliga a otras criaturas a hacer tiradas de salvación, gastas 1 punto de hechicería para elegir una cantidad de criaturas hasta tu modificador por Carisma (mínimo una criatura). Las criaturas elegidas tienen éxito automáticamente en la tirada de salvación.`,
  },
  metamagic_distant_spell: {
    name: "Metamagia: Conjuro Distante",
    description: `Cuando lanzas un conjuro con un alcance de 5 pies o más, puedes gastar 1 punto de hechicería para duplicar el alcance.
      Si en su lugar un conjuro con un alcance de toque, puedes gastar 1 punto de hechicería para hacer que el alcance del conjuro sea 30 pies.`,
  },
  metamagic_empowered_spell: {
    name: "Metamagia: Conjuro Potenciado",
    description: `Cuando tiras el daño de un conjuro, puedes gastar 1 punto de hechicería para volver a tirar tantos dados de daño como tu modificador por Carisma (mínimo uno). Debes usar el nuevo resultado.
      Puedes usar este rasgo incluso si ya has usado una opción de Metamagia diferente mientras lanzabas el conjuro.`,
  },
  metamagic_extended_spell: {
    name: "Metamagia: Conjuro Prolongado",
    description: `Cuando lanzas un conjuro cuya duración es de un minuto o más, puedes gastar 1 punto de hechicería para duplicar su duración, hasta un máximo de 24 horas.`,
  },
  metamagic_heightened_spell: {
    name: "Metamagia: Conjuro Elevado",
    description: `Cuando lanzas un conjuro que obliga a una o más criaturas a hacer una tirada de salvación para resistir sus efectos, puedes gastar 3 puntos de hechicería para hacer que una de ellas tenga desventaja en la primera tirada de salvación que haga.`,
  },
  metamagic_quickened_spell: {
    name: "Metamagia: Conjuro Acelerado",
    description: `Cuando lanzas un conjuro cuyo tiempo de lanzamiento dura una acción, puedes gastar 2 puntos de hechicería para cambiar el tiempo de lanzamiento a una acción adicional.`,
  },
  metamagic_subtle_spell: {
    name: "Metamagia: Conjuro Sutil",
    description: `Cuando lanzas un conjuro, puedes gastar 1 punto de hechicería para poder lanzarlo sin componentes verbales ni somáticos.`,
  },
  metamagic_twinned_spell: {
    name: "Metamagia: Conjuro Duplicado",
    description: `Cuando lanzas un conjuro que solo tiene una criatura como objetivo y que no tiene alcance personal, puedes gastar tantos puntos de hechicería como el nivel del conjuro para elegir como objetivo del mismo conjuro a una segunda criatura dentro del alcance (1 punto de hechicería si el conjuro es un truco). El conjuro no puede tener más de una criatura como objetivo. Por ejemplo, no puedes elegir Proyectil mágico ni Rayo abrasador, pero sí Rayo de escharcha.`,
  },

  //Seeking + Transmuted
};

export const sorcerer_actions_es: GameLocalizationCategory = {
  ...subclass_actions,
  ...metamagic_actions,

  font_of_magic_to_spellslots: {
    name: "Crear Espacios de Conjuro",
    description: `Creas un espacio de conjuro de nivel 5 o menor usando puntos de hechicería:
      - 1° nivel: 2 puntos de hechicería.
      - 2° nivel: 3 puntos de hechicería.
      - 3° nivel: 5 puntos de hechicería.
      - 4° nivel: 6 puntos de hechicería.
      - 5° nivel: 7 puntos de hechicería.`,
  },
  font_of_magic_from_spellslots: {
    name: "Recuperar Puntos de Hechicería",
    description: `You expend one spell slot and gain a number of sorcery points equal to the slot's level.`,
  },
};

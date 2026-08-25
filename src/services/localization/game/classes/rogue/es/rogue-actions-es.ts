import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

import { arcane_trickster_actions_es } from "../subclasses/arcane-trickster/es/arcane-trickster-actions-es";
import { assassin_actions_es } from "../subclasses/assassin/es/assassin-actions-es";
import { thief_actions_es } from "../subclasses/thief/es/thief-actions-es";

import { inquisitive_actions_es } from "../subclasses/inquisitive/es/inquisitive-actions-es";
import { mastermind_actions_es } from "../subclasses/mastermind/es/mastermind-actions-es";
import { scout_actions_es } from "../subclasses/scout/es/scout-actions-es";
import { swashbuckler_actions_es } from "../subclasses/swashbuckler/es/swashbuckler-actions-es";

import { phantom_actions_es } from "../subclasses/phantom/es/phantom-actions-es";
import { soulknife_actions_es } from "../subclasses/soulknife/es/soulknife-actions-es";

export const subclass_actions: GameLocalizationCategory = {
  arcane_trickster: arcane_trickster_actions_es,
  assassin: assassin_actions_es,
  thief: thief_actions_es,

  inquisitive: inquisitive_actions_es,
  mastermind: mastermind_actions_es,
  scout: scout_actions_es,
  swashbuckler: swashbuckler_actions_es,

  phantom: phantom_actions_es,
  soulknife: soulknife_actions_es,
};

export const rogue_actions_es: GameLocalizationCategory = {
  ...subclass_actions,

  sneak_attack: {
    name: "Ataque Furtivo",
    description: `Infliges 1d6 de daño adicional a una criatura que impactes con un ataque si tienes ventaja en la tirada de ataque o  si otro enemigo del objetivo no incapacitado está a menos de 5 pies de él y si tú no tienes desventaja en la tirada de ataque. El ataque debe usar un arma sutil o a distancia. La cantidad de daño adicional aumenta 1d6 en cada nivel impar.`,
  },
  dash: {
    name: "Correr",
    description: `Tomas la acción 'Correr'.`,
  },
  disengage: {
    name: "Destrabarse",
    description: `Tomas la acción 'Destrabarse'.`,
  },
  hide: {
    name: "Esconderse",
    description: `Tomas la acción 'Esconderse'.`,
  },
  uncanny_dodge: {
    name: "Esquive Asombroso",
    description: `Cuando un atacante que puedas ver te impacta con un ataque, puedes usar tu reacción para reducir a la mitad el daño que te provoca.`,
  },
  stroke_of_luck: {
    name: "Golpe de Suerte",
    description: `Si tu ataque no impacta a un objetivo que esté a tu alcance, puedes convertir el fallo en un impacto. Alternativamente, si fallas una prueba de característica, puedes considerar el resultado de la tirada de 1d20 como 20..`,
  },
};

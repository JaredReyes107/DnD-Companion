import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

import { arcane_trickster_resources_es } from "../subclasses/arcane-trickster/es/arcane-trickster-resources-es";
import { assassin_resources_es } from "../subclasses/assassin/es/assassin-resources-es";
import { thief_resources_es } from "../subclasses/thief/es/thief-resources-es";

import { inquisitive_resources_es } from "../subclasses/inquisitive/es/inquisitive-resources-es";
import { mastermind_resources_es } from "../subclasses/mastermind/es/mastermind-resources-es";
import { scout_resources_es } from "../subclasses/scout/es/scout-resources-es";
import { swashbuckler_resources_es } from "../subclasses/swashbuckler/es/swashbuckler-resources-es";

import { phantom_resources_es } from "../subclasses/phantom/es/phantom-resources-es";
import { soulknife_resources_es } from "../subclasses/soulknife/es/soulknife-resources-es";

export const subclass_resources: GameLocalizationCategory = {
  arcane_trickster: arcane_trickster_resources_es,
  assassin: assassin_resources_es,
  thief: thief_resources_es,

  inquisitive: inquisitive_resources_es,
  mastermind: mastermind_resources_es,
  scout: scout_resources_es,
  swashbuckler: swashbuckler_resources_es,

  phantom: phantom_resources_es,
  soulknife: soulknife_resources_es,
};

export const rogue_resources_es: GameLocalizationCategory = {
  ...subclass_resources,

  sneak_attack: {
    name: "Ataque Furtivo",
    description: `Te permite realizar daño adiciona en ataques con arma. Se recarga cada turno.`,
  },
  stroke_of_luck: {
    name: "Golpe de Suerte",
    description: `Te permite tener éxito en una tirada de ataque fallida o tratar el dado como un 20 en una tirada de habilidad fallida. Se recarga tras un descanso corto o largo.`,
  },
};

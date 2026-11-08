import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

import { berserker_features_es } from "@/services/localization/game/classes/barbarian/subclasses/berserker/es/es-berserker-features";
import { totem_warrior_features_es } from "@/services/localization/game/classes/barbarian/subclasses/totem-warrior/es/es-totem-warrior-features";
import { ancestral_guardian_features_es } from "./subclasses/ancestral-guardian/es/es-ancestral-guardian-features";
import { storm_herald_features_es } from "./subclasses/storm-herald/es/es-storm-herald-features";
import { zealot_features_es } from "./subclasses/zealot/es/es-zealot-features";
import { beast_features_es } from "./subclasses/beast/es/es-beast-features";
import { wild_magic_features_es } from "./subclasses/wild-magic/es/es-wild-magic-features";

const barbarian_subclass_features_es: GameLocalizationCategory = {
  ...berserker_features_es,
  ...totem_warrior_features_es,

  ...ancestral_guardian_features_es,
  ...storm_herald_features_es,
  ...zealot_features_es,

  ...beast_features_es,
  ...wild_magic_features_es,
};

export const barbarian_features_es: GameLocalizationCategory = {
  "barbarian.rage": {
    name: "Furia",
    description: "",
  },
  "barbarian.unarmored_defense": {
    name: "Defensa sin Armadura",
    description: "",
  },
  "barbarian.reckless_attack": {
    name: "Ataque Temerario",
    description: "",
  },
  "barbarian.danger_sense": {
    name: "Sentido del Peligro",
    description: "",
  },
  "barbarian.primal_path": {
    name: "Senda de Barbaro",
    description: "",
  },
  extra_attack: {
    name: "Ataque Adicional",
    description: "",
  },
  "barbarian.fast_movement": {
    name: "Movimiento Rápido",
    description: "",
  },
  "barbarian.feral_instinct": {
    name: "Instinto Salvaje",
    description: "",
  },
  "barbarian.brutal_critical": {
    name: "Crítico Brutal",
    description: "",
  },
  "barbarian.relentless_rage": {
    name: "Furia Implacable",
    description: "",
  },
  "barbarian.persistent_rage": {
    name: "Furia Persistente",
    description: "",
  },
  "barbarian.indomitable_might": {
    name: "Poder Indomable",
    description: "",
  },
  "barbarian.primal_champion": {
    name: "Campeón Primordial",
    description: "",
  },

  ...barbarian_subclass_features_es,
};

import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

import { berserker_features_en } from "@/services/localization/game/classes/barbarian/subclasses/berserker/en/en-berserker-features";
import { totem_warrior_features_en } from "@/services/localization/game/classes/barbarian/subclasses/totem-warrior/en/en-totem-warrior-features";
import { ancestral_guardian_features_en } from "./subclasses/ancestral-guardian/en/en-ancestral-guardian-features";
import { storm_herald_features_en } from "./subclasses/storm-herald/en/en-storm-herald-features";
import { zealot_features_en } from "./subclasses/zealot/en/en-zealot-features";
import { beast_features_en } from "./subclasses/beast/en/en-beast-features";
import { wild_magic_features_en } from "./subclasses/wild-magic/en/en-wild-magic-features";

const barbarian_subclass_features_en: GameLocalizationCategory = {
  ...berserker_features_en,
  ...totem_warrior_features_en,
  ...ancestral_guardian_features_en,
  ...storm_herald_features_en,
  ...zealot_features_en,
  ...beast_features_en,
  ...wild_magic_features_en,
};

export const barbarian_features_en: GameLocalizationCategory = {
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

  ...barbarian_subclass_features_en,
};

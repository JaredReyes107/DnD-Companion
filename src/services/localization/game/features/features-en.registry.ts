import { GameLocalization } from "@/services/localization/game-localization.types";

import { barbarian_features_en } from "@/services/localization/game/classes/barbarian/en-barbarian-features";
import { bard_features_en } from "../classes/bard/en/bard-features-en";
import { cleric_features_en } from "../classes/cleric/en/cleric-features-en";
import { druid_features_en } from "../classes/druid/en/druid-features-en";
import { fighter_features_en } from "../classes/fighter/en/fighter-features-en";
import { monk_features_en } from "../classes/monk/en/monk-features-en";
import { paladin_features_en } from "../classes/paladin/en/paladin-features-en";
import { ranger_features_en } from "../classes/ranger/en/ranger-features-en";
import { rogue_features_en } from "../classes/rogue/en/rogue-features-en";
import { sorcerer_features_en } from "../classes/sorcerer/en/sorcerer-features-en";

export const features_en: GameLocalization = {
  features: {
    ...barbarian_features_en,
    ...bard_features_en,
    ...cleric_features_en,
    ...druid_features_en,
    ...fighter_features_en,
    ...monk_features_en,
    ...paladin_features_en,
    ...ranger_features_en,
    ...rogue_features_en,
    ...sorcerer_features_en,
  },
};

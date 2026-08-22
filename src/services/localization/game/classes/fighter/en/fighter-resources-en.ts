import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

import { battle_master_resources_en } from "../subclasses/battle-master/en/battle-master-resources-en";
import { champion_resources_en } from "../subclasses/champion/en/champion-resources-en";
import { eldritch_knight_resources_en } from "../subclasses/eldritch-knight/en/eldritch-knight-resources-en";

import { arcane_archer_resources_en } from "../subclasses/arcane-archer/en/arcane-archer-resources-en";
import { cavalier_resources_en } from "../subclasses/cavalier/en/cavalier-resources-en";
import { samurai_resources_en } from "../subclasses/samurai/en/samurai-resources-en";

import { psi_warrior_resources_en } from "../subclasses/psi-warrior/en/psi-warrior-resources-en";
import { rune_knight_resources_en } from "../subclasses/rune-knight/en/rune-knight-resources-en";

const subclass_resources: GameLocalizationCategory = {
  //PHB
  ...battle_master_resources_en,
  ...champion_resources_en,
  ...eldritch_knight_resources_en,

  // XGE
  ...arcane_archer_resources_en,
  ...cavalier_resources_en,
  ...samurai_resources_en,

  // TCE
  ...psi_warrior_resources_en,
  ...rune_knight_resources_en,
};

export const fighter_resources_en: GameLocalizationCategory = {
  ...subclass_resources,

  second_wind: {
    name: "Second Wind",
    description:
      "You can use a bonus action to regain hit points equal to 1d10 + your fighter level. Once you use this feature, you must finish a short or long rest before you can use it again.",
  },
  action_surge: {
    name: "Action Surge",
    description:
      "On your turn, you can take one additional action. You regain all uses on a short or long rest.",
  },
  indomitable: {
    name: "Indomitable",
    description: `Reroll a saving throw you failed. You must use the new roll. It recharges when you finish a long rest.`,
  },
};

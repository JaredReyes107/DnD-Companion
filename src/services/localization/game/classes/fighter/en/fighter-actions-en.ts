import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

import { battle_master_en } from "../subclasses/battle-master/en/battle-master-en";
import { champion_actions_en } from "../subclasses/champion/en/champion-actions-en";
import { eldritch_knight_actions_en } from "../subclasses/eldritch-knight/en/eldritch-knight-actions-en";

import { arcane_archer_actions_en } from "../subclasses/arcane-archer/en/arcane-archer-actions-en";
import { cavalier_actions_en } from "../subclasses/cavalier/en/cavalier-actions-en";
import { samurai_actions_en } from "../subclasses/samurai/en/samurai-actions-en";

import { psi_warrior_actions_en } from "../subclasses/psi-warrior/en/psi-warrior-actions-en";
import { rune_knight_actions_en } from "../subclasses/rune-knight/en/rune-knight-actions-en";

const subclass_actions: GameLocalizationCategory = {
  // PHB
  ...battle_master_en,
  ...champion_actions_en,
  ...eldritch_knight_actions_en,

  // Xanathar's
  ...arcane_archer_actions_en,
  ...cavalier_actions_en,
  ...samurai_actions_en,

  // Tasha's
  ...psi_warrior_actions_en,
  ...rune_knight_actions_en,
};

export const fighter_actions_en: GameLocalizationCategory = {
  ...subclass_actions,

  second_wind: {
    name: "Second Wind",
    description:
      "You can use a bonus action to regain hit points equal to 1d10 + your fighter level.",
  },
  action_surge: {
    name: "Action Surge",
    description: "On your turn, you can take one additional action.",
  },
  indomitable: {
    name: "Indomitable",
    description: "Reroll a saving throw you failed. You must use the new roll.",
  },
};

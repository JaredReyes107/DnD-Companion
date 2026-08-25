import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

import { arcane_trickster_actions_en } from "../subclasses/arcane-trickster/en/arcane-trickster-actions-en";
import { assassin_actions_en } from "../subclasses/assassin/en/assassin-actions-en";
import { thief_actions_en } from "../subclasses/thief/en/thief-actions-en";

import { inquisitive_actions_en } from "../subclasses/inquisitive/en/inquisitive-actions-en";
import { mastermind_actions_en } from "../subclasses/mastermind/en/mastermind-actions-en";
import { scout_actions_en } from "../subclasses/scout/en/scout-actions-en";
import { swashbuckler_actions_en } from "../subclasses/swashbuckler/en/swashbuckler-actions-en";

import { phantom_actions_en } from "../subclasses/phantom/en/phantom-actions-en";
import { soulknife_actions_en } from "../subclasses/soulknife/en/soulknife-actions-en";

export const subclass_actions: GameLocalizationCategory = {
  arcane_trickster: arcane_trickster_actions_en,
  assassin: assassin_actions_en,
  thief: thief_actions_en,

  inquisitive: inquisitive_actions_en,
  mastermind: mastermind_actions_en,
  scout: scout_actions_en,
  swashbuckler: swashbuckler_actions_en,

  phantom: phantom_actions_en,
  soulknife: soulknife_actions_en,
};

export const rogue_actions_en: GameLocalizationCategory = {
  ...subclass_actions,

  sneak_attack: {
    name: "Sneak Attack",
    description: `You deal an extra 1d6 damage to one creature you hit with an attack if you have advantage on the attack roll. The attack must use a finesse or a ranged weapon. This damage increases by 1d6 at every odd level.`,
  },
  dash: {
    name: "Dash",
    description: `You take the 'Dash' action.`,
  },
  disengage: {
    name: "Disengage",
    description: `You take the 'Disengage' action.`,
  },
  hide: {
    name: "Hide",
    description: `You take the 'Hide' action.`,
  },
  uncanny_dodge: {
    name: "Uncanny Dodge",
    description: `When an attacker that you can see hits you with an attack, you can use your reaction to halve the attack's damage against you.`,
  },
  stroke_of_luck: {
    name: "Uncanny Dodge",
    description: `You turn a missed attack into a hit or turn a failed ability check into a d20 on the roll.`,
  },
};

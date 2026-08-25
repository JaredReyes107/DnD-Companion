import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

import { arcane_trickster_resources_en } from "../subclasses/arcane-trickster/en/arcane-trickster-resources-en";
import { assassin_resources_en } from "../subclasses/assassin/en/assassin-resources-en";
import { thief_resources_en } from "../subclasses/thief/en/thief-resources-en";

import { inquisitive_resources_en } from "../subclasses/inquisitive/en/inquisitive-resources-en";
import { mastermind_resources_en } from "../subclasses/mastermind/en/mastermind-resources-en";
import { scout_resources_en } from "../subclasses/scout/en/scout-resources-en";
import { swashbuckler_resources_en } from "../subclasses/swashbuckler/en/swashbuckler-resources-en";

import { phantom_resources_en } from "../subclasses/phantom/en/phantom-resources-en";
import { soulknife_resources_en } from "../subclasses/soulknife/en/soulknife-resources-en";

export const subclass_resources: GameLocalizationCategory = {
  arcane_trickster: arcane_trickster_resources_en,
  assassin: assassin_resources_en,
  thief: thief_resources_en,

  inquisitive: inquisitive_resources_en,
  mastermind: mastermind_resources_en,
  scout: scout_resources_en,
  swashbuckler: swashbuckler_resources_en,

  phantom: phantom_resources_en,
  soulknife: soulknife_resources_en,
};

export const rogue_resources_en: GameLocalizationCategory = {
  ...subclass_resources,

  sneak_attack: {
    name: "Sneak Attack",
    description: `It allows you to deal additional damage with a weapon attack. It recharges every turn.`,
  },
  stroke_of_luck: {
    name: "Stroke of Luck",
    description: `It allows you to succeed a missed attack or turn a missed ability check into a 20. It recharges on a short or long rest.`,
  },
};

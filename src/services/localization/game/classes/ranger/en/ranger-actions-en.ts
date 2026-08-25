import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

import { beast_master_actions_es } from "../subclasses/beast-master/es/beast-master-actions-es";
import { hunter_actions_en } from "../subclasses/hunter/en/hunter-actions-en";

import { gloom_stalker_actions_en } from "../subclasses/gloom-stalker/en/gloom-stalker-actions-en";
import { horizon_walker_actions_en } from "../subclasses/horizon-walker/en/horizon-walker-actions-en";
import { monster_slayer_actions_en } from "../subclasses/monster-slayer/en/monster-slayer-actions-en";

import { fey_wanderer_actions_en } from "../subclasses/fey-wanderer/en/fey-wanderer-actions-en";
import { swarmkeeper_actions_en } from "../subclasses/swarmkeeper/en/swarmkeeper-actions-en";

const subclass_actions: GameLocalizationCategory = {
  // PHB
  ...beast_master_actions_es,
  ...hunter_actions_en,

  // Xanathar's
  ...gloom_stalker_actions_en,
  ...horizon_walker_actions_en,
  ...monster_slayer_actions_en,

  // Tasha's
  ...fey_wanderer_actions_en,
  ...swarmkeeper_actions_en,
};

export const ranger_actions_en: GameLocalizationCategory = {
  ...subclass_actions,

  primeval_awareness: {
    name: "Primeval Awareness",
    description: `For 1 minute per level of the spell slot you expend, you can sense whether the following types of creatures are present within 1 mile of you (or within up to 6 miles if you are in your favored terrain): aberrations, celestials, dragons, elementals, fey, fiends, and undead. This feature doesn’t reveal the creatures’ location or number.`,
  },
  hide_in_plain_sight: {
    name: "Hide in Plain Sight",
    description: `You spend 1 minute creating camouflage for yourself. You must have access to fresh mud, dirt, plants, soot, and other naturally occurring materials with which to create your camouflage.
      Once you are camouflaged in this way, you can try to hide by pressing yourself up against a solid surface, such as a tree or wall, that is at least as tall and wide as you are. You gain a +10 bonus to Dexterity (Stealth) checks as long as you remain there without moving or taking actions. Once you move or take an action or a reaction, you must camouflage yourself again to gain this benefit.`,
  },
  hide: {
    name: "Hide",
    description: `You take the 'Hide' action.`,
  },
  foe_slayer: {
    name: "Foe Slayer",
    description: `You add your Wisdom modifier to the attack roll or the damage roll of an attack you make against one of your favored enemies. You can choose to use this feature before or after the roll, but before any effects of the roll are applied.`,
  },
};

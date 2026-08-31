import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

import { archfey_resources_en } from "../subclasses/archfey/en/archfey-resources-en";
import { fiend_resources_en } from "../subclasses/fiend/en/fiend-resources-en";

import { great_old_one_resources_en } from "../subclasses/great-old-one/en/great-old-one-resources-en";
import { celestial_resources_en } from "../subclasses/celestial/en/celestial-resources-en";
import { hexblade_resources_en } from "../subclasses/hexblade/en/hexblade-resources-en";

import { fathomless_actions_en } from "../subclasses/fathomless/en/fathomless-actions-en";
import { genie_actions_en } from "../subclasses/genie/en/genie-actions-en";

const subclass_resources: GameLocalizationCategory = {
  // PHB
  ...archfey_resources_en,
  ...fiend_resources_en,
  ...great_old_one_resources_en,

  // XGE
  ...celestial_resources_en,
  ...hexblade_resources_en,

  // TCE
  ...fathomless_actions_en,
  ...genie_actions_en,
};

const invocations_resources: GameLocalizationCategory = {
  // PHB
  invocation_bewitching_whispers: {
    name: "Bewitching Whispers",
    description: `It allows you to spend one pact slot to cast the spell 'Compulsion'. It recharges after a long rest.`,
  },
  invocation_chains_of_carceri: {
    name: "Chains of Carceri",
    description: `It allows you to cast the spell 'Hold Monster' targeting a Celestial, Fiend or Elemental, without material components. It regains its uses over the same creature after a long rest.`,
  },
  invocation_dreadful_word: {
    name: "Dreadful Word",
    description: `It allows you to spend one pact slot to cast the spell 'Confusion'. It recharges after a long rest.`,
  },
  invocation_minions_of_chaos: {
    name: "Minions of Chaos",
    description: `It allows you to spend one pact slot to cast the spell 'Conjure Elemental'. It recharges after a long rest.`,
  },
  invocation_mire_the_mind: {
    name: "Mire the Mind",
    description: `It allows you to spend one pact slot to cast the spell 'Slow'. It recharges after a long rest.`,
  },
  invocation_sculptor_of_flesh: {
    name: "Sculptor of Flesh",
    description: `It allows you to spend one pact slot to cast the spell 'Polymorph'. It recharges after a long rest.`,
  },
  invocation_sign_of_ill_omen: {
    name: "Sign of Ill Omen",
    description: `It allows you to spend one pact slot to cast the spell 'Bestow Curse'. It recharges after a long rest.`,
  },
  invocation_thief_of_five_fates: {
    name: "Thief of Five Fates",
    description: `It allows you to spend one pact slot to cast the spell 'Bane'. It recharges after a long rest.`,
  },

  // XGE
  invocation_cloak_of_flies: {
    name: "Cloak of Flies",
    description: `Used to manifest an aura that damages nearby enemies and gives you advantage on Charisma (Intimidation) checks but disadvantage on all other Charisma checks. It recharges after a short or long rest.`,
  },
  invocation_eldritch_smite: {
    name: "Eldritch Smite",
    description: `It allows you to spend one pact slot to deal extra damage to a creature and knock it prone. It recharges every turn.`,
  },
  invocation_ghostly_gaze: {
    name: "Ghostly Gaze",
    description: `You can see through nearby objects nearby up to 1 minute or until you drop concentration. It recharges after a short or long rest.`,
  },
  invocation_gift_of_the_depths_water_breathing: {
    name: "Gift of the Depths",
    description: `It allows you to cast the spell 'Water Breathing' withouth expending a spell slot. It recharges after a long rest.`,
  },
  invocation_grasp_of_hadar: {
    name: "Grasp of Hadar",
    description: `Used to pull 10 feet closer to you in a straight line a creature you hit with 'Eldritch Blast'. It recharges at the start of your turn.`,
  },
  invocation_lance_of_lethargy: {
    name: "Lance of Lethargy",
    description: `Used to reduce the speed of a creature you hit with 'Eldritch Blast'. It recharges at the start of your turn.`,
  },
  invocation_tomb_of_levistus: {
    name: "Tomb of Levistus",
    description: `It encases you in ice to protect you from damage until the end of your next turn.`,
  },
  invocation_trickster_escape: {
    name: "Trickter's Escape",
    description: `You can cast 'Freedom of Movement' yourself without expending a spell slot. It recharges after a long rest.`,
  },

  // TCE
  invocation_bond_of_the_talisman: {
    name: "Bond of the Talisman",
    description: `Allows you and the wearer of the talisman (if it's different from you) to teleport to each other's location. It recharges after you take a long rest.`,
  },
  invocation_far_scribe_inscribed_names: {
    name: "Far Scribe: Inscribed Names",
    description: `The amount of names you have inscribed on your page granted by 'Far Scribe'.`,
  },
  invocation_gift_of_the_protectors_inscribed_names: {
    name: "Gift of the Protectors: Inscribed Name",
    description: `The amount of names you have inscribed on your page granted by 'Gift of the Protectors'.`,
  },
  invocation_gift_of_the_protectors_trigger: {
    name: "Gift of the Protectors: Inscribed Name",
    description: `The amount of times you can stop someone whose name is inscribed on your page granted by 'Gift of the Protectors' from falling unconscious.`,
  },
  invocation_protection_of_the_talisman: {
    name: "Protection of the Talisman",
    description: `It allows the wearer of the talisman to add a bonus to a failed saving throw it made. It recharges when you finish a long rest.`,
  },
  invocation_undying_servitude: {
    name: "Undying Servitude",
    description: `It allows you to spend one pact slot to cast the spell 'Animate Dead'. It recharges after a long rest.`,
  },
};

const pact_boon_resources: GameLocalizationCategory = {
  pact_of_the_talisman_aid: {
    name: "Aid of the Talisman",
    description: `It allows the wearer of the talisman to add a a bonus to a failed saving throw it made. It recharges when you finish a long rest.`,
  },
};

export const warlock_resources_en: GameLocalizationCategory = {
  ...subclass_resources,
  ...invocations_resources,
  ...pact_boon_resources,

  pact_slots: {
    name: "Pact Slots",
    description: `Used to cast spells. They are all of the same level, starting at level 1 and increasing by one each odd level to a maximum slot level of 5. They rechage on a short rest.`,
  },
  mystic_arcanum_6: {
    name: "Mystic Arcanum Lv. 6",
    description: `It allows you to cast your level 6 Mystic Arcanum spell. It recharges on a long rest.`,
  },
  mystic_arcanum_7: {
    name: "Mystic Arcanum Lv. 7",
    description: `It allows you to cast your level 7 Mystic Arcanum spell. It recharges on a long rest.`,
  },
  mystic_arcanum_8: {
    name: "Mystic Arcanum Lv. 8",
    description: `It allows you to cast your level 8 Mystic Arcanum spell. It recharges on a long rest.`,
  },
  mystic_arcanum_9: {
    name: "Mystic Arcanum Lv. 9",
    description: `It allows you to cast your level 9 Mystic Arcanum spell. It recharges on a long rest.`,
  },
  eldritch_master: {
    name: "Eldritch Master",
    description: `It allows you to recover all your pact slots after 1 minute. It recharges after a long rest.`,
  },
};

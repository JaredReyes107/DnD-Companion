import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

const subclass_actions: GameLocalizationCategory = {
  // PHB
  // Xanathar's
  // Tasha's
};

const metamagic_actions: GameLocalizationCategory = {
  metamagic_careful_spell: {
    name: "Metamagic: Careful Spell",
    description: `When you cast a spell that forces other creatures to make a saving throw, you spend 1 sorcery point to choose a number those creatures up to your Charisma modifier (minimum of one creature) and make them automatically succeed on their saving throw against the spell.`,
  },
  metamagic_distant_spell: {
    name: "Metamagic: Distant Spell",
    description: `When you cast a spell that has a range of 5 feet or greater, you spend 1 sorcery point to double it's range. 
      If you instead cast a spell that has a range of touch, it instead makes the range of the spell 30 feet.`,
  },
  metamagic_empowered_spell: {
    name: "Metamagic: Empowered Spell",
    description: `When you roll damage for a spell, you can spend 1 sorcery point to reroll a number of the damage dice up to your Charisma modifier (minimum of one). You must use the new rolls. You can use Empowered Spell even if you have already used a different Metamagic option during the casting of the spell.`,
  },
  metamagic_extended_spell: {
    name: "Metamagic: Extended Spell",
    description: `When you cast a spell that has a duration of 1 minute or longer, you can spend 1 sorcery point to double its duration, to a maximum duration of 24 hours.`,
  },
  metamagic_heightened_spell: {
    name: "Metamagic: Heightened Spell",
    description: `When you cast a spell that forces a creature to make a saving throw to resist its effects, you can spend 3 sorcery points to give one target of the spell disadvantage on its first saving throw made against the spell.`,
  },
  metamagic_quickened_spell: {
    name: "Metamagic: Quickened Spell",
    description: `When you cast a spell that has a casting time of 1 action, you can spend 2 sorcery points to change the casting time to 1 bonus action for this casting.`,
  },
  metamagic_subtle_spell: {
    name: "Metamagic: Subtle Spell",
    description: `When you cast a spell, you can spend 1 sorcery point to cast it without any somatic or verbal components.`,
  },
  metamagic_twinned_spell: {
    name: "Metamagic: Twinned Spell",
    description: `When you cast a spell that targets only one creature and doesn't have a range of self, you can spend a number of sorcery points equal to the spell's level to target a second creature in range with the same spell (1 sorcery point if the spell is a cantrip). To be eligible, a spell must be incapable of targeting more than one creature at the spell's current level. For example, magic missile and scorching ray aren't eligible, but ray of frost and chromatic orb are.`,
  },

  //Seeking + Transmuted
};

export const sorcerer_actions_en: GameLocalizationCategory = {
  ...subclass_actions,
  ...metamagic_actions,

  font_of_magic_to_spellslots: {
    name: "Create Spell Slot",
    description: `You create a spell slot of level 5 or less using sorcery points, using the next costs:
      - 1st level: 2 sorcery points.
      - 2nd level: 3 sorcery points.
      - 3rd level: 5 sorcery points.
      - 4th level: 6 sorcery points.
      - 5th level: 7 sorcery points.`,
  },
  font_of_magic_from_spellslots: {
    name: "Converting a Spell Slot to Sorcery Points",
    description: `You expend one spell slot and gain a number of sorcery points equal to the slot's level.`,
  },
};

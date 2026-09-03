import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const scribes_actions_en: GameLocalizationCategory = {
  wizardly_quill_create: {
    name: "Create Wizardly Quill",
    description: `You magically create a Tiny quill in your free hand. The magic quill has the following properties:
        - The quill doesn't require ink. When you write with it, it produces ink in a color of your choice on the writing surface.
        - The time you must spend to copy a spell into your spell book equals 2 minutes per spell level if you use the quill for the transcription.
        - You can erase anything you write with the quill if you wave the feather over the text as a bonus action, provided the text is within 5 feet of you.
    This quill disappears if you create another one or if you die.`,
  },
  awakened_spellbook_swap_damage_type: {
    name: "Swap Spell Damage Type",
    description: `WhenYou replace the damage type of a wizard spell you cast with a spell slot with a type that appears in another spell in your spellbook that's the same level as the spell slot you expend.`,
  },
  awakened_spellbook_fast_ritual: {
    name: "Fast Ritual",
    description: `You cast a wizard spell as a ritual using the spell's normal casting time, rather than adding 10 minutes to it.`,
  },
  manifest_mind_summon: {
    name: "Manifested Mind: Summon",
    description: `While you Awakened Book is in your person, you cause it's mind to manifest as a Tiny spectral object, hovering in an unoccupied space of your choice within 60 feet of you. The spectral mind is intangible and doesn't occupy its space, and it sheds dim light in a 10-foot radius. It looks like a ghostly tome, a cascade of text, or a scholar from the past (your choice).
        While manifested, the spectral mind can hear and see, and it has darkvision with a range of 60 feet. The mind can telepathically share with you what it sees and hears (no action required).
        The spectral mind stops manifesting if it is ever more than 300 feet away from you, if someone casts Dispel Magic on it, if the Awakened Spellbook is destroyed, if you die, or if you dismiss the spectral mind as a bonus action.`,
  },
  manifest_mind_move: {
    name: "Manifested Mind: Move",
    description: `You cause your spectral mind to hover up to 30 feet to an unoccupied space that you or it can see. It can pass through creatures but not objects.`,
  },
  manifest_mind_dismiss: {
    name: "Manifested Mind: Dismiss",
    description: `You dismiss the spectral mind.`,
  },
  manifest_mind_cast_through: {
    name: "Manifested Mind: Cast Through",
    description: `On your turn, you cast a wizard spell as if you were in the spectral mind's space, instead of your own, using its senses.`,
  },
  master_scrivener: {
    name: "Master Scrivener",
    description: `You create a spell scroll for a spell on your Awakened Spellbook that's of 1st or 2nd level and has a casting time of 1 action, and is casted at one level higher than normal when you use it. Only you are able to use it, and it vanishes after you cast the spell on it or when you finish your next long rest.`,
  },
  one_with_the_word: {
    name: "One with the Word",
    description: `You prevent all the damage of one instance while your spellbook's mind is manifested. Then, your spellbook temporarily loses spells of your choice that have a combined spell level equal to 3d6 or higher.
        Until you finish 1d6 long rests, you are incapable of casting the lost spells, even if you find them on a scroll or in another spellbook. After you finish the required number of rests, the spells reappear in the spell book.`,
  },
};

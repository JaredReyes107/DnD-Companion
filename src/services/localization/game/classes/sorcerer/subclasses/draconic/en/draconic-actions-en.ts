import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const draconic_actions_en: GameLocalizationCategory = {
  elemental_affinity_damage: {
    name: "Elemental Affinity: Damage",
    description: `When you cast a spell that deals damage of the type associated with your draconic ancestry, you add your Charisma modifier to that damage.`,
  },
  elemental_affinity_resistance: {
    name: "Elemental Affinity: Resistence",
    description: `When you cast a spell that deals damage of the type associated with your draconic ancestry, you can spend 1 sorcery point to gain resistance to that damage type for 1 hour.`,
  },
  dragon_wings_manifest: {
    name: "Dragon Wings: Manifest",
    description: `You sprout dragon wings from your back, gaining a flying speed equal to your current speed. It lasts unitl dismissed.
      You can't manifest your wings while wearing armor unless the armor is made to accommodate them, and clothing not made to accommodate your wings might be destroyed when you manifest them.`,
  },
  dragon_wings_dismiss: {
    name: "Dragon Wings: Dismiss",
    description: `You dismiss your dragon wings.`,
  },
  draconic_presence: {
    name: "Draconic Presence",
    description: `You exude a powerful aura of awe or fear (your choice) with a radius of 60 feet. For 1 minute or until you lose concentration on this effect, eachi hostile creature that starts it's turn in the aura must succeed on a Wisdowm saving throw or be charmed (if you chose awe) or frightened (if you chose fear) until the aura ends.`,
  },
};

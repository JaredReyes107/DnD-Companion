import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const land_features_en: GameLocalizationCategory = {
  bonus_cantrip: {
    name: "Bonus Cantrip",
    description: "You learn one additional druid cantrip of your choice. This cantrip doesn't count against the number of druid cantrips you know.",
  },
  circle_spells: {
    name: "Circle Spells",
    description: "Your mystical connection to the land infuses you with the ability to cast certain spells. At 3rd, 5th, 7th, and 9th level you gain access to circle spells connected to the land where you became a druid. Choose that land—arctic, coast, desert, forest, grassland, mountain, swamp, or Underdark—and consult the associated list of spells. Once you gain access to a circle spell, you always have it prepared, and it doesn't count against the number of spells you can prepare each day. If you gain access to a spell that doesn't appear on the druid spell list, the spell is nonetheless a druid spell for you.",
  },
  natural_recovery: {
    name: "Natural Recovery",
    description: "You can regain some of your magical energy by sitting in meditation and communing with nature. During a short rest, you choose expended spell slots to recover. The spell slots can have a combined level that is equal to or less than half your druid level (rounded up), and none of the slots can be 6th level or higher. You can't use this feature again until you finish a long rest. For example, when you are a 4th-level druid, you can recover up to two levels worth of spell slots. You can recover either a 2nd-level slot or two 1st-level slots.",
  },
  lands_stride: {
    name: "Land's Stride",
    description: "Moving through nonmagical difficult terrain costs you no extra movement. You can also pass through nonmagical plants without being slowed by them and without taking damage from them if they have thorns, spines, or a similar hazard. In addition, you have advantage on saving throws against plants that are magically created or manipulated to impede movement, such as those created by the entangle spell.",
  },
  natures_ward: {
    name: "Nature's Ward",
    description: "You can't be charmed or frightened by elementals or fey, and you are immune to poison and disease.",
  },
  natures_sanctuary: {
    name: "Nature's Sanctuary",
    description: "Creatures of the natural world sense your connection to nature and become hesitant to attack you. When a beast or plant creature attacks you, that creature must make a Wisdom saving throw against your druid spell save DC. On a failed save, the creature must choose a different target, or the attack automatically misses. On a successful save, the creature is immune to this effect for 24 hours. The creature is aware of this effect before it makes its attack against you.",
  },
};

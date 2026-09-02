import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const evocation_features_en: GameLocalizationCategory = {
  evocation_savant: {
    name: "Evocation Savant",
    description:
      "The gold and time you must spend to copy an evocation spell into your spellbook is halved.",
  },
  sculpt_spells: {
    name: "Sculpt Spells",
    description:
      "You can create pockets of relative safety within the effects of your evocation spells. When you cast an evocation spell that affects other creatures that you can see, you can choose a number of them equal to 1 + the spell's level. The chosen creatures automatically succeed on their saving throws against the spell, and they take no damage if they would normally take half damage on a successful save.",
  },
  potent_cantrip: {
    name: "Potent Cantrip",
    description:
      "Your damaging cantrips affect even creatures that avoid the brunt of the effect. When a creature succeeds on a saving throw against your cantrip, the creature takes half the cantrip's damage (if any) but suffers no additional effect from the cantrip.",
  },
  empowered_evocation: {
    name: "Empowered Evocation",
    description:
      "You can add your Intelligence modifier to one damage roll of any wizard evocation spell you cast.",
  },
  overchannel: {
    name: "Overchannel",
    description:
      "You can increase the power of your simpler spells. When you cast a wizard spell of 1st through 5th-level that deals damage, you can deal maximum damage with that spell. The first time you do so, you suffer no adverse effect. If you use this feature again before you finish a long rest, you take 2d12 necrotic damage for each level of the spell, immediately after you cast it. Each time you use this feature again before finishing a long rest, the necrotic damage per spell level increases by 1d12. This damage ignores resistance and immunity.",
  },
};

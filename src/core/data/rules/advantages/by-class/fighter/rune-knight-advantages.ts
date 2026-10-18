import { AdvantageTemplate } from "@/core/entities/rules/advantage/advantage-template";
import { P } from "@/core/entities/rules/predicate/predicate";

const charged = (id: string) => P.resourceAtLeast(id, 1);

export const RUNE_KNIGHT_ADVANTAGES: Record<string, AdvantageTemplate> = {
  cloud_rune_passive: {
    id: "cloud_rune_passive",
    sourceId: "cloud_rune",
    nodeIds: ["sleight_of_hand", "deception"],
    polarity: "advantage",
    condition: charged("cloud_rune"),
  },
  frost_rune_passive: {
    id: "frost_rune_passive",
    sourceId: "frost_rune",
    nodeIds: ["animal_handling", "intimidation"],
    polarity: "advantage",
    condition: charged("frost_rune"),
  },
  stone_rune_passive: {
    id: "stone_rune_passive",
    sourceId: "stone_rune",
    nodeIds: ["insight"],
    polarity: "advantage",
    condition: charged("stone_rune"),
  },
  storm_rune_passive: {
    id: "storm_rune_passive",
    sourceId: "storm_rune",
    nodeIds: ["arcana"],
    polarity: "advantage",
    condition: charged("storm_rune"),
  },
};

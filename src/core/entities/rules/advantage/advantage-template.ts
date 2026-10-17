import { Predicate } from "@/core/entities/rules/predicate/predicate";
import { AdvantagePolarity } from "./advantage-instance";

export type AdvantageTemplate = {
  id: string;
  sourceId: string;
  nodeIds: string[]; // one template can cover several nodes (Cloud Rune: 2 skills)
  polarity: AdvantagePolarity;
  condition?: Predicate;
  tags?: string[];
};

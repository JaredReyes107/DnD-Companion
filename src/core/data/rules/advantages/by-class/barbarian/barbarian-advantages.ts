import { AdvantageTemplate } from "@/core/entities/rules/advantage/advantage-template";
import { P } from "@/core/entities/rules/predicate/predicate";

export const BARBARIAN_ADVANTAGES: Record<string, AdvantageTemplate> = {
  danger_sense_dex_saves: {
    id: "danger_sense_dex_saves",
    sourceId: "danger_sense",
    nodeIds: ["savingThrow.DEX"],
    polarity: "advantage",
    // "Effects you can see" is not modeled.
    condition: P.all(
      P.status("blinded", false),
      P.status("deafened", false),
      P.status("incapacitated", false),
    ),
  },
  feral_instinct_initiative: {
    id: "feral_instinct_initiative",
    sourceId: "feral_instinct",
    nodeIds: ["initiative"],
    polarity: "advantage",
  },
};

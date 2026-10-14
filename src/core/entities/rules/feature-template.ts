import { LanguageMode } from "../character/language-state";
import { AdvantagePolarity } from "@/core/entities/rules/advantage/advantage-instance";
import { Condition } from "@/core/entities/modifiers/Condition";

export type FeatureGrant =
  | { type: "resource"; id: string }
  | { type: "action"; id: string }
  | { type: "modifier"; id: string }
  | { type: "choice"; id: string }
  | { type: "proficiency"; nodeId: string }
  | { type: "language"; nodeId: string; modes: LanguageMode[] }
  // `condition` — when set, the advantage instance is installed with that
  // condition; it counts toward resolution only when the condition is true.
  // Used for resource-gated passives (rune passives active while charged).
  | {
      type: "advantage";
      nodeId: string;
      polarity: AdvantagePolarity;
      condition?: Condition;
    };

export type FeatureTemplate = {
  id: string;
  source: "class" | "subclass" | "race" | "feat" | "background" | "other";
  classId?: string;
  level?: number;
  tags?: string[];

  grants?: FeatureGrant[];
};

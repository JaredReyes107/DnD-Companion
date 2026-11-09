import { LanguageMode } from "../character/language-state";
import type { Num } from "./expr/expr";

export type FeatureGrant =
  | { type: "resource"; id: string }
  | { type: "action"; id: string }
  | { type: "modifier"; id: string }
  | { type: "feature"; id: string }
  | { type: "choice"; id: string; picks?: Num }
  | { type: "proficiency"; nodeId: string }
  | { type: "language"; nodeId: string; modes: LanguageMode[] }
  | { type: "advantage"; id: string }
  | { type: "override"; id: string };

export type FeatureTemplate = {
  id: string;
  source: "class" | "subclass" | "race" | "feat" | "background" | "other";
  classId?: string;
  level?: number;
  tags?: string[];

  appliesTo?: "primary" | "multiclass";
  grants?: FeatureGrant[];
};

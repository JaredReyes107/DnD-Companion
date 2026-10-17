import { LanguageMode } from "../character/language-state";

export type FeatureGrant =
  | { type: "resource"; id: string }
  | { type: "action"; id: string }
  | { type: "modifier"; id: string }
  | { type: "choice"; id: string }
  | { type: "proficiency"; nodeId: string }
  | { type: "language"; nodeId: string; modes: LanguageMode[] }
  | { type: "advantage"; id: string };

export type FeatureTemplate = {
  id: string;
  source: "class" | "subclass" | "race" | "feat" | "background" | "other";
  classId?: string;
  level?: number;
  tags?: string[];

  grants?: FeatureGrant[];
};

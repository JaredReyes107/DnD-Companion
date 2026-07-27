export type FeatureGrant =
  | { type: "resource"; id: string }
  | { type: "action"; id: string }
  | { type: "modifier"; id: string }
  | { type: "choice"; id: string };

export type FeatureTemplate = {
  id: string;
  source: "class" | "subclass" | "race" | "feat" | "background" | "other";
  classId?: string;
  level?: number;
  tags?: string[];

  grants?: FeatureGrant[];
};

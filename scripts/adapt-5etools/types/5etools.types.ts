export type FiveEToolsClassFeatureRef =
  | string // "Second Wind|Fighter|PHB|1"
  | {
      classFeature: string;
      gainSubclassFeature: true;
    };

export type FiveEToolsEntry = string | { type: string; [key: string]: unknown };

export type FiveEToolsClassFeature = {
  name: string;
  source: string;
  className: string;
  classSource: string;
  level: number;
  entries: FiveEToolsEntry[];
  isClassFeatureVariant?: boolean;
};

export type FiveEToolsClass = {
  name: string;
  source: string;
  hd: { number: number; faces: number };
  proficiency: string[]; // saving throws: ["str", "con"]
  spellcastingAbility?: string;
  casterProgression?: "full" | "1/2" | "1/3" | "pact";
  classFeatures: FiveEToolsClassFeatureRef[];
};

export type FiveEToolsSubclassFeatureRef = string;

export type FiveEToolsSubclass = {
  name: string;
  shortName: string;
  source: string;
  className: string;
  classSource: string;
  casterProgression?: "full" | "1/2" | "1/3" | "pact";
  spellcastingAbility?: string;
  subclassFeatures: FiveEToolsSubclassFeatureRef[];
};

export type FiveEToolsSubclassFeature = {
  name: string;
  source: string;
  className: string;
  subclassShortName: string;
  level: number;
  entries: FiveEToolsEntry[];
};

export type FiveEToolsFile = {
  class?: FiveEToolsClass[];
  classFeature?: FiveEToolsClassFeature[];
  subclass?: FiveEToolsSubclass[];
  subclassFeature?: FiveEToolsSubclassFeature[];
};

export type LanguageClassification = "standard" | "exotic";

export type LanguageNode = {
  id: string;
  parentIds: string[]; // dialect hierarchy only — e.g. Ignan -> Primordial
  classification: LanguageClassification;
};

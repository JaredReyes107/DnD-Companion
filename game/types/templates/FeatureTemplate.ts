/* eslint-disable prettier/prettier */
export type FeatureDefinition = {
  id: string;
  label: string;

  level: number;

  source: "class" | "subclass" | "race" | "feat" | "background" | "other";

  description: string;

  tags?: string[]; // "combat", "passive", "resource", "movement", etc.

  grantsResources?: string[]; // ids of ResourceDefinitions
};

import { FeatureInstance } from "@/core/entities/features/feature-instance";

export type RaceTemplate = {
  id: string;
  name: string;
  description: string;

  features: Record<string, FeatureInstance>;
};

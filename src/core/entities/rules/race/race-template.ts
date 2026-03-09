import { FeatureInstance } from "@/core/entities/features/feature-instance";
import { ResourceInstance } from "@/core/entities/resources/resource-instance";
import { ActionInstance } from "@/core/entities/actions/action-instance";

export type RaceTemplate = {
  id: string;
  name: string;
  description: string;

  features: Record<string, FeatureInstance>;
  resources: Record<string, ResourceInstance>;
  actions: Record<string, ActionInstance>;
};

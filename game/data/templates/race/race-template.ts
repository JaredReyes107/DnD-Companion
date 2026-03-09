import { FeatureInstance } from "@/game/domain/features/feature-instance";
import { ResourceInstance } from "@/game/domain/resources/resource-instance";
import { ActionInstance } from "@/game/domain/actions/action-instance";

export type RaceTemplate = {
  id: string;
  name: string;
  description: string;

  features: Record<string, FeatureInstance>;
  resources: Record<string, ResourceInstance>;
  actions: Record<string, ActionInstance>;
};

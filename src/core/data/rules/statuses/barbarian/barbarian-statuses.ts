import { StatusTemplate } from "@/core/entities/rules/status/status-template";

export const BARBARIAN_STATUSES: Record<string, StatusTemplate> = {
  //TODO: Auto-end on 0 HP (unconscious)
  //TODO: Log. End if didn't attack
  //TODO: block new concentrations & casting
  raging: { id: "raging", tags: ["rage"], bindsSourceEffects: true },
  reckless: { id: "reckless" },
};

import { StatModifierTemplate } from "@/core/entities/rules/stats.types";

export const BARD_MODIFIERS: Record<string, StatModifierTemplate> = {
  mantle_of_majesty_active: {
    id: "mantle_of_majesty_active",
    sourceId: "mantle_of_majesty",
    statModel: { type: "custom", key: "isActive" },
    mode: "add",
    value: 0,
  },
};

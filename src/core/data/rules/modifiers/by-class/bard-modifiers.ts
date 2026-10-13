import {
  ModifierTemplate,
  ModifierType,
} from "@/core/entities/modifiers/Modifier";

export const BARD_MODIFIERS: Record<string, ModifierTemplate> = {
  mantle_of_majesty_active: {
    id: "mantle_of_majesty_active",
    sourceId: "mantle_of_majesty",
    statModel: { type: "custom", key: "isActive" },
    type: ModifierType.ADDITIVE,
    value: 0,
  },
};

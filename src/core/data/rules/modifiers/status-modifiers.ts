import {
  ModifierTemplate,
  ModifierType,
} from "@/core/entities/modifiers/Modifier";

export const STATUS_MODIFIERS: Record<string, ModifierTemplate> = {
  status_speed_zero: {
    id: "status_speed_zero",
    sourceId: "status",
    statModel: { type: "derived", key: "speed" },
    type: ModifierType.CAP,
    value: 0,
  },
};

import { StatusTemplate } from "@/core/entities/rules/status/status-template";

export const RUNE_KNIGHT_STATUSES: Record<string, StatusTemplate> = {
  giants_might_active: {
    id: "giants_might_active",
    kind: "buff",
    grants: [{ type: "advantage", id: "giants_might_str" }],
  }, // Large size, extra damage: descriptive
  frost_rune_active: {
    id: "frost_rune_active",
    kind: "buff",
    grants: [
      { type: "modifier", id: "frost_rune_str_checks" },
      { type: "modifier", id: "frost_rune_str_saves" },
      { type: "modifier", id: "frost_rune_con_checks" },
      { type: "modifier", id: "frost_rune_con_saves" },
    ],
  },
  hill_rune_active: { id: "hill_rune_active", kind: "buff" }, // B/P/S resistance: descriptive
  storm_rune_active: { id: "storm_rune_active", kind: "buff" },
};

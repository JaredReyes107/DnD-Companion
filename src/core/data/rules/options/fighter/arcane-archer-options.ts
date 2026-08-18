import { OptionTemplate } from "@/core/entities/rules/option-template";

export const ARCANE_ARCHER_OPTIONS: Record<string, OptionTemplate> = {
  banishing_arrow: {
    id: "banishing_arrow",
    poolIds: ["arcane_shots_known"],
    tags: ["combat", "control"],
    grants: [{ type: "action", id: "banishing_arrow" }],
  },
  beguiling_arrow: {
    id: "beguiling_arrow",
    poolIds: ["arcane_shots_known"],
    tags: ["combat", "control"],
    grants: [{ type: "action", id: "beguiling_arrow" }],
  },
  bursting_arrow: {
    id: "bursting_arrow",
    poolIds: ["arcane_shots_known"],
    tags: ["combat", "damage", "aoe"],
    grants: [{ type: "action", id: "bursting_arrow" }],
  },
  enfeebling_arrow: {
    id: "enfeebling_arrow",
    poolIds: ["arcane_shots_known"],
    tags: ["combat", "debuff"],
    grants: [{ type: "action", id: "enfeebling_arrow" }],
  },
  grasping_arrow: {
    id: "grasping_arrow",
    poolIds: ["arcane_shots_known"],
    tags: ["combat", "control", "terrain"],
    grants: [{ type: "action", id: "grasping_arrow" }],
  },
  piercing_arrow: {
    id: "piercing_arrow",
    poolIds: ["arcane_shots_known"],
    tags: ["combat", "damage"],
    grants: [{ type: "action", id: "piercing_arrow" }],
  },
  seeking_arrow: {
    id: "seeking_arrow",
    poolIds: ["arcane_shots_known"],
    tags: ["combat", "accuracy"],
    grants: [{ type: "action", id: "seeking_arrow" }],
  },
  shadow_arrow: {
    id: "shadow_arrow",
    poolIds: ["arcane_shots_known"],
    tags: ["combat", "utility", "stealth"],
    grants: [{ type: "action", id: "shadow_arrow" }],
  },
};

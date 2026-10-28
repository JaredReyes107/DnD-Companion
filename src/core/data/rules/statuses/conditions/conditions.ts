import { StatusTemplate } from "@/core/entities/rules/status/status-template";

const condition = (id: string): [string, StatusTemplate] => [
  id,
  { id, kind: "condition" },
];
export const CONDITION_STATUSES: Record<string, StatusTemplate> = {
  grappled: {
    id: "grappled",
    kind: "condition",
    grants: [{ type: "modifier", id: "status_speed_zero" }],
  },
  restrained: {
    id: "restrained",
    kind: "condition",
    grants: [{ type: "modifier", id: "status_speed_zero" }],
  },
  ...Object.fromEntries(
    [
      "hidden",
      "blinded",
      "charmed",
      "deafened",
      "frightened",
      "incapacitated",
      "invisible",
      "paralyzed",
      "petrified",
      "poisoned",
      "prone",
      "stunned",
      "unconscious",
    ].map(condition),
  ),
};

export const CORE_STATUSES: Record<string, StatusTemplate> = {
  concentrating: {
    id: "concentrating",
    kind: "buff",
    tags: ["concentration"],
    limitStat: "concentrationLimit",
    bindsSourceEffects: true,
    defaultExpiry: [{ type: "onZeroHp" }],
  },
};

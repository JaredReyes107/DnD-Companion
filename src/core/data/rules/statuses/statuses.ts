import { StatusTemplate } from "@/core/entities/rules/status/status-template";
import { FIGHTER_STATUSES } from "./fighter/fighter-statuses";

const plain = (id: string): [string, StatusTemplate] => [id, { id }];

const CLASS_FEATURE_STATUSES: Record<string, StatusTemplate> = {
  ...FIGHTER_STATUSES,
};

export const BASE_STATUSES: Record<string, StatusTemplate> = {
  ...CLASS_FEATURE_STATUSES,

  concentrating: {
    id: "concentrating",
    tags: ["concentration"],
    limitStat: "concentrationLimit",
    bindsSourceEffects: true,
    defaultExpiry: [{ type: "onZeroHp" }],
  },
  grappled: {
    id: "grappled",
    grants: [{ type: "modifier", id: "status_speed_zero" }],
  },
  restrained: {
    id: "restrained",
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
    ].map(plain),
  ),
};

import { StatusTemplate } from "@/core/entities/rules/status/status-template";

const plain = (id: string): [string, StatusTemplate] => [id, { id }];

export const BASE_STATUSES: Record<string, StatusTemplate> = {
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

import { StatusTemplate } from "@/core/entities/rules/status/status-template";

import { CORE_STATUSES, CONDITION_STATUSES } from "./conditions/conditions";

import { BARBARIAN_STATUSES } from "./by-class/barbarian/barbarian-statuses";
import { FIGHTER_STATUSES } from "./by-class/fighter/fighter-statuses";

const plain = (id: string): [string, StatusTemplate] => [id, { id }];

const CLASS_FEATURE_STATUSES: Record<string, StatusTemplate> = {
  ...BARBARIAN_STATUSES,
  ...FIGHTER_STATUSES,
};

export const BASE_STATUSES: Record<string, StatusTemplate> = {
  ...CORE_STATUSES,
  ...CONDITION_STATUSES,
  ...CLASS_FEATURE_STATUSES,

  concentrating: {
    id: "concentrating",
    tags: ["concentration"],
    limitStat: "concentrationLimit",
    bindsSourceEffects: true,
    defaultExpiry: [{ type: "onZeroHp" }],
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

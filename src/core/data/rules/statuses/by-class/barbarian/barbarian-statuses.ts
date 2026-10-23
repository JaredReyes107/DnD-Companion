import { StatusTemplate } from "@/core/entities/rules/status/status-template";

const surge = (
  n: number,
  extra: Partial<StatusTemplate> = {},
): [string, StatusTemplate] => [
  `wild_surge_${n}`,
  {
    id: `wild_surge_${n}`,
    kind: "buff",
    tags: ["wild-magic"],
    dependsOn: "raging",
    ...extra,
  },
];
const form = (id: string): [string, StatusTemplate] => [
  id,
  { id, kind: "buff", tags: ["beast-form"], dependsOn: "raging" },
];

const SUBCLASS_STATUES: Record<string, StatusTemplate> = {
  //Berserker
  frenzied: { id: "frenzied", kind: "buff", tags: ["rage"] }, // exhaustion at the end: not modeled

  //Storm Herald
  storm_aura_desert: { id: "storm_aura_desert", kind: "aura" },
  storm_aura_sea: { id: "storm_aura_sea", kind: "aura" },
  storm_aura_tundra: { id: "storm_aura_tundra", kind: "aura" },

  //TCE
  ...Object.fromEntries([
    form("beast_form_bite"),
    form("beast_form_claws"),
    form("beast_form_tail"),
    surge(1),
    surge(2),
    surge(3),
    surge(4),
    surge(5),
    surge(6, { grants: [{ type: "modifier", id: "wild_surge_ac" }] }), // +1 AC (allies: descriptive)
    surge(7),
    surge(8),
  ]),
  call_the_hunt_active: {
    id: "call_the_hunt_active",
    kind: "aura",
    dependsOn: "raging",
  },
  magic_awareness_active: { id: "magic_awareness_active", kind: "buff" },
  bolstering_magic_active: { id: "bolstering_magic_active", kind: "buff" }, // d3 on attacks/checks: descriptive
};

export const BARBARIAN_STATUSES: Record<string, StatusTemplate> = {
  ...SUBCLASS_STATUES,

  //TODO: Auto-end on 0 HP (unconscious)
  //TODO: Log. End if didn't attack
  //TODO: block new concentrations & casting
  raging: {
    id: "raging",
    kind: "buff",
    tags: ["rage"],
    grants: [{ type: "advantage", id: "rage_str" }],
  },
  // Rage damage bonus and B/P/S resistance: descriptive only.
  reckless: { id: "reckless", kind: "buff" }, // attacks against you have advantage
};

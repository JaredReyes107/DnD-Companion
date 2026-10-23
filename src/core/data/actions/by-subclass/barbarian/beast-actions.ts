import { ActionInstance } from "@/core/entities/actions/action-instance";
import { P } from "@/core/entities/rules/predicate/predicate";

const raging = P.status("raging");
const FORMS = ["bite", "claws", "tail"] as const;
const noForm = P.all(...FORMS.map((f) => P.status(`beast_form_${f}`, false)));

const form = (f: (typeof FORMS)[number]): [string, ActionInstance] => [
  `beast_form_${f}`,
  {
    id: `beast_form_${f}`,
    sourceId: "beast",
    boards: ["combat"],
    duration: { kind: "instantaneous" }, // chosen as you enter your rage
    requires: P.all(raging, noForm),
    effects: [
      { type: "applyStatus", statusId: `beast_form_${f}`, durationRounds: 10 },
    ],
  },
];

export const BEAST_ACTIONS: Record<string, ActionInstance> = {
  ...Object.fromEntries(FORMS.map(form)),

  beast_tail_reaction: {
    id: "beast_tail_reaction",
    sourceId: "beast",
    boards: ["combat"],
    duration: { kind: "economy", slot: "reaction" },
    trigger: ["onAttack"],
    requires: P.status("beast_form_tail"),
    effects: [], // Not modeled. +d8 AC against the attack
  },
  infectious_fury: {
    id: "infectious_fury",
    sourceId: "beast",
    boards: ["combat"],
    duration: { kind: "instantaneous" },
    trigger: ["onAttackHit"],
    requires: raging,
    effects: [
      { type: "modifyResource", resourceId: "infectious_fury", amount: -1 },
    ],
  },
  call_the_hunt: {
    id: "call_the_hunt",
    sourceId: "beast",
    boards: ["combat"],
    duration: { kind: "instantaneous" },
    requires: raging,
    effects: [
      { type: "modifyResource", resourceId: "call_the_hunt", amount: -1 },
      {
        type: "applyStatus",
        statusId: "call_the_hunt_active",
        durationRounds: 10,
      },
      // 5 temp HP per ally and their d6 damage bonus: not modeled (no allies/temp HP effect yet)
    ],
  },
};

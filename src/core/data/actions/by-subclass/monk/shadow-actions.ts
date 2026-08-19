// src/core/data/actions/by-subclass/monk/shadow-actions.ts
import { ActionInstance } from "@/core/entities/actions/action-instance";

export const SHADOW_ACTIONS: Record<string, ActionInstance> = {
  shadow_arts_minor_illusion: {
    id: "shadow_arts_minor_illusion",
    sourceId: "shadow",
    boards: ["exploration", "roleplay"],
    duration: { kind: "economy", slot: "action" },
    effects: [],
    // TODO: Attach to actual 'Minor Illusion' cantrip.
  },
  shadow_arts_darkness: {
    id: "shadow_arts_darkness",
    sourceId: "shadow",
    boards: ["combat", "exploration"],
    duration: { kind: "economy", slot: "action" },
    effects: [{ type: "modifyResource", resourceId: "ki_points", amount: -2 }],
    // TODO: Attach to actual 'Darkness' spell.
  },
  shadow_arts_darkvision: {
    id: "shadow_arts_darkvision",
    sourceId: "shadow",
    boards: ["exploration"],
    duration: { kind: "economy", slot: "action" },
    effects: [{ type: "modifyResource", resourceId: "ki_points", amount: -2 }],
    // TODO: Attach to actual 'Darkvision' spell.
    // - Apply purely descriptive modifier
  },
  shadow_arts_pass_without_trace: {
    id: "shadow_arts_pass_without_trace",
    sourceId: "shadow",
    boards: ["exploration"],
    duration: { kind: "economy", slot: "action" },
    effects: [{ type: "modifyResource", resourceId: "ki_points", amount: -2 }],
    // TODO: Attach to actual 'Pass Without Trace' spell.
    // - Modifier of +10 to stealth checks on character sheet
  },
  shadow_arts_silence: {
    id: "shadow_arts_silence",
    sourceId: "shadow",
    boards: ["combat", "exploration", "roleplay"],
    duration: { kind: "economy", slot: "action" },
    effects: [{ type: "modifyResource", resourceId: "ki_points", amount: -2 }],
    // TODO: Attach to actual 'Silence' spell.
  },

  shadow_step: {
    id: "shadow_step",
    sourceId: "shadow",
    boards: ["combat", "exploration"],
    duration: { kind: "economy", slot: "bonusAction" },
    effects: [],
    // TODO: Modifier for advantage on first attack. Expires at end of turn
  },

  cloak_of_shadows: {
    id: "cloak_of_shadows",
    sourceId: "shadow",
    boards: ["combat", "exploration"],
    duration: { kind: "economy", slot: "action" },
    effects: [],
    // TODO: Modifier with undefined time. Only broken on certain actions
  },

  opportunist: {
    id: "opportunist",
    sourceId: "shadow",
    boards: ["combat"],
    duration: { kind: "economy", slot: "reaction" },
    trigger: ["onAttackHit"],
    // TODO: Self-vs-other-actor gap.
    effects: [],
  },
};

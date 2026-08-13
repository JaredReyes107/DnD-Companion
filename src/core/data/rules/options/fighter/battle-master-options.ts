import { OptionTemplate } from "@/core/entities/rules/option-template";

export const BATTLE_MASTER_OPTIONS: Record<string, OptionTemplate> = {
  commander_strike: {
    id: "commander_strike",
    poolIds: ["maneuvers"],
    tags: ["combat"],
    grants: [{ type: "action", id: "commander_strike" }],
  },
  disarming_attack: {
    id: "disarming_attack",
    poolIds: ["maneuvers"],
    tags: ["combat"],
    grants: [{ type: "action", id: "disarming_attack" }],
  },
  distracting_strike: {
    id: "distracting_strike",
    poolIds: ["maneuvers"],
    tags: ["combat"],
    grants: [{ type: "action", id: "distracting_strike" }],
  },
  evasive_footwork: {
    id: "evasive_footwork",
    poolIds: ["maneuvers"],
    tags: ["combat"],
    grants: [{ type: "action", id: "evasive_footwork" }],
  },
  feinting_attack: {
    id: "feinting_attack",
    poolIds: ["maneuvers"],
    tags: ["combat"],
    grants: [{ type: "action", id: "feinting_attack" }],
  },
  goading_attack: {
    id: "goading_attack",
    poolIds: ["maneuvers"],
    tags: ["combat"],
    grants: [{ type: "action", id: "goading_attack" }],
  },
  lunging_attack: {
    id: "lunging_attack",
    poolIds: ["maneuvers"],
    tags: ["combat"],
    grants: [{ type: "action", id: "lunging_attack" }],
  },
  maneuvering_attack: {
    id: "maneuvering_attack",
    poolIds: ["maneuvers"],
    tags: ["combat"],
    grants: [{ type: "action", id: "maneuvering_attack" }],
  },
  menacing_attack: {
    id: "menacing_attack",
    poolIds: ["maneuvers"],
    tags: ["combat"],
    grants: [{ type: "action", id: "menacing_attack" }],
  },
  parry: {
    id: "parry",
    poolIds: ["maneuvers"],
    tags: ["combat"],
    grants: [{ type: "action", id: "parry" }],
  },
  precision_attack: {
    id: "precision_attack",
    poolIds: ["maneuvers"],
    tags: ["combat"],
    grants: [{ type: "action", id: "precision_attack" }],
  },
  pushing_attack: {
    id: "pushing_attack",
    poolIds: ["maneuvers"],
    tags: ["combat"],
    grants: [{ type: "action", id: "pushing_attack" }],
  },
  rally: {
    id: "rally",
    poolIds: ["maneuvers"],
    tags: ["combat"],
    grants: [{ type: "action", id: "rally" }],
  },
  riposte: {
    id: "riposte",
    poolIds: ["maneuvers"],
    tags: ["combat"],
    grants: [{ type: "action", id: "riposte" }],
  },
  sweeping_attack: {
    id: "sweeping_attack",
    poolIds: ["maneuvers"],
    tags: ["combat"],
    grants: [{ type: "action", id: "sweeping_attack" }],
  },
  trip_attack: {
    id: "trip_attack",
    poolIds: ["maneuvers"],
    grants: [{ type: "action", id: "trip_attack" }],
    tags: ["combat"],
  },

  //TGE
  ambush: {
    id: "ambush",
    poolIds: ["maneuvers"],
    grants: [{ type: "action", id: "ambush" }],
    tags: ["combat"],
  },
  bait_and_switch: {
    id: "bait_and_switch",
    poolIds: ["maneuvers"],
    grants: [{ type: "action", id: "bait_and_switch" }],
    tags: ["combat"],
  },
  brace: {
    id: "brace",
    poolIds: ["maneuvers"],
    grants: [{ type: "action", id: "brace" }],
    tags: ["combat"],
  },
  commanding_presence: {
    id: "commanding_presence",
    poolIds: ["maneuvers"],
    grants: [{ type: "action", id: "commanding_presence" }],
    tags: ["combat"],
  },
  grappling_strike: {
    id: "grappling_strike",
    poolIds: ["maneuvers"],
    grants: [{ type: "action", id: "grappling_strike" }],
    tags: ["combat"],
  },
  quick_toss: {
    id: "quick_toss",
    poolIds: ["maneuvers"],
    grants: [{ type: "action", id: "quick_toss" }],
    tags: ["combat"],
  },
  tactical_assesment: {
    id: "tactical_assesment",
    poolIds: ["maneuvers"],
    grants: [{ type: "action", id: "tactical_assesment" }],
    tags: ["combat"],
  },
};

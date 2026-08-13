import { ActionInstance } from "@/core/entities/actions/action-instance";

export const BATTLE_MASTER_ACTIONS: Record<string, ActionInstance> = {
  know_your_enemy: {
    id: "know_your_enemy",
    sourceId: "battle_master",
    boards: ["roleplay", "exploration"],
    duration: { kind: "timed", minutes: 1 },
    effects: [],
  },
  relentless: {
    id: "relentless",
    sourceId: "battle_master",
    boards: ["combat"],
    duration: { kind: "instantaneous" },
    trigger: ["onInitiativeRoll"], // TODO: Only if resource is 0
    effects: [
      { type: "modifyResource", resourceId: "superiority_dice", amount: +1 },
    ],
  },

  //Maneuvers
  commander_strike: {
    id: "commander_strike",
    sourceId: "battle_master",
    boards: ["combat"],
    duration: { kind: "instantaneous" },
    trigger: ["onAttack"],
    effects: [
      { type: "modifyResource", resourceId: "superiority_dice", amount: -1 },
    ],
  },
  disarming_attack: {
    id: "disarming_attack",
    sourceId: "battle_master",
    boards: ["combat"],
    duration: { kind: "instantaneous" },
    trigger: ["onAttackHit"], // TODO: Specifically with a weapon
    effects: [
      { type: "modifyResource", resourceId: "superiority_dice", amount: -1 },
    ],
  },
  distracting_strike: {
    id: "distracting_strike",
    sourceId: "battle_master",
    boards: ["combat"],
    duration: { kind: "instantaneous" },
    trigger: ["onAttackHit"], // TODO: Specifically with a weapon
    effects: [
      { type: "modifyResource", resourceId: "superiority_dice", amount: -1 },
    ],
  },
  evasive_footwork: {
    id: "evasive_footwork",
    sourceId: "battle_master",
    boards: ["combat"],
    duration: { kind: "instantaneous" },
    trigger: ["onMovement"],
    effects: [
      { type: "modifyResource", resourceId: "superiority_dice", amount: -1 },
      // TODO: AC modifier until 0 spd or end of turn (number equal to dice result)
    ],
  },
  feinting_attack: {
    id: "feinting_attack",
    sourceId: "battle_master",
    boards: ["combat"],
    duration: { kind: "economy", slot: "bonusAction" },
    effects: [
      { type: "modifyResource", resourceId: "superiority_dice", amount: -1 },
    ],
  },
  goading_attack: {
    id: "goading_attack",
    sourceId: "battle_master",
    boards: ["combat"],
    duration: { kind: "instantaneous" },
    trigger: ["onAttackHit"], // TODO: Specifically with a weapon
    effects: [
      { type: "modifyResource", resourceId: "superiority_dice", amount: -1 },
    ],
  },
  lunging_attack: {
    id: "lunging_attack",
    sourceId: "battle_master",
    boards: ["combat"],
    duration: { kind: "economy", slot: "bonusAction" },
    trigger: ["onAttack"], // TODO: Specifically with a melee weapon
    effects: [
      { type: "modifyResource", resourceId: "superiority_dice", amount: -1 },
    ],
  },
  maneuvering_attack: {
    id: "maneuvering_attack",
    sourceId: "battle_master",
    boards: ["combat"],
    duration: { kind: "instantaneous" },
    trigger: ["onAttackHit"], // TODO: Specifically with a weapon
    effects: [
      { type: "modifyResource", resourceId: "superiority_dice", amount: -1 },
    ],
  },
  menacing_attack: {
    id: "menacing_attack",
    sourceId: "battle_master",
    boards: ["combat"],
    duration: { kind: "economy", slot: "bonusAction" },
    trigger: ["onAttack"], // TODO: Specifically with a weapon
    effects: [
      { type: "modifyResource", resourceId: "superiority_dice", amount: -1 },
    ],
  },
  parry: {
    id: "parry",
    sourceId: "battle_master",
    boards: ["combat"],
    duration: { kind: "economy", slot: "reaction" },
    trigger: ["onDamageTaken"], // TODO: Specifically against a meele weapon attack
    effects: [
      { type: "modifyResource", resourceId: "superiority_dice", amount: -1 },
      // TODO: Reduces Damage (number equal to dice result + Dex)
    ],
  },
  precision_attack: {
    id: "precision_attack",
    sourceId: "battle_master",
    boards: ["combat"],
    duration: { kind: "instantaneous" },
    trigger: ["onAttack"], // TODO: Specifically with a weapon
    effects: [
      { type: "modifyResource", resourceId: "superiority_dice", amount: -1 },
    ],
  },
  pushing_attack: {
    id: "pushing_attack",
    sourceId: "battle_master",
    boards: ["combat"],
    trigger: ["onAttack"], // TODO: Specifically with a weapon
    duration: { kind: "instantaneous" },
    effects: [
      { type: "modifyResource", resourceId: "superiority_dice", amount: -1 },
    ],
  },
  rally: {
    id: "rally",
    sourceId: "battle_master",
    boards: ["combat"],
    duration: { kind: "economy", slot: "bonusAction" },
    effects: [
      { type: "modifyResource", resourceId: "superiority_dice", amount: -1 },
      // TODO: Temp HP (number equal to dice result + Cha)
    ],
  },
  riposte: {
    id: "riposte",
    sourceId: "battle_master",
    boards: ["combat"],
    duration: { kind: "economy", slot: "reaction" },
    trigger: ["onDamageTaken"], // TODO: Enemy misses on melee attack
    effects: [
      { type: "modifyResource", resourceId: "superiority_dice", amount: -1 },
    ],
  },
  sweeping_attack: {
    id: "sweeping_attack",
    sourceId: "battle_master",
    boards: ["combat"],
    duration: { kind: "economy", slot: "reaction" },
    trigger: ["onAttackHit"],
    effects: [
      { type: "modifyResource", resourceId: "superiority_dice", amount: -1 },
    ],
  },
  trip_attack: {
    id: "trip_attack",
    sourceId: "battle_master",
    boards: ["combat"],
    duration: { kind: "instantaneous" },
    trigger: ["onAttackHit"],
    effects: [
      { type: "modifyResource", resourceId: "superiority_dice", amount: -1 },
    ],
  },

  // TGE
  ambush: {
    id: "ambush",
    sourceId: "battle_master",
    boards: ["combat", "exploration"],
    duration: { kind: "instantaneous" },
    trigger: ["onInitiativeRoll"],
    effects: [
      { type: "modifyResource", resourceId: "superiority_dice", amount: -1 },
    ],
  },
  bait_and_switch: {
    id: "bait_and_switch",
    sourceId: "battle_master",
    boards: ["combat"],
    duration: { kind: "instantaneous" },
    trigger: ["onAttackHit"],
    effects: [
      { type: "modifyResource", resourceId: "superiority_dice", amount: -1 },
      // TODO: -5 spd
    ],
  },
  brace: {
    id: "brace",
    sourceId: "battle_master",
    boards: ["combat"],
    duration: { kind: "economy", slot: "reaction" },
    effects: [
      { type: "modifyResource", resourceId: "superiority_dice", amount: -1 },
    ],
  },
  commanding_presence: {
    id: "commanding_presence",
    sourceId: "battle_master",
    boards: ["roleplay"],
    duration: { kind: "instantaneous" },
    effects: [
      { type: "modifyResource", resourceId: "superiority_dice", amount: -1 },
    ],
  },
  grappling_strike: {
    id: "grappling_strike",
    sourceId: "battle_master",
    boards: ["combat"],
    duration: { kind: "economy", slot: "bonusAction" },
    trigger: ["onAttackHit"],
    effects: [
      { type: "modifyResource", resourceId: "superiority_dice", amount: -1 },
    ],
  },
  quick_toss: {
    id: "quick_toss",
    sourceId: "battle_master",
    boards: ["combat"],
    duration: { kind: "economy", slot: "bonusAction" },
    effects: [
      { type: "modifyResource", resourceId: "superiority_dice", amount: -1 },
    ],
  },
  tactical_assesment: {
    id: "tactical_assesment",
    sourceId: "battle_master",
    boards: ["combat"],
    duration: { kind: "instantaneous" },
    effects: [
      { type: "modifyResource", resourceId: "superiority_dice", amount: -1 },
    ],
  },
};

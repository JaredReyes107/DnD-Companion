import { ActionDuration } from "./action-duration";
import { ActionBoard } from "./action-board";
import { ActionTrigger } from "./action-trigger";
import { ExpiryCondition } from "../rules/duration/expiry-condition";
import { AdvantagePolarity } from "../rules/advantage/advantage-instance";
import { Predicate } from "../rules/predicate/predicate";
import { CostOption } from "./cost-option";

type EffectBase = { key?: string };

export type ModifyResourceEffect = EffectBase & {
  type: "modifyResource";
  resourceId: string;
  amount: number;
};

export type ConvertResourceEffect = EffectBase & {
  type: "convertResource";

  from: {
    resourceId: string;
    amount: number;
  };

  to: {
    resourceId: string;
    amount: number;
  };
};

/** @deprecated Apply a status that grants the modifier/advantage instead. */
export type ApplyModifierEffect = EffectBase & {
  type: "applyModifier";
  modifiers: string[]; //modifierId
  durationRounds?: number;
  endsAt?: "startOfTurn" | "endOfTurn"; // default "startOfTurn"
  endsEarlyOn?: ExpiryCondition[]; // e.g. onZeroHp, onSpecificAction
  stacking?: "overlap" | "refresh" | "override" | "ignore";
};

/** @deprecated Apply a status that grants the modifier/advantage instead. */
export type ApplyAdvantageEffect = EffectBase & {
  type: "applyAdvantage";
  nodeIds: string[]; // CheckNode ids; a parent node covers its descendants
  polarity: AdvantagePolarity;
  durationRounds?: number;
  endsAt?: "startOfTurn" | "endOfTurn";
  endsEarlyOn?: ExpiryCondition[];
  concentration?: boolean;
};

export type ApplyStatusEffect = EffectBase & {
  type: "applyStatus";
  statusId: string;
  durationRounds?: number;
  endsAt?: "startOfTurn" | "endOfTurn";
  endsEarlyOn?: ExpiryCondition[];
};

export type EndEffectsEffect = EffectBase & {
  type: "endEffects";
  sourceIds?: string[]; // everything these sources applied
  statusIds?: string[]; // every instance of these statuses (cascades if bound)
};

export type ActionEffect =
  | ModifyResourceEffect
  | ConvertResourceEffect
  | ApplyModifierEffect
  | ApplyAdvantageEffect
  | ApplyStatusEffect
  | EndEffectsEffect;

export type ActionInstance = {
  id: string;
  sourceId: string;

  // REPLACES actionSlot. Old call sites that only cared about economy
  // pool can do: action.duration.kind === "economy" ? action.duration.slot : undefined
  duration: ActionDuration;
  trigger?: ActionTrigger[]; // when omitted: board-initiated only, the common case

  boards: ActionBoard[]; // where it renders today; ignored by economy logic entirely

  effects: ActionEffect[];
  requires?: Predicate;

  /** Payment alternatives. When present, the action must not also carry modifyResource effects. */
  costOptions?: CostOption[];
};

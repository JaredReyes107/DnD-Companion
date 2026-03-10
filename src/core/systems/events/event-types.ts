import { GameEvent } from "../../entities/modifiers/Event";

export interface EngineEventMap {
  [GameEvent.TURN_START]: {
    participantId: string;
  };
  [GameEvent.TURN_END]: {
    participantId: string;
  };
  [GameEvent.ROUND_START]: {
    round: number;
  };
  [GameEvent.ROUND_END]: {
    round: number;
  };
  [GameEvent.EFFECT_APPLIED]: {
    entityId: string;
    effectId: string;
  };
  [GameEvent.EFFECT_REMOVED]: {
    entityId: string;
    effectId: string;
  };
  [GameEvent.STATS_RECALCULATED]: {
    entityId: string;
  };
  [GameEvent.ENTITY_MOVED]: {
    entityId: string;
    from: { x: number; y: number };
    to: { x: number; y: number };
  };
  [GameEvent.ENTER_AURA]: {
    entityId: string;
    auraId: string;
  };
  [GameEvent.EXIT_AURA]: {
    entityId: string;
    auraId: string;
  };
  [GameEvent.COMBAT_START]: {
    participants: string[];
  };
  [GameEvent.COMBAT_END]: Record<string, never>;
}

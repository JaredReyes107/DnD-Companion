import { DiceProvider } from "../../systems/dice/DiceProvider";

export enum EngineMode {
  ASSISTANT,
  SIMULATION,
}

export interface EngineConfig {
  mode: EngineMode;
  diceProvider: DiceProvider;
}

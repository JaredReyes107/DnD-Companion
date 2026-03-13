import { DiceProvider } from "./DiceProvider";
import { RollState } from "../../entities/modifiers/RollState";

/**
 * Reusable utility for rolling a D20 with advantage, disadvantage, and neutral cancellation.
 */
export function rollD20WithRollState(
  dice: DiceProvider,
  state?: RollState,
): number {
  if (!state || state.advantage === state.disadvantage) {
    return dice.roll(20, 1)[0];
  }

  const [res1, res2] = dice.roll(20, 2);

  if (state.advantage) {
    return Math.max(res1, res2);
  }
  return Math.min(res1, res2);
}

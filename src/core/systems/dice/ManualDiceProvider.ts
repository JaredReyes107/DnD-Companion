import { DiceProvider } from "./DiceProvider";

export class ManualDiceProvider implements DiceProvider {
  roll(sides: number, count: number = 1): number[] {
    throw new Error(
      `Manual mode requires external input. Attempted to roll ${count}d${sides}.`,
    );
  }
}

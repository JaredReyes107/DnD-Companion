import { DiceProvider } from "./DiceProvider";

export class RandomDiceProvider implements DiceProvider {
  roll(sides: number, count: number = 1): number[] {
    return Array.from(
      { length: count },
      () => Math.floor(Math.random() * sides) + 1,
    );
  }
}

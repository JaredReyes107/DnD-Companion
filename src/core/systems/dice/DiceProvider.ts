export interface DiceProvider {
  roll(sides: number, count?: number): number[];
}

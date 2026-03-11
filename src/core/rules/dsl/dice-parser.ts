import { DiceProvider } from "../../systems/dice/DiceProvider";

export function parseDice(expr: string | number) {
  if (typeof expr === "number") {
    return () => expr;
  }

  const diceRegexp = /(\d+)d(\d+)/;
  const match = diceRegexp.exec(expr);
  if (!match) {
    const num = Number(expr);
    return () => (Number.isNaN(num) ? 0 : num);
  }

  const count = Number(match[1]);
  const sides = Number(match[2]);

  return (diceProvider: DiceProvider) => {
    const rolls = diceProvider.roll(sides, count);
    return rolls.reduce((a, b) => a + b, 0);
  };
}

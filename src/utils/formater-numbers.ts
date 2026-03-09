export function PrintNumberWithSign(value: number): string {
  let text = "";

  if (value > 0) {
    text = "+";
  }

  text += value;

  return text;
}

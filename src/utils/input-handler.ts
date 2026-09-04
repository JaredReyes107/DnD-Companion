export function returnNaturalNumber(text: string): number {
  const sanitized = text.replaceAll(/\D/g, "").replace(/^0+(?=\d)/, "");

  // prevent negatives, decimals, etc
  const value = sanitized === "" ? 0 : Number.parseInt(sanitized, 10);

  return value;
}

export function formatNaturalNumber(value: number): string {
  const text = value.toString();
  let formatted = text;

  for (let i = text.length - 3; i > 0; i -= 3) {
    const leftPart = formatted.slice(0, i);
    const rightPart = formatted.slice(i);

    formatted = leftPart + "," + rightPart;
  }

  return formatted;
}

export function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}
